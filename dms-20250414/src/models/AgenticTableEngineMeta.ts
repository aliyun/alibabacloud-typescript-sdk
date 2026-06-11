// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableEngineMeta extends $dara.Model {
  /**
   * @remarks
   * A checksum to verify the table\\"s data integrity.
   */
  checksum?: string;
  /**
   * @remarks
   * The time the table was created, in UTC format (`YYYY-MM-DDThh:mm:ssZ`).
   */
  createTime?: string;
  /**
   * @remarks
   * The total size of the table\\"s data, in bytes.
   */
  dataBytes?: number;
  /**
   * @remarks
   * The character encoding of the table.
   */
  encoding?: string;
  /**
   * @remarks
   * The table\\"s storage engine, such as `InnoDB`.
   */
  engine?: string;
  /**
   * @remarks
   * A checksum of the table\\"s data and indexes.
   */
  fullChecksum?: string;
  /**
   * @remarks
   * The total size of the table\\"s indexes, in bytes.
   */
  indexBytes?: number;
  /**
   * @remarks
   * The timestamp of the last DDL (Data Definition Language) operation, in UTC format (`YYYY-MM-DDThh:mm:ssZ`).
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The number of rows in the table.
   */
  numRows?: number;
  /**
   * @remarks
   * The table\\"s reference information.
   */
  refInfo?: string;
  /**
   * @remarks
   * The table\\"s total storage capacity, in bytes.
   */
  storageCapacity?: number;
  /**
   * @remarks
   * The name of the table schema.
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

