// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Babelfish is enabled.
   * 
   * >  If Babelfish is enabled when you purchase an ApsaraDB RDS for PostgreSQL instance, this parameter is fixed as **true**.
   * 
   * @example
   * true
   */
  babelfishEnabled?: string;
  /**
   * @remarks
   * The migration mode for Babelfish. Valid values:
   * 
   * *   **single-db**
   * *   **multi-db**
   * 
   * >  For more information about migration modes for Babelfish, see [Migration modes](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * single-db
   */
  migrationMode?: string;
  static names(): { [key: string]: string } {
    return {
      babelfishEnabled: 'BabelfishEnabled',
      migrationMode: 'MigrationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishEnabled: 'string',
      migrationMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

