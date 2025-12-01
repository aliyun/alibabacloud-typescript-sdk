// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSowListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-03-28 16:19:35
   */
  completeTime?: string;
  /**
   * @remarks
   * Operation remarks.
   * 
   * @example
   * 新建
   */
  operateRemark?: string;
  /**
   * @remarks
   * Progress.
   * 
   * @example
   * IN_PREPARATION
   */
  progress?: string;
  /**
   * @remarks
   * Record count.
   * 
   * @example
   * 173
   */
  recordCount?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2023-03-24 16:51:26
   */
  startTime?: string;
  /**
   * @remarks
   * Task type.
   * 
   * @example
   * 安全风险评估
   */
  taskTypeName?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 安全产品配置问题与超量提醒
   */
  workOrderName?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      operateRemark: 'OperateRemark',
      progress: 'Progress',
      recordCount: 'RecordCount',
      startTime: 'StartTime',
      taskTypeName: 'TaskTypeName',
      workOrderName: 'WorkOrderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      operateRemark: 'string',
      progress: 'string',
      recordCount: 'number',
      startTime: 'string',
      taskTypeName: 'string',
      workOrderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSowListResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt information for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * FA8883BC-CB18-5E28-A113-8249917CA05E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSowListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

