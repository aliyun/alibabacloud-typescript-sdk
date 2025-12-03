// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCategoryShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The name of the category.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  name?: string;
  ownerIdsShrink?: string;
  /**
   * @remarks
   * The ID of the parent category. The new category is created under this parent category. If this value is left empty, the new category is of the first level.
   * 
   * @example
   * 30000322682
   */
  parentCategoryId?: number;
  remark?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerIdsShrink: 'OwnerIds',
      parentCategoryId: 'ParentCategoryId',
      remark: 'Remark',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerIdsShrink: 'string',
      parentCategoryId: 'number',
      remark: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

