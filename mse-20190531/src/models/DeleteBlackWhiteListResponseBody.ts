// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBlackWhiteListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   * 
   * @example
   * 1.1.1.1
   */
  content?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 430
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-9cdcf8e4f58144059e73ff4c5ef9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-08-10 20:22:34
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-08-10 20:22:34
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the blacklists and whitelists entry.
   * 
   * @example
   * 120
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the entry is a whitelist.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * 1
   */
  resourceId?: number;
  /**
   * @remarks
   * The granularity at which the blacklist or whitelist takes effect. Valid values:
   * 
   * - GATEWAY: gateway-wide
   * 
   * - DOMAIN: domain name
   * 
   * - ROUTE: route
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The enabling status. Valid values:
   * 
   * - 0: disabled
   * 
   * - 1: enabled
   * 
   * @example
   * 1
   */
  status?: boolean;
  /**
   * @remarks
   * Deprecated. A fixed value.
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
      status: 'boolean',
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

export class DeleteBlackWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code, which is used only to indicate whether the request is successful, similar to the Success parameter.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data structure.
   */
  data?: DeleteBlackWhiteListResponseBodyData;
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
   * The response message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - `true`: The request was successful.
   * - `false`: The request failed.
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
      data: DeleteBlackWhiteListResponseBodyData,
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

