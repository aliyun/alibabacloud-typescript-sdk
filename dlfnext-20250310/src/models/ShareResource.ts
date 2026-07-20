// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareResource extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  databaseName?: string;
  shareType?: string;
  tableName?: string;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      databaseName: 'databaseName',
      shareType: 'shareType',
      tableName: 'tableName',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      databaseName: 'string',
      shareType: 'string',
      tableName: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

