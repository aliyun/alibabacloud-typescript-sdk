// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyDomainResolveResponseBodyResolveResult extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  ipAddrList?: string[];
  /**
   * @example
   * 4
   */
  ipVersion?: number;
  /**
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
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
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

