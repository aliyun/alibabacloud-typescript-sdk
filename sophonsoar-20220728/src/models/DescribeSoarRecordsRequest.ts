// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time when the task was completed. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1755676363777
   */
  completedBeginTime?: number;
  /**
   * @remarks
   * The end time when the task was completed. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1683526284584
   */
  completedEndTime?: number;
  /**
   * @remarks
   * The end time of the task run. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1683772744953
   */
  endMillis?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 10 entries are returned on each page.
   * 
   * > Specify a value for PageSize.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > For more information, see [DescribePlaybooks](~~DescribePlaybooks~~).
   * 
   * @example
   * 8f55e76d-b5d5-4720-9cd7-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The input parameter of the playbook.
   * 
   * @example
   * input
   */
  queryValue?: string;
  /**
   * @remarks
   * The UUID of the playbook task execution.
   * 
   * > For more information, see [DescribeSoarRecords](https://help.aliyun.com/document_detail/2627455.html).
   * 
   * @example
   * 6d412cfa-0905-4567-8a83-xxxxxx
   */
  requestUuid?: string;
  /**
   * @remarks
   * The start time of the task run. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1683526284584
   */
  startMillis?: number;
  /**
   * @remarks
   * The status of the task run. Valid values:
   * 
   * - **success**: The task is successful.
   * 
   * - **failed**: The task failed.
   * 
   * - **inprogress**: The task is in progress.
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
  /**
   * @remarks
   * The trigger type of the task. Valid values:
   * 
   * - **stream**: stream
   * 
   * - **debug**: test
   * 
   * - **manual**: manual
   * 
   * - **timer**: scheduled
   * 
   * - **SubInvoke**: child flow
   * 
   * - **siem**: triggered by a SIEM product
   * 
   * @example
   * debug
   */
  triggerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that runs the playbook task.
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

