// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsItems extends $dara.Model {
  /**
   * @remarks
   * The private network access application ID.
   * 
   * @example
   * pa-application-104b6b97b7f0c5d9
   */
  applicationId?: string;
  /**
   * @remarks
   * The private network access application name.
   * 
   * @example
   * OA System
   */
  applicationName?: string;
  /**
   * @remarks
   * The private network access tag ID.
   * 
   * @example
   * tag-4c8b988bb0ffdfb3
   */
  tagId?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Finance System
   */
  tagName?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * usergroup-3f9a2c7e10b4d856
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * R&D Department
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      tagId: 'TagId',
      tagName: 'TagName',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      tagId: 'string',
      tagName: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItems extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * fs-849ac29396d9ea98
   */
  forwardId?: string;
  /**
   * @remarks
   * The binding content. This parameter is not returned when MatchMode is **UserGroupAll** or **ApplicationAll**.
   */
  items?: ModifyForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsItems[];
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * - **UserGroupAll**: associates with all users.
   * - **UserGroupNormal**: associates with specific user groups.
   * - **ApplicationAll**: all private network applications.
   * - **Application**: specific private network applications.
   * - **Tag**: private network application tags.
   * 
   * @example
   * Application
   */
  matchMode?: string;
  static names(): { [key: string]: string } {
    return {
      forwardId: 'ForwardId',
      items: 'Items',
      matchMode: 'MatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardId: 'string',
      items: { 'type': 'array', 'itemType': ModifyForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsItems },
      matchMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyForwardStrategyBindingItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The binding items of the forwarding rule after this modification.
   */
  forwardStrategyBindingItems?: ModifyForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F79AE39-6622-5292-87EF-DE45631DE4D7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardStrategyBindingItems: 'ForwardStrategyBindingItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardStrategyBindingItems: ModifyForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.forwardStrategyBindingItems && typeof (this.forwardStrategyBindingItems as any).validate === 'function') {
      (this.forwardStrategyBindingItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

