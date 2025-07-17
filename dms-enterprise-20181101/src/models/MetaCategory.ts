// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaCategory extends $dara.Model {
  categoryId?: number;
  createTime?: string;
  depth?: number;
  name?: string;
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      depth: 'Depth',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'string',
      depth: 'number',
      name: 'string',
      parentCategoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

