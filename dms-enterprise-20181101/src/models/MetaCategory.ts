// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaCategory extends $dara.Model {
  categoryId?: number;
  createTime?: string;
  depth?: number;
  description?: string;
  name?: string;
  ownerIds?: number[];
  ownerNickNames?: string[];
  parentCategoryId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      depth: 'Depth',
      description: 'Description',
      name: 'Name',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      parentCategoryId: 'ParentCategoryId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'string',
      depth: 'number',
      description: 'string',
      name: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      parentCategoryId: 'number',
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNickNames)) {
      $dara.Model.validateArray(this.ownerNickNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

