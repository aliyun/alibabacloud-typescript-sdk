// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultCountRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the batch operation. Valid values:
   * 
   * *   **DOMAIN_ADD**: adds domain names in batches.
   * *   **DOMAIN_DEL**: deletes domain names in batches.
   * *   **RR_ADD**: adds Domain Name System (DNS) records in batches.
   * *   **RR_DEL**: deletes DNS records in batches.
   * 
   * >  If you do not specify this parameter, filtering is not required.
   * 
   * @example
   * DOMAIN_ADD
   */
  batchType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
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
   * The task ID.
   * 
   * >  If you specify TaskId, the execution result of the specified task is returned. If you do not specify TaskId, the execution result of the last task is returned.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      lang: 'string',
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

