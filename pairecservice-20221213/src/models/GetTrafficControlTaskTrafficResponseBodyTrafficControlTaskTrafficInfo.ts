// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics } from "./GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics";
import { TrafficControlTaskTrafficInfoTaskTrafficsValue } from "./TrafficControlTaskTrafficInfoTaskTrafficsValue";


export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo extends $dara.Model {
  targetTraffics?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics[];
  taskTraffics?: { [key: string]: TrafficControlTaskTrafficInfoTaskTrafficsValue };
  static names(): { [key: string]: string } {
    return {
      targetTraffics: 'TargetTraffics',
      taskTraffics: 'TaskTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetTraffics: { 'type': 'array', 'itemType': GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics },
      taskTraffics: { 'type': 'map', 'keyType': 'string', 'valueType': TrafficControlTaskTrafficInfoTaskTrafficsValue },
    };
  }

  validate() {
    if(Array.isArray(this.targetTraffics)) {
      $dara.Model.validateArray(this.targetTraffics);
    }
    if(this.taskTraffics) {
      $dara.Model.validateMap(this.taskTraffics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

