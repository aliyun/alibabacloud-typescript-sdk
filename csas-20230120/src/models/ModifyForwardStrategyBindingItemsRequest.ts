// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardStrategyBindingItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fs-849ac29396d9ea98
   */
  forwardId?: string;
  /**
   * @remarks
   * The list of binding item IDs. Must be empty when MatchMode is **UserGroupAll** or **ApplicationAll**. Required for other values. Duplicates are not allowed in the list, and the specified objects must already exist.
   */
  itemIds?: string[];
  /**
   * @remarks
   * The policy matching target type. Required. Valid values:
   * - **UserGroupAll**: associates with all users.
   * - **UserGroupNormal**: associates with specific user groups.
   * - **ApplicationAll**: all private network applications.
   * - **Application**: specific private network applications.
   * - **Tag**: private network application tags.
   * 
   * When the value is **UserGroupAll** or **ApplicationAll**, ItemIds must be empty. When the value is **UserGroupNormal**, **Application**, or **Tag**, ItemIds is required.
   * 
   * When ModifyType is not **Cover**, switching the matching target type is not allowed: **Application**, **Tag**, and **ApplicationAll** are mutually exclusive, and **UserGroupNormal** and **UserGroupAll** are mutually exclusive. If a binding item of a mutually exclusive type already exists on the same forwarding rule, the request is rejected.
   * 
   * @example
   * Application
   */
  matchMode?: string;
  /**
   * @remarks
   * The modification method. Required. Valid values:
   * - **Append**: appends to existing binding items. ItemIds cannot contain objects that are already bound.
   * - **Delete**: deletes specified binding items. All objects in ItemIds must be already bound.
   * - **Cover**: overwrites binding items of the same category by clearing all existing binding items of the same category on the forwarding rule and then writing ItemIds. The same category refers to **ApplicationAll**, **Application**, and **Tag**, or **UserGroupAll** and **UserGroupNormal**.
   * 
   * When the value is **Append** or **Delete**, MatchMode cannot be **UserGroupAll** or **ApplicationAll**.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  static names(): { [key: string]: string } {
    return {
      forwardId: 'ForwardId',
      itemIds: 'ItemIds',
      matchMode: 'MatchMode',
      modifyType: 'ModifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardId: 'string',
      itemIds: { 'type': 'array', 'itemType': 'string' },
      matchMode: 'string',
      modifyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemIds)) {
      $dara.Model.validateArray(this.itemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

