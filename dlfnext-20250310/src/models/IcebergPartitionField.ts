// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IcebergPartitionField extends $dara.Model {
  fieldId?: number;
  name?: string;
  sourceId?: number;
  transform?: string;
  static names(): { [key: string]: string } {
    return {
      fieldId: 'fieldId',
      name: 'name',
      sourceId: 'sourceId',
      transform: 'transform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldId: 'number',
      name: 'string',
      sourceId: 'number',
      transform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

