// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBlackWhiteListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the blacklist.
   * 
   * @example
   * text
   */
  content?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 275
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the whitelist is enabled.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 1
   */
  resourceId?: number;
  /**
   * @remarks
   * The type of a resource.
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the blacklist or whitelist.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type.
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
      resourceId: 'ResourceId',
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
      resourceId: 'number',
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

export class GetBlackWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the node.
   */
  data?: GetBlackWhiteListResponseBodyData;
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
   * The message returned.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 89CBC928-4F57-51FA-A413-EE0F4CD87200
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetBlackWhiteListResponseBodyData,
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

