// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationCheckRequestOperationTaskInstances extends $dara.Model {
  /**
   * @remarks
   * Cloud asset instance ID.
   * 
   * @example
   * r-bp1642ib4bg2bm****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Asset vendor. Values:
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
   * Check item ID.
   * > Obtain this parameter by calling the [ListCheckResult](~~ListCheckResult~~) interface.
   * 
   * @example
   * 23
   */
  checkId?: number;
  /**
   * @remarks
   * Timestamp (in milliseconds) of the end time of the queried task.
   * 
   * @example
   * 1719923175001
   */
  endTime?: number;
  /**
   * @remarks
   * Language type for request and response messages, default value is zh. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Information about the operated instances.
   * 
   * This parameter is required.
   */
  operationTaskInstances?: ListOperationCheckRequestOperationTaskInstances[];
  /**
   * @remarks
   * Timestamp (in milliseconds) of the start time of the queried task.
   * 
   * @example
   * 1719923175000
   */
  startTime?: number;
  /**
   * @remarks
   * Task type corresponding to the task:
   * - **REPAIR**: Repair task
   * - **ROLLBACK**: Rollback task
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

