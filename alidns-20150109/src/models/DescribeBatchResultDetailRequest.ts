// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the batch operation. Valid values:
   * 
   * *   **DOMAIN_ADD**: adds domain names in batches.
   * *   **DOMAIN_DEL**: deletes domain names in batches.
   * *   **RR_ADD**: adds Domain Name System (DNS) records in batches.
   * *   **RR_DEL**: deletes DNS records in batches.
   * 
   * >  Do not perform filtering when this field is empty.
   * 
   * @example
   * DOMAIN_ADD
   */
  batchType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The execution result. If you do not specify this parameter, all results are returned.
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
   * 83618818
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

