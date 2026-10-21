// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableEngineMeta extends $dara.Model {
  /**
   * @remarks
   * The checksum of the table metadata.
   * 
   * @example
   * 9f86d081884c7d65****
   */
  checksum?: string;
  /**
   * @remarks
   * The time when the table was created. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-01 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The data size of the table. Unit: bytes.
   * 
   * @example
   * 786432
   */
  dataBytes?: number;
  /**
   * @remarks
   * The character set encoding of the table.
   * 
   * @example
   * utf8mb4
   */
  encoding?: string;
  /**
   * @remarks
   * The storage engine of the table.
   * 
   * @example
   * InnoDB
   */
  engine?: string;
  /**
   * @remarks
   * The full checksum of the table metadata.
   * 
   * @example
   * 2c26b46b68ffc68f****
   */
  fullChecksum?: string;
  /**
   * @remarks
   * The index size of the table. Unit: bytes.
   * 
   * @example
   * 262144
   */
  indexBytes?: number;
  /**
   * @remarks
   * The time when the last DDL operation was executed on the table. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-02 10:00:00
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 10000
   */
  numRows?: number;
  /**
   * @remarks
   * The reference information of the table.
   * 
   * @example
   * order_db.orders_view
   */
  refInfo?: string;
  /**
   * @remarks
   * The storage capacity of the table. Unit: MB.
   * 
   * @example
   * 16
   */
  storageCapacity?: number;
  /**
   * @remarks
   * The name of the schema to which the table belongs.
   * 
   * @example
   * public
   */
  tableSchemaName?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      createTime: 'CreateTime',
      dataBytes: 'DataBytes',
      encoding: 'Encoding',
      engine: 'Engine',
      fullChecksum: 'FullChecksum',
      indexBytes: 'IndexBytes',
      lastDdlTime: 'LastDdlTime',
      numRows: 'NumRows',
      refInfo: 'RefInfo',
      storageCapacity: 'StorageCapacity',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      createTime: 'string',
      dataBytes: 'number',
      encoding: 'string',
      engine: 'string',
      fullChecksum: 'string',
      indexBytes: 'number',
      lastDdlTime: 'string',
      numRows: 'number',
      refInfo: 'string',
      storageCapacity: 'number',
      tableSchemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

