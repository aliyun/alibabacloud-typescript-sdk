// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergSnapshot } from "./IcebergSnapshot";
import { IcebergNestedField } from "./IcebergNestedField";
import { IcebergPartitionField } from "./IcebergPartitionField";


export class IcebergTableMetadata extends $dara.Model {
  /**
   * @remarks
   * The latest snapshot of the Iceberg table.
   */
  currentSnapshot?: IcebergSnapshot;
  /**
   * @remarks
   * The fields.
   */
  fields?: IcebergNestedField[];
  identifierFieldIds?: number[];
  /**
   * @remarks
   * The partition fields.
   */
  partitionFields?: IcebergPartitionField[];
  /**
   * @remarks
   * The properties.
   */
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      currentSnapshot: 'currentSnapshot',
      fields: 'fields',
      identifierFieldIds: 'identifierFieldIds',
      partitionFields: 'partitionFields',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentSnapshot: IcebergSnapshot,
      fields: { 'type': 'array', 'itemType': IcebergNestedField },
      identifierFieldIds: { 'type': 'array', 'itemType': 'number' },
      partitionFields: { 'type': 'array', 'itemType': IcebergPartitionField },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.currentSnapshot && typeof (this.currentSnapshot as any).validate === 'function') {
      (this.currentSnapshot as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.identifierFieldIds)) {
      $dara.Model.validateArray(this.identifierFieldIds);
    }
    if(Array.isArray(this.partitionFields)) {
      $dara.Model.validateArray(this.partitionFields);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

