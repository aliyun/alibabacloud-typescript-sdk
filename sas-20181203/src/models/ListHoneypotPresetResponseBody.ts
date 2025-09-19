// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotPresetResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * node1
   */
  controlNodeName?: string;
  /**
   * @remarks
   * The display name of the honeypot image.
   * 
   * @example
   * Metabase
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * metabase
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The ID of the honeypot template.
   * 
   * @example
   * 3cc04a47-7229-418c-8101-f10a2887****
   */
  honeypotPresetId?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * c94eff5b-ea48-4805-8b7f-e04d3509****
   */
  nodeId?: string;
  /**
   * @remarks
   * The custom name of the honeypot template.
   * 
   * @example
   * WebMin-online
   */
  presetName?: string;
  /**
   * @remarks
   * The type of the honeypot template. Valid values:
   * 
   * *   **TEMP**: automatically generated template
   * *   **CUSTOM**: custom template
   * *   **DEFAULT**: default template
   * 
   * @example
   * CUSTOM
   */
  presetType?: string;
  static names(): { [key: string]: string } {
    return {
      controlNodeName: 'ControlNodeName',
      honeypotImageDisplayName: 'HoneypotImageDisplayName',
      honeypotImageName: 'HoneypotImageName',
      honeypotPresetId: 'HoneypotPresetId',
      nodeId: 'NodeId',
      presetName: 'PresetName',
      presetType: 'PresetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlNodeName: 'string',
      honeypotImageDisplayName: 'string',
      honeypotImageName: 'string',
      honeypotPresetId: 'string',
      nodeId: 'string',
      presetName: 'string',
      presetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotPresetResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 55
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

export class ListHoneypotPresetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * An array that consists of the honeypot templates.
   */
  list?: ListHoneypotPresetResponseBodyList[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotPresetResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0C656B33-0D6B-5953-A26A-D766BD75B44A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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
      list: { 'type': 'array', 'itemType': ListHoneypotPresetResponseBodyList },
      message: 'string',
      pageInfo: ListHoneypotPresetResponseBodyPageInfo,
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

