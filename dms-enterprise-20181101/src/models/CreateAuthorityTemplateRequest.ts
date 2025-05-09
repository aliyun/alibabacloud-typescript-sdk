// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorityTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the permission template.
   * 
   * @example
   * This template is used for business testing.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission template.
   * 
   * This parameter is required.
   * 
   * @example
   * Test template.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

