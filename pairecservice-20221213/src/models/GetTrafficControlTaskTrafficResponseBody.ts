// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficControlTaskTrafficInfoTaskTrafficsValue } from "./TrafficControlTaskTrafficInfoTaskTrafficsValue";
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

export class GetTrafficControlTaskTrafficResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTaskTrafficInfo?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskTrafficInfo: 'TrafficControlTaskTrafficInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskTrafficInfo: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo,
    };
  }

  validate() {
    if(this.trafficControlTaskTrafficInfo && typeof (this.trafficControlTaskTrafficInfo as any).validate === 'function') {
      (this.trafficControlTaskTrafficInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

