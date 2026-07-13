// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the batch operation. Valid values:
   * 
   * - **DOMAIN_ADD**: Add domain names in batches.
   * 
   * - **DOMAIN_DEL**: Delete domain names in batches.
   * 
   * - **RR_ADD**: Add DNS records in batches.
   * 
   * - **RR_DEL**: Delete DNS records in batches.
   * 
   * > If you leave this parameter empty, the results are not filtered by operation type.
   * 
   * @example
   * DOMAIN_ADD
   */
  batchType?: string;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The current page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the task. If you do not specify this parameter, the details of tasks in all states are returned.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8*******
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
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

