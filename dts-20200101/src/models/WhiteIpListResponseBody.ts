// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Target end adaptation to VPCNAT IP whitelist
   * 
   * @example
   * 127.0.0.1
   */
  destIpList?: string;
  /**
   * @remarks
   * The dynamic error code. This parameter will be removed in the future.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message. This parameter will be removed in the future.
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
   * IP address.
   * 
   * @example
   * 10.151.12.0/24,47.102.181.0/24,47.101.109.0/24,120.55.129.0/24,11.115.103.0/24,47.102.234.0/24
   */
  ipList?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD823BD3-1BA6-4117-A536-165CB280****
   */
  requestId?: string;
  /**
   * @remarks
   * Source adaptation to VPC NAT IP whitelist
   * 
   * @example
   * 127.0.0.1
   */
  srcIpList?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

