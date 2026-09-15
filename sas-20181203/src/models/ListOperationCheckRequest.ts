// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationCheckRequestOperationTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The cloud asset instance ID.
   * 
   * @example
   * r-bp1642ib4bg2bm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * - **ALIYUN**: Alibaba Cloud
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The check item ID.
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain this parameter.
   * This parameter is required. If you do not specify this parameter, the API returns a 400 error.
   * 
   * @example
   * 23
   */
  checkId?: number;
  /**
   * @remarks
   * The timestamp of the task end time to query. Unit: milliseconds.
   * 
   * @example
   * 1719923175001
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: zh. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The information about the instances on which the operation is performed.
   * 
   * This parameter is required.
   */
  operationTaskInstances?: ListOperationCheckRequestOperationTaskInstances[];
  /**
   * @remarks
   * The timestamp of the task start time to query. Unit: milliseconds.
   * 
   * @example
   * 1719923175000
   */
  startTime?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * - **REPAIR**: fix task
   * - **ROLLBACK**: rollback task
   * 
   * This parameter is required.
   * 
   * @example
   * REPAIR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      endTime: 'EndTime',
      lang: 'Lang',
      operationTaskInstances: 'OperationTaskInstances',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      endTime: 'number',
      lang: 'string',
      operationTaskInstances: { 'type': 'array', 'itemType': ListOperationCheckRequestOperationTaskInstances },
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTaskInstances)) {
      $dara.Model.validateArray(this.operationTaskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

