// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyDomainResolveResponseBodyResolveResult extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of ip addresses.
   */
  ipAddrList?: string[];
  /**
   * @remarks
   * The supported ip version.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The update time, provided as a unix timestamp in seconds.
   * 
   * @example
   * 1579091739
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipAddrList: 'IpAddrList',
      ipVersion: 'IpVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipAddrList: { 'type': 'array', 'itemType': 'string' },
      ipVersion: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddrList)) {
      $dara.Model.validateArray(this.ipAddrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyDomainResolveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The domain resolution results.
   */
  resolveResult?: DescribeControlPolicyDomainResolveResponseBodyResolveResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveResult: 'ResolveResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveResult: { 'type': 'array', 'itemType': DescribeControlPolicyDomainResolveResponseBodyResolveResult },
    };
  }

  validate() {
    if(Array.isArray(this.resolveResult)) {
      $dara.Model.validateArray(this.resolveResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

