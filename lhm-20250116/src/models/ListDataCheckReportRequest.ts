// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @example
   * 0
   */
  checkResult?: number;
  /**
   * @example
   * 0
   */
  jobStatus?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * dim_func_with_diff_area_data_d
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      checkResult: 'checkResult',
      jobStatus: 'jobStatus',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      checkResult: 'number',
      jobStatus: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

