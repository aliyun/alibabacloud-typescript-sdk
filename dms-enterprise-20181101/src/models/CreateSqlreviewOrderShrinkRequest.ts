// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLReviewOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The purpose or objective of the SQL review. This reduces unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  paramShrink?: string;
  /**
   * @remarks
   * The stakeholders involved in this operation. All the specified stakeholders can view the ticket details and take part in the approval process. Irrelevant users other than DMS administrators and database administrators (DBAs) are not allowed to view the ticket details.
   */
  relatedUserListShrink?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
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

