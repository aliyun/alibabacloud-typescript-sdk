// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaTableEngineMeta extends $dara.Model {
  createTime?: string;
  dataBytes?: number;
  encoding?: string;
  engine?: string;
  indexBytes?: number;
  lastDdlTime?: string;
  numRows?: number;
  refInfo?: string;
  storageCapacity?: number;
  tableSchemaName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataBytes: 'DataBytes',
      encoding: 'Encoding',
      engine: 'Engine',
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
      createTime: 'string',
      dataBytes: 'number',
      encoding: 'string',
      engine: 'string',
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

