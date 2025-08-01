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
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the blacklist or whitelist was created.
   * 
   * @example
   * 2024-08-02T02:43:40.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 2024-08-02T02:43:40.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the blacklist and whitelist.
   * 
   * @example
   * 549
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to enable the whitelist feature.
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
   * The comment.
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
   * The list of resource IDs in the JSON format.
   * 
   * *   If the value of the ResourceType parameter is ROUTE, the value of this parameter is the list of route IDs.
   * *   If the value of the ResourceType parameter is DOMAIN, the value of this parameter is the list of domain names.
   * 
   * @example
   * [234]
   */
  resourceIdJsonList?: string;
  /**
   * @remarks
   * The description of the resource name.
   * 
   * @example
   * {}
   */
  resourceIdNameJson?: string;
  /**
   * @remarks
   * The effective scope of the blacklist or whitelist. Valid values:
   * 
   * *   GATEWAY
   * *   DOMAIN
   * *   ROUTE
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the blacklist or whitelist.
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type of the blacklist and whitelist. The value is fixed to IP address blacklist and whitelist.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned information.
   */
  result?: GatewayBlackWhiteListResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of instances returned.
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
   * The status code. A value of 200 is returned if the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GatewayBlackWhiteListResponseBodyData;
  /**
   * @remarks
   * The placeholder in the dynamic error message. This parameter is not returned.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
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

