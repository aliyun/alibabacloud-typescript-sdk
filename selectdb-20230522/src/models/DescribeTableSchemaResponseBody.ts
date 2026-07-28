// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableSchemaResponseBody extends $dara.Model {
  /**
   * @example
   * CREATE TABLE test_tb
   * (
   *     k1 TINYINT,
   *     k2 DECIMAL(10, 2) DEFAULT "10.05",
   *     k3 CHAR(10) COMMENT "string column",
   *     k4 INT NOT NULL DEFAULT "1" COMMENT "int column"
   * )
   * COMMENT "my first table"
   * DISTRIBUTED BY HASH(k1) BUCKETS 16
   */
  createStatement?: string;
  /**
   * @example
   * test_db
   */
  database?: string;
  /**
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  /**
   * @example
   * test_tb
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      createStatement: 'CreateStatement',
      database: 'Database',
      requestId: 'RequestId',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createStatement: 'string',
      database: 'string',
      requestId: 'string',
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

