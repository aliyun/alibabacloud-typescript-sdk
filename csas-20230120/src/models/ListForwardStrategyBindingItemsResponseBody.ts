// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsListItems extends $dara.Model {
  /**
   * @example
   * pa-application-104b6b97b7f0c5d9
   */
  applicationId?: string;
  /**
   * @example
   * 437008
   */
  applicationName?: string;
  /**
   * @example
   * tag-4c8b988bb0ffdfb3
   */
  tagId?: string;
  /**
   * @example
   * nieshirui.nsr
   */
  tagName?: string;
  /**
   * @example
   * ug-xxxxxx
   */
  userGroupId?: string;
  /**
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
   * @example
   * fs-41a7891ff6568421
   */
  forwardId?: string;
  items?: ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsListItems[];
  /**
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
  forwardStrategyBindingItemsList?: ListForwardStrategyBindingItemsResponseBodyForwardStrategyBindingItemsList[];
  /**
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

