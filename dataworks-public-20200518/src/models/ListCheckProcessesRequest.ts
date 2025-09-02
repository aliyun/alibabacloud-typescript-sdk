// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * Extension point event encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The message ID in DataWorks OpenEvent. You can obtain the ID from a received message when an extension point event is triggered.
   * 
   * @example
   * 03400b03-b721-4c34-8727-2****1
   */
  messageId?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 123333232
   */
  operator?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * *   CHECKING
   * *   PASSED
   * *   BLOCKED
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

