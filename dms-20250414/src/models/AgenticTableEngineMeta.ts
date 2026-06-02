// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticTableEngineMeta extends $dara.Model {
  checksum?: string;
  createTime?: string;
  dataBytes?: number;
  encoding?: string;
  engine?: string;
  fullChecksum?: string;
  indexBytes?: number;
  lastDdlTime?: string;
  numRows?: number;
  refInfo?: string;
  storageCapacity?: number;
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

