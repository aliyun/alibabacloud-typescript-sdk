// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthorityTemplateItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The resources that you want to add to the permission template.
   * 
   * This parameter is required.
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The ID of the permission template. You can call the [CreateAuthorityTemplate](https://help.aliyun.com/document_detail/600705.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  templateId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      itemsShrink: 'Items',
      templateId: 'TemplateId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsShrink: 'string',
      templateId: 'number',
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

