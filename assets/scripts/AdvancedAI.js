

var Distance;
var Target : Transform;
var LookAtDistance = 25.0;
var chaseRange = 15.0;
var AttackRange = 1.5;
var MoveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;

var TheDamage = 40;

private var attackTime : float;

var controller : CharacterController;
var gravity : float = 20.0;
private var MoveDirection : Vector3 = Vector3.zero;

function Start()
{
  attackTime = Time.time;
}

function Update(){
  Distance = Vector3.Distance(Target.position,transform.position);
  
  if(Distance < LookAtDistance)
  {
   LookAt();
  }
  
  if (Distance > LookAtDistance)
  {
   GetComponent.<Renderer>().material.color = Color.green;
  }
  
  if(Distance < AttackRange)
  {
   attack();
  }
  else if(Distance < chaseRange)
  {
    chase();  
  }
}
function LookAt(){
  GetComponent.<Renderer>().material.color = Color.yellow;
  var rotation = Quaternion.LookRotation(Target.position - transform.position);
  transform.rotation = Quaternion.Slerp(transform.rotation,rotation, Time.deltaTime * Damping);
}
function chase(){
  GetComponent.<Renderer>().material.color = Color.red;
  moveDirection = transform.forward;
  moveDirection *= MoveSpeed;
  
  moveDirection.y -= gravity* Time.deltaTime;
  controller.Move(moveDirection*Time.deltaTime);
}
function attack()
{
   if(Time.time > attackTime)
   {
   Target.SendMessage("ApplyDamage",TheDamage);
    Debug.Log("Enemy has attacked");
    attackTime = Time.time + attackRepeatTime;
   }
}

function ApplyDamage()
{
  chaseRange += 30;
  MoveSpeed+= 2;
  LookAtDistance  += 40;
}




