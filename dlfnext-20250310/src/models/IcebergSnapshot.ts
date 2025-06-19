// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IcebergSnapshot extends $dara.Model {
  addedRows?: number;
  id?: number;
  operation?: string;
  parentId?: number;
  schemaId?: number;
  sequenceNumber?: number;
  summary?: { [key: string]: string };
  timestampMillis?: number;
  static names(): { [key: string]: string } {
    return {
      addedRows: 'addedRows',
      id: 'id',
      operation: 'operation',
      parentId: 'parentId',
      schemaId: 'schemaId',
      sequenceNumber: 'sequenceNumber',
      summary: 'summary',
      timestampMillis: 'timestampMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedRows: 'number',
      id: 'number',
      operation: 'string',
      parentId: 'number',
      schemaId: 'number',
      sequenceNumber: 'number',
      summary: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timestampMillis: 'number',
    };
  }

  validate() {
    if(this.summary) {
      $dara.Model.validateMap(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

