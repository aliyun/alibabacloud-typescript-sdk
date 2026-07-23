// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficControlTaskTrafficInfoTaskTrafficsValue } from "./TrafficControlTaskTrafficInfoTaskTrafficsValue";
import { TrafficControlTaskTrafficInfoTargetTrafficsDataValue } from "./TrafficControlTaskTrafficInfoTargetTrafficsDataValue";


export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics extends $dara.Model {
  /**
   * @remarks
   * The detailed data reported for this traffic control target.
   */
  data?: { [key: string]: TrafficControlTaskTrafficInfoTargetTrafficsDataValue };
  /**
   * @remarks
   * The traffic control target ID.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The traffic data for each traffic control target.
   */
  targetTraffics?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics[];
  /**
   * @remarks
   * The reported traffic data for the traffic control task.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF1E160-3F36-5E73-A170-C75504F05BBC
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the reported traffic data.
   */
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

