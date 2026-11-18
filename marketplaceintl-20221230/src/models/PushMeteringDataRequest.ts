// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMeteringDataRequestMeteringData extends $dara.Model {
  endTime?: number;
  instanceId?: string;
  meteringAssist?: string;
  meteringEntity?: string;
  /**
   * @example
   * ORDER20231001
   */
  pushOrderBizId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      meteringAssist: 'MeteringAssist',
      meteringEntity: 'MeteringEntity',
      pushOrderBizId: 'PushOrderBizId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      meteringAssist: 'string',
      meteringEntity: 'string',
      pushOrderBizId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataRequest extends $dara.Model {
  gmtCreate?: string;
  metering?: string;
  meteringData?: PushMeteringDataRequestMeteringData[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      metering: 'Metering',
      meteringData: 'MeteringData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      metering: 'string',
      meteringData: { 'type': 'array', 'itemType': PushMeteringDataRequestMeteringData },
    };
  }

  validate() {
    if(Array.isArray(this.meteringData)) {
      $dara.Model.validateArray(this.meteringData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

