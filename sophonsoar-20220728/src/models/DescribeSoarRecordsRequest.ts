// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordsRequest extends $dara.Model {
  completedBeginTime?: number;
  completedEndTime?: number;
  /**
   * @remarks
   * The end time of the task execution, in 13-digit timestamp format.
   * 
   * @example
   * 1683772744953
   */
  endMillis?: number;
  /**
   * @remarks
   * Set the language type for requests and received messages. The default is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Set which page to start displaying the query results from. The default value is 1, indicating the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specify the maximum number of data entries per page when performing a paginated query. The default number of entries per page is 20. If the PageSize parameter is empty, it will return 10 entries by default.
   * > It is recommended not to leave the PageSize value empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * > You can obtain this parameter by calling the [DescribePlaybooks](~~DescribePlaybooks~~) interface.
   * 
   * @example
   * 8f55e76d-b5d5-4720-9cd7-xxxxx
   */
  playbookUuid?: string;
  queryValue?: string;
  /**
   * @remarks
   * UUID of the playbook task execution.
   * > You can obtain this parameter by calling the [DescribeSoarRecords](https://help.aliyun.com/document_detail/2627455.html) interface.
   * 
   * @example
   * 6d412cfa-0905-4567-8a83-xxxxxx
   */
  requestUuid?: string;
  /**
   * @remarks
   * The start time of the task execution, in 13-digit timestamp format.
   * 
   * @example
   * 1683526284584
   */
  startMillis?: number;
  /**
   * @remarks
   * The status of the task execution. Values:
   * 
   * - **success**: Successful task.
   * - **failed**: Failed task.
   * - **inprogress**: Task in progress
   * 
   * @example
   * inprogress
   */
  taskStatus?: string;
  /**
   * @remarks
   * The MD5 value of the playbook configuration.
   * 
   * @example
   * be0a4ef084dd174abe478df52xxxxx
   */
  taskflowMd5?: string;
  triggerType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that executed the playbook task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      completedBeginTime: 'CompletedBeginTime',
      completedEndTime: 'CompletedEndTime',
      endMillis: 'EndMillis',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
      queryValue: 'QueryValue',
      requestUuid: 'RequestUuid',
      startMillis: 'StartMillis',
      taskStatus: 'TaskStatus',
      taskflowMd5: 'TaskflowMd5',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedBeginTime: 'number',
      completedEndTime: 'number',
      endMillis: 'number',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
      queryValue: 'string',
      requestUuid: 'string',
      startMillis: 'number',
      taskStatus: 'string',
      taskflowMd5: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

