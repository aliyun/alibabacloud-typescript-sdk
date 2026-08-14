// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportTaskDTO extends $dara.Model {
  /**
   * @example
   * 1753858800
   */
  createdAt?: number;
  error?: string;
  /**
   * @example
   * MemberBalanceChangeRecords_20260730.csv
   */
  filename?: string;
  /**
   * @example
   * 1753858860
   */
  finishedAt?: number;
  /**
   * @example
   * task_xxxxxxxx
   */
  id?: string;
  /**
   * @example
   * 50000
   */
  maxRows?: number;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * pending
   */
  status?: string;
  /**
   * @example
   * 100
   */
  total?: number;
  /**
   * @example
   * balance_orders
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      error: 'error',
      filename: 'filename',
      finishedAt: 'finishedAt',
      id: 'id',
      maxRows: 'maxRows',
      progress: 'progress',
      status: 'status',
      total: 'total',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      error: 'string',
      filename: 'string',
      finishedAt: 'number',
      id: 'string',
      maxRows: 'number',
      progress: 'number',
      status: 'string',
      total: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

