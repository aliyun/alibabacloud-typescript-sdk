// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which messages are received.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The processing status. Valid values:
   * 
   * - Pending: Unprocessed.
   * - Success: Processed successfully.
   * - Processing: Processing.
   * - Ignored: Ignored.
   * - Failed: Processing failed.
   * - PendingOrFailed: Unprocessed or processing failed.
   * 
   * @example
   * Pending
   */
  processStatus?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      processStatus: 'ProcessStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      processStatus: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

