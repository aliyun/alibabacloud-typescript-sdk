// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergTableMetadata } from "./IcebergTableMetadata";


export class IcebergTable extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  icebergTableMetadata?: IcebergTableMetadata;
  id?: string;
  name?: string;
  owner?: string;
  path?: string;
  updatedAt?: number;
  updatedBy?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      icebergTableMetadata: 'icebergTableMetadata',
      id: 'id',
      name: 'name',
      owner: 'owner',
      path: 'path',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      icebergTableMetadata: IcebergTableMetadata,
      id: 'string',
      name: 'string',
      owner: 'string',
      path: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.icebergTableMetadata && typeof (this.icebergTableMetadata as any).validate === 'function') {
      (this.icebergTableMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

