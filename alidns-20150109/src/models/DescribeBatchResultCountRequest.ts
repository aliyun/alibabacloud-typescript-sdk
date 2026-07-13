// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultCountRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the batch operation. Valid values:
   * 
   * - **DOMAIN_ADD**: Batch add domain names.
   * 
   * - **DOMAIN_DEL**: Batch delete domain names.
   * 
   * - **RR_ADD**: Batch add DNS records.
   * 
   * - **RR_DEL**: Batch delete DNS records.
   * 
   * > If you leave this parameter empty, no filter is applied.
   * 
   * @example
   * DOMAIN_ADD
   */
  batchType?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
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
   * The task ID.
   * 
   * > If you specify a task ID, the results of that task are returned. If you leave this parameter empty, the results of the most recent task are returned.
   * 
   * @example
   * 1****
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

