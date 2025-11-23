// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuthorityTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission template.
   * 
   * This parameter is required.
   * 
   * @example
   * 2592
   */
  templateId?: number;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

