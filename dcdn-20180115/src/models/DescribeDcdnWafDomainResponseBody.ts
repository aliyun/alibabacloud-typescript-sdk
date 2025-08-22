// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafDomainResponseBodyOutPutDomains extends $dara.Model {
  /**
   * @remarks
   * The status of the ACL. Valid values:
   * 
   * *   0: disabled
   * *   1: enabled
   * 
   * @example
   * 1
   */
  aclStatus?: number;
  /**
   * @remarks
   * The status of protection against HTTP flood attacks. Valid values:
   * 
   * *   0: disabled
   * *   1: enabled
   * 
   * @example
   * 1
   */
  ccStatus?: number;
  /**
   * @remarks
   * The domain name that has WAF enabled.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   1: The domain name is added to WAF, or the domain name is valid.
   * *   10: The domain name is being added to WAF.
   * *   11: The domain name failed to be added to WAF.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The status of WAF. Valid values:
   * 
   * *   0: disabled
   * *   1: enabled
   * 
   * @example
   * 1
   */
  wafStatus?: number;
  static names(): { [key: string]: string } {
    return {
      aclStatus: 'AclStatus',
      ccStatus: 'CcStatus',
      domain: 'Domain',
      status: 'Status',
      wafStatus: 'WafStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclStatus: 'number',
      ccStatus: 'number',
      domain: 'string',
      status: 'number',
      wafStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   */
  outPutDomains?: DescribeDcdnWafDomainResponseBodyOutPutDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB1A380B-09F0-41BB-802B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The number of accelerated domain names returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      outPutDomains: 'OutPutDomains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outPutDomains: { 'type': 'array', 'itemType': DescribeDcdnWafDomainResponseBodyOutPutDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outPutDomains)) {
      $dara.Model.validateArray(this.outPutDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

