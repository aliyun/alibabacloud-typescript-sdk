// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The name of the honeypot management node.
   * 
   * @example
   * 0804-pre
   */
  controlNodeName?: string;
  /**
   * @remarks
   * The honeypot ID.
   * 
   * @example
   * 76c2a1c72ef259777d96d55a7834e5f5d98f85666c49f76ad9caa447d8b7****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The display name of the honeypot image.
   * 
   * @example
   * MongoDB
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The ID of the honeypot image.
   * 
   * @example
   * sha256:eca5ced3757e46c24701e9ced4e652f2d730262d5685a4e001da22c4fb418fd4
   */
  honeypotImageId?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * tcp_proxy
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The name of the honeypot.
   * 
   * @example
   * mx-rouyi
   */
  honeypotName?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * c94eff5b-ea48-4805-8b7f-e04d3509b117
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the custom honeypot parameter.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  presetId?: string;
  /**
   * @remarks
   * The status of the honeypot.
   */
  state?: string[];
  static names(): { [key: string]: string } {
    return {
      controlNodeName: 'ControlNodeName',
      honeypotId: 'HoneypotId',
      honeypotImageDisplayName: 'HoneypotImageDisplayName',
      honeypotImageId: 'HoneypotImageId',
      honeypotImageName: 'HoneypotImageName',
      honeypotName: 'HoneypotName',
      nodeId: 'NodeId',
      presetId: 'PresetId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlNodeName: 'string',
      honeypotId: 'string',
      honeypotImageDisplayName: 'string',
      honeypotImageId: 'string',
      honeypotImageName: 'string',
      honeypotName: 'string',
      nodeId: 'string',
      presetId: 'string',
      state: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.state)) {
      $dara.Model.validateArray(this.state);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of honeypot data.
   */
  list?: ListHoneypotResponseBodyList[];
  /**
   * @remarks
   * The detailed information about the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * C80AFF1F-CC20-502C-A4D4-F5433E529B69
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListHoneypotResponseBodyList },
      message: 'string',
      pageInfo: ListHoneypotResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

