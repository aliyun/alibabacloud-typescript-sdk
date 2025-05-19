// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficControlTaskTrafficInfoTargetTrafficsDataValue } from "./TrafficControlTaskTrafficInfoTargetTrafficsDataValue";


export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics extends $dara.Model {
  data?: { [key: string]: TrafficControlTaskTrafficInfoTargetTrafficsDataValue };
  trafficContorlTargetId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      trafficContorlTargetId: 'TrafficContorlTargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': TrafficControlTaskTrafficInfoTargetTrafficsDataValue },
      trafficContorlTargetId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

