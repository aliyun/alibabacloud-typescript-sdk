// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist of the destination adapted for VPC NAT.
   * 
   * @example
   * 127.0.0.1
   */
  destIpList?: string;
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
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
   * The IP whitelist. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 10.151.12.0/24,47.102.181.0/24,47.101.109.0/24,120.55.129.0/24,11.115.103.0/24,47.102.234.0/24
   */
  ipList?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD823BD3-1BA6-4117-A536-165CB280****
   */
  requestId?: string;
  /**
   * @remarks
   * The IP whitelist of the source adapted for VPC NAT.
   * 
   * @example
   * 127.0.0.1
   */
  srcIpList?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      destIpList: 'DestIpList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      ipList: 'IpList',
      requestId: 'RequestId',
      srcIpList: 'SrcIpList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destIpList: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      ipList: 'string',
      requestId: 'string',
      srcIpList: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

