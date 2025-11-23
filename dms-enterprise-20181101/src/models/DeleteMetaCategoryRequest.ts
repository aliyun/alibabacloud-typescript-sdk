// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000235594
   */
  categoryId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
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

