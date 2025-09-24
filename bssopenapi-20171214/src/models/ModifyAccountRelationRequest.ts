// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the member. This helps clarify the scenario in which the account is used.
   * 
   * @example
   * Display name of the member
   */
  childNick?: string;
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
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The permissions that can be modified. Valid values:
   * 
   * *   SYNCHRONIZE_FINANCE_IDENTITY: allows the credit control identity to be shared with the member.
   * *   SYNCHRONIZE_FINANCE_DISCOUNT_POLICY_TO_TARGET: allows the discount policy to be shared with the member.
   * *   FORBID_WITHDRAW_CASH: does not allow the member to withdraw the balance.
   * *   FORBID_MANAGE_INVOICE: does not allow the member to manage invoices.
   * *   CHECK_FINANCE_INFO: requests to view information about the financial relationship.
   * *   MANAGE_TARGET_INVOICE: allows the member to manage invoices.
   * *   CHECK_TARGET_CONSUMPTION: allows the member to view the bills.
   * 
   * @example
   * SYNCHRONIZE_FINANCE_IDENTITY
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * The ID of the financial relationship. Set this parameter to the value of the relationId response parameter returned by calling the QueryRelationList operation.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  /**
   * @remarks
   * The operation to be performed. Valid values:
   * 
   * *   ADD
   * *   DELETE
   * 
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  relationOperation?: string;
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
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
   * request_id
   */
  requestId?: string;
  /**
   * @remarks
   * The roles that can be assigned to the member. You cannot modify the roles.
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
      relationId: 'RelationId',
      relationOperation: 'RelationOperation',
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
      relationId: 'number',
      relationOperation: 'string',
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

