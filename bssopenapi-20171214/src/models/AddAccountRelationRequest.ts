// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAccountRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the member. This helps clarify the scenario in which the account is used.
   * 
   * @example
   * xxx project
   */
  childNick?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * This parameter is required.
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
   * The params[PermissionCodes, RoleCodes] can not be null at the same time.
   * 
   * @example
   * CHECK_TARGET_CONSUMPTION
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * This parameter is required.
   * 
   * @example
   * enterprise_group
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * This parameter is required.
   * 
   * @example
   * 32324242444
   */
  requestId?: string;
  /**
   * @remarks
   * The roles that can be assigned to the member. Set the value to trusteeship.
   * 
   * @example
   * trusteeship
   */
  roleCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationType: 'RelationType',
      requestId: 'RequestId',
      roleCodes: 'RoleCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNick: 'string',
      childUserId: 'number',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationType: 'string',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissionCodes)) {
      $dara.Model.validateArray(this.permissionCodes);
    }
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

