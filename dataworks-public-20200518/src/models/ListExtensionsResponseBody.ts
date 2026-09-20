// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExtensionsResponseBodyPagingInfoExtensionsBindEventList extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * File submission pre-event
   */
  eventName?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventName: 'EventName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtensionsResponseBodyPagingInfoExtensions extends $dara.Model {
  /**
   * @remarks
   * The list of extension point events.
   */
  bindEventList?: ListExtensionsResponseBodyPagingInfoExtensionsBindEventList[];
  /**
   * @remarks
   * The unique extension code.
   * 
   * @example
   * Extension Code
   */
  extensionCode?: string;
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * This is a description
   */
  extensionDesc?: string;
  /**
   * @remarks
   * The name of the extension.
   * 
   * @example
   * Extension name
   */
  extensionName?: string;
  /**
   * @remarks
   * The RAM user ID.
   * 
   * @example
   * 2003****
   */
  owner?: string;
  /**
   * @remarks
   * The extension status. Valid values:
   * 0: testing.
   * 1: online.
   * 3: disabled.
   * 4: pending approval.
   * 5: approved.
   * 6: rejected.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bindEventList: 'BindEventList',
      extensionCode: 'ExtensionCode',
      extensionDesc: 'ExtensionDesc',
      extensionName: 'ExtensionName',
      owner: 'Owner',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEventList: { 'type': 'array', 'itemType': ListExtensionsResponseBodyPagingInfoExtensionsBindEventList },
      extensionCode: 'string',
      extensionDesc: 'string',
      extensionName: 'string',
      owner: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bindEventList)) {
      $dara.Model.validateArray(this.bindEventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtensionsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of extensions.
   */
  extensions?: ListExtensionsResponseBodyPagingInfoExtensions[];
  /**
   * @remarks
   * The page number of the request, used for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: { 'type': 'array', 'itemType': ListExtensionsResponseBodyPagingInfoExtensions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListExtensionsResponseBodyPagingInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListExtensionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

