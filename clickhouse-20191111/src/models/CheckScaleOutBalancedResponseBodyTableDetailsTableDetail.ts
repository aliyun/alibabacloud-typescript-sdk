// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckScaleOutBalancedResponseBodyTableDetailsTableDetail extends $dara.Model {
  /**
   * @remarks
   * The cluster. The value is fixed as **default**.
   * 
   * @example
   * default
   */
  cluster?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db_name
   */
  database?: string;
  /**
   * @remarks
   * The error details. Valid values:
   * 
   * *   **1**: The unique distributed table is missing.
   * *   **2**: More than one distributed table exists for the local table.
   * 
   * @example
   * 1
   */
  detail?: number;
  /**
   * @remarks
   * The name of the local table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      database: 'Database',
      detail: 'Detail',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      database: 'string',
      detail: 'number',
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

