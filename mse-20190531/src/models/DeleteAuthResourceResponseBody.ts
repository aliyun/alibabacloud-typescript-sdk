// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuthResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 253
   */
  authId?: number;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 235
   */
  domainId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * name
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
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
   * The ID of the primary key.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the whitelist mode is enabled.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /zookeeper
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteAuthResourceResponseBodyData;
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
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 559412D1-BFCE-53CC-B88E-0192C331EF44
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
      data: DeleteAuthResourceResponseBodyData,
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

