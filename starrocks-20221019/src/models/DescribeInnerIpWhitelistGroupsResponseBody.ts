// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInnerIpWhitelistGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of CIDR blocks.
   */
  cidrIpList?: string[];
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * test1
   */
  innerIpWhitelistGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIpList: 'CidrIpList',
      innerIpWhitelistGroupId: 'InnerIpWhitelistGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIpList: { 'type': 'array', 'itemType': 'string' },
      innerIpWhitelistGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrIpList)) {
      $dara.Model.validateArray(this.cidrIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInnerIpWhitelistGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * List of devices.
   */
  data?: DescribeInnerIpWhitelistGroupsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': DescribeInnerIpWhitelistGroupsResponseBodyData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

