// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantTemplateAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The reason why you want to grant permissions on resources to the users by using the permission template.
   * 
   * @example
   * Business test.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the permission expires. Specify the time in the yyyy-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-08 17:58:53
   */
  expireDate?: string;
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
   * The IDs of users to which you want to grant permissions on resources by using the permission template.
   * 
   * This parameter is required.
   * 
   * @example
   * [12***,34***,56***]
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      expireDate: 'ExpireDate',
      templateId: 'TemplateId',
      tid: 'Tid',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      expireDate: 'string',
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

