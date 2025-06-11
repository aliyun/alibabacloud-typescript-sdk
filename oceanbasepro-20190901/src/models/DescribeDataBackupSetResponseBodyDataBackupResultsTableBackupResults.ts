// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults extends $dara.Model {
  /**
   * @example
   * order_ce****_online
   */
  database?: string;
  /**
   * @example
   * Create tag success
   */
  message?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * tr_sale_order_****
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      message: 'Message',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      message: 'string',
      status: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

