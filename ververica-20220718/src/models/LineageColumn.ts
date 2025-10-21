// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageColumn extends $dara.Model {
  columnName?: string;
  columnNativeType?: string;
  columnType?: string;
  createdAt?: number;
  creator?: string;
  description?: string;
  id?: string;
  modifiedAt?: number;
  modifier?: string;
  nullable?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'columnName',
      columnNativeType: 'columnNativeType',
      columnType: 'columnType',
      createdAt: 'createdAt',
      creator: 'creator',
      description: 'description',
      id: 'id',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      nullable: 'nullable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNativeType: 'string',
      columnType: 'string',
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      id: 'string',
      modifiedAt: 'number',
      modifier: 'string',
      nullable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

