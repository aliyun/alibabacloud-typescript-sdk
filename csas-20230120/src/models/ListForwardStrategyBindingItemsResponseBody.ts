// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsListItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal-facing application.
   * 
   * @example
   * pa-application-104b6b97b7f0c5d9
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the internal-facing application.
   * 
   * @example
   * 437008
   */
  applicationName?: string;
  /**
   * @remarks
   * The internal-facing tag ID.
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
   * nieshirui.nsr
   */
  tagName?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * ug-xxxxxx
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * aaaaa
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

export class ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsList extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * fs-41a7891ff6568421
   */
  forwardId?: string;
  /**
   * @remarks
   * The binding items.
   */
  items?: ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsListItems[];
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * - **UserGroupAll**: all users.
   * - **UserGroupNormal**: specific user groups.
   * - **ApplicationAll**: all internal-facing applications.
   * - **Application**: specific internal-facing applications.
   * - **Tag**: internal-facing application tags.
   * 
   * @example
   * UserGroupAll
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
      items: { 'type': 'array', 'itemType': ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsListItems },
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

export class ListForwardStrategyBindingItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of forwarding rule bindings.
   */
  forwardStrategyBindingItemsList?: ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsList[];
  /**
   * @remarks
   * The binding item type. Valid values:
   * - **Application**: internal-facing application
   * - **UserGroup**: user group.
   * 
   * @example
   * Application
   */
  itemType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5F79AE39-6622-5292-87EF-DE45631DE4D7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardStrategyBindingItemsList: 'ForwardStrategyBindingItemsList',
      itemType: 'ItemType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardStrategyBindingItemsList: { 'type': 'array', 'itemType': ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsList },
      itemType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardStrategyBindingItemsList)) {
      $dara.Model.validateArray(this.forwardStrategyBindingItemsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

