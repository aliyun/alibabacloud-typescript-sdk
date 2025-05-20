// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class View extends $dara.Model {
  category?: string;
  createdAt?: string;
  description?: string;
  exFieldsInfo?: { [key: string]: any };
  fileCount?: number;
  name?: string;
  owner?: string;
  updatedAt?: string;
  viewId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      createdAt: 'created_at',
      description: 'description',
      exFieldsInfo: 'ex_fields_info',
      fileCount: 'file_count',
      name: 'name',
      owner: 'owner',
      updatedAt: 'updated_at',
      viewId: 'view_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdAt: 'string',
      description: 'string',
      exFieldsInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileCount: 'number',
      name: 'string',
      owner: 'string',
      updatedAt: 'string',
      viewId: 'string',
    };
  }

  validate() {
    if(this.exFieldsInfo) {
      $dara.Model.validateMap(this.exFieldsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

