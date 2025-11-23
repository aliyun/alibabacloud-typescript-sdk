// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000181325
   */
  categoryId?: number;
  /**
   * @remarks
   * The updated name of the category.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 23****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
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

