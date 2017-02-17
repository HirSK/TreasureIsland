#pragma strict

var TheDamage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;
var TheMace : Transform;
//var TheSword : Transform;
var TheSystem : Transform;

function Update(){
  if(Input.GetButtonDown("Fire1"))
  {
    //Attack animation
    TheMace.GetComponent.<Animation>().Play("Attack");
    //TheSword.animation.Play("Attack");
    //Attack function
    var hit: RaycastHit;
      if(Physics.Raycast(TheSystem.transform.position,TheSystem.transform.TransformDirection(Vector3.forward),hit))
        {    Distance = hit.distance;
             if(Distance < MaxDistance)
             {
             hit.transform.SendMessage("ApplyDamage",TheDamage,SendMessageOptions.DontRequireReceiver);
             }
       }
    }
//    if(TheMace.animation.isPlaying == false)
//    {
//     TheMace.animation.CrossFade("Idle");
//    }
//    if(Input.GetKey(KeyCode.LeftShift))
//    {
//     TheMace.animation.CrossFade("Sprint");
//    }
//    if(Input.GetKeyUp(KeyCode.LeftShift))
//    {
//    TheMace.animation.CrossFade("Idle");
//    }
  }
  
  
  
  
  
  
  
  