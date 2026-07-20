// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  id?: string;
  isShared?: boolean;
  name?: string;
  options?: { [key: string]: string };
  owner?: string;
  shareId?: string;
  status?: string;
  type?: string;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      id: 'id',
      isShared: 'isShared',
      name: 'name',
      options: 'options',
      owner: 'owner',
      shareId: 'shareId',
      status: 'status',
      type: 'type',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      isShared: 'boolean',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      owner: 'string',
      shareId: 'string',
      status: 'string',
      type: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

