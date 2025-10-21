// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetadataInfo } from "./MetadataInfo";


export class TableColumn extends $dara.Model {
  expression?: string;
  logicalType?: string;
  metadataInfo?: MetadataInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nullable?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      logicalType: 'logicalType',
      metadataInfo: 'metadataInfo',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      logicalType: 'string',
      metadataInfo: MetadataInfo,
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.metadataInfo && typeof (this.metadataInfo as any).validate === 'function') {
      (this.metadataInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

