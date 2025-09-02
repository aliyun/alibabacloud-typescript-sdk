// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExtensionsResponseBodyPagingInfoExtensionsBindEventList extends $dara.Model {
  /**
   * @remarks
   * The code of the event.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The name of the event.
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
   * The unique code of the extension.
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
   * The ID of the RAM user.
   * 
   * @example
   * 2003****
   */
  owner?: string;
  /**
   * @remarks
   * The state of the extension. Valid values: 0: Testing 1: Publishing 3: Disabled 4: Processing 5: Approved 6: Approve Failed
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
   * The page number.
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
   * The total number of entries returned.
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
   * 0000-ABCD-EFG
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

