// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayBlackWhiteListResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The content of the blacklist.
   * 
   * @example
   * 1.1.1.1
   */
  content?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique identifier of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-08-02T02:43:40.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-08-02T02:43:40.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the blacklists and whitelists.
   * 
   * @example
   * 549
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether it is a whitelist.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The name of the blacklist.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The note.
   * 
   * @example
   * Blocked IP list
   */
  note?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 549
   */
  resourceId?: number;
  /**
   * @remarks
   * The JSON string of the resource ID list.
   * 
   * - If ResourceType is set to ROUTE, this parameter is a list of route IDs.
   * 
   * - If ResourceType is set to DOMAIN, this parameter is a list of domain name IDs.
   * 
   * @example
   * [234]
   */
  resourceIdJsonList?: string;
  /**
   * @remarks
   * The resource name description.
   * 
   * @example
   * {}
   */
  resourceIdNameJson?: string;
  /**
   * @remarks
   * The effective granularity. Valid values:
   * - GATEWAY: global gateway level.
   * - DOMAIN: domain name level.
   * - ROUTE: route level.
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the blacklists and whitelists. Valid values:
   * 
   * - on: enabled.
   * 
   * - off: shutdown.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type of the blacklists and whitelists. The value is fixed to IP blacklists and whitelists.
   * 
   * @example
   * IP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      name: 'Name',
      note: 'Note',
      resourceId: 'ResourceId',
      resourceIdJsonList: 'ResourceIdJsonList',
      resourceIdNameJson: 'ResourceIdNameJson',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      name: 'string',
      note: 'string',
      resourceId: 'number',
      resourceIdJsonList: 'string',
      resourceIdNameJson: 'string',
      resourceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayBlackWhiteListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the instance list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page specified in the request.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned result set.
   */
  result?: GatewayBlackWhiteListResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of queried instances.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GatewayBlackWhiteListResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayBlackWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code that synchronizes with the Success parameter.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GatewayBlackWhiteListResponseBodyData;
  /**
   * @remarks
   * The placeholder in the dynamic error message. This parameter is not used and can be ignored.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not used and can be ignored.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
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
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58E06A0A-BD2C-47A0-99C2-B100F353****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GatewayBlackWhiteListResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

