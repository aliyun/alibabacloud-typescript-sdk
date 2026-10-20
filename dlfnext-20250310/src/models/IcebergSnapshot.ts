// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IcebergSnapshot extends $dara.Model {
  /**
   * @remarks
   * The number of added rows.
   * 
   * @example
   * 20
   */
  addedRows?: number;
  /**
   * @remarks
   * id
   * 
   * @example
   * 2443368274334000657
   */
  id?: number;
  /**
   * @remarks
   * The string representation of the snapshot ID.
   * 
   * @example
   * 2443368274334000657
   */
  idString?: string;
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * append
   */
  operation?: string;
  /**
   * @remarks
   * The parent ID.
   * 
   * @example
   * 0
   */
  parentId?: number;
  /**
   * @remarks
   * The string representation of the parent snapshot ID.
   * 
   * @example
   * 0
   */
  parentIdString?: string;
  /**
   * @remarks
   * The schema ID.
   * 
   * @example
   * 0
   */
  schemaId?: number;
  /**
   * @remarks
   * The sequence number.
   * 
   * @example
   * 1
   */
  sequenceNumber?: number;
  /**
   * @remarks
   * The summary.
   */
  summary?: { [key: string]: string };
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1750313724369
   */
  timestampMillis?: number;
  static names(): { [key: string]: string } {
    return {
      addedRows: 'addedRows',
      id: 'id',
      idString: 'idString',
      operation: 'operation',
      parentId: 'parentId',
      parentIdString: 'parentIdString',
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
      idString: 'string',
      operation: 'string',
      parentId: 'number',
      parentIdString: 'string',
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

