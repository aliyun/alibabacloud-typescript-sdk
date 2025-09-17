// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMeteringDataRequestMeteringData extends $dara.Model {
  /**
   * @example
   * 1666854480406
   */
  endTime?: number;
  /**
   * @example
   * gtm-cn-20p314k5h05
   */
  instanceId?: string;
  /**
   * @example
   * test001
   */
  meteringAssist?: string;
  /**
   * @example
   * {"VirtualCpu":10}
   */
  meteringEntity?: string;
  /**
   * @example
   * ORDER20231001
   */
  pushOrderBizId?: string;
  /**
   * @example
   * 1662284820000
   */
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
  /**
   * @example
   * 2023-01-11 10:31:00
   */
  gmtCreate?: string;
  meteringData?: PushMeteringDataRequestMeteringData[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      meteringData: 'MeteringData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
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

