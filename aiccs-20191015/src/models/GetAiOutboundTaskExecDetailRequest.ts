// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The task batch.
   * 
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @remarks
   * The ID of the campaign associated with the outbound call.
   * 
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @remarks
   * The execution status of a single number. Valid values:
   * 
   * - **1**: Pending.
   * - **2**: Calling.
   * - **3**: Completed.
   * - **4**: Terminated.
   * - **5**: Pending recall.
   * 
   * @example
   * 1
   */
  caseStatus?: number;
  /**
   * @remarks
   * The end time for number import. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1632290119000
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start time for number import. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1632289999000
   */
  createTimeStart?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID in the <b>Instance Management</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The outbound call number.
   * 
   * @example
   * 150****000
   */
  phoneNum?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * You can call the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) operation and view the **Data** response parameter, or call the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) operation and view the **TaskId** response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      caseId: 'number',
      caseStatus: 'number',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      phoneNum: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

