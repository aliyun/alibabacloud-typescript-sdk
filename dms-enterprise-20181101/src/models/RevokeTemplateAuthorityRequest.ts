// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTemplateAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1563
   */
  templateId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The IDs of users from whom you want to revoke permissions by using a permission template.
   * 
   * This parameter is required.
   * 
   * @example
   * [12***,34***,56***]
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      tid: 'Tid',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      tid: 'number',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

