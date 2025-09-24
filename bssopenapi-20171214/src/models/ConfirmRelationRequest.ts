// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The operation to be performed to confirm the invitation. Valid values:
   * 
   * *   child_agree: The member accepts the invitation.
   * *   child_disagree: The member rejects the invitation.
   * *   Canceled by the master account: The management account cancels the confirmation.
   * 
   * This parameter is required.
   * 
   * @example
   * child_agree
   */
  confirmCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The permissions that can be granted to the member. Valid values:
   * 
   * *   SYNCHRONIZE_FINANCE_IDENTITY: allows the credit control identity to be shared with the member.
   * *   SYNCHRONIZE_FINANCE_DISCOUNT_POLICY_TO_TARGET: allows the discount policy to be shared with the member.
   * *   FORBID_WITHDRAW_CASH: does not allow the member to withdraw the balance.
   * *   FORBID_MANAGE_INVOICE: does not allow the member to manage invoices.
   * *   CHECK_FINANCE_INFO: requests to view information about the financial relationship.
   * *   MANAGE_TARGET_INVOICE: allows the member to manage invoices.
   * *   CHECK_TARGET_CONSUMPTION: allows the member to view the bills.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNCHRONIZE_FINANCE_IDENTITY
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * The ID of the financial relationship. Set this parameter to the value of the RelationId response parameter returned by calling the QueryRelationList operation.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * @example
   * Type of the financial relationship
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      confirmCode: 'ConfirmCode',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationId: 'RelationId',
      relationType: 'RelationType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      confirmCode: 'string',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationId: 'number',
      relationType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissionCodes)) {
      $dara.Model.validateArray(this.permissionCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

