// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The job batch version.
   * 
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @remarks
   * Activity ID associated with this outbound call.
   * 
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @remarks
   * Job execution status for a single phone number. Valid values:
   * 
   * - **1**: Pending call.
   * - **2**: Calling.
   * - **3**: Completed.
   * - **4**: Stopped.
   * - **5**: Pending retry.
   * 
   * @example
   * 1
   */
  caseStatus?: number;
  /**
   * @remarks
   * End time of phone number import. Format: UNIX timestamp in milliseconds.
   * 
   * @example
   * 1632290119000
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * Start time of phone number import. Format: UNIX timestamp in milliseconds.
   * 
   * @example
   * 1632289999000
   */
  createTimeStart?: number;
  /**
   * @remarks
   * Page size. The value must be greater than **0**. Default Value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID.
   * 
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
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
   * The outbound phone number.
   * 
   * @example
   * 150****000
   */
  phoneNum?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * You can invoke the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) API and check the **Data** field in the response, or invoke the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) API and check the **TaskId** field in the response.
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

