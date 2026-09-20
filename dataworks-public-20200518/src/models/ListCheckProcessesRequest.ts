// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * The event code of the extension point.
   * 
   * This parameter is required.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The message ID of the DataWorks open message. After an extension point event is triggered, you can obtain the message ID from the received event message.
   * 
   * <props="china">For the message format, refer to [Message format](https://help.aliyun.com/document_detail/215367.html).
   * 
   * @example
   * 03400b03-b721-4c34-8727-2****1
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 123333
   */
  operator?: string;
  /**
   * @remarks
   * The page number in a paged query. This parameter is used for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 123465
   */
  projectId?: number;
  /**
   * @remarks
   * The check status of the extension. Valid values:
   * 
   * - CHECKING: The check is in progress.
   * - PASSED: The check is passed.
   * - BLOCKED: The check is not passed.
   * 
   * @example
   * True
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      messageId: 'MessageId',
      operator: 'Operator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      messageId: 'string',
      operator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

