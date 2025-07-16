// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnWafDomainResponseBodyOutPutDomains extends $dara.Model {
  /**
   * @remarks
   * The status of the access control list (ACL) feature. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  aclStatus?: string;
  /**
   * @remarks
   * The status of protection against HTTP flood attacks. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  ccStatus?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The WAF status of the domain name. Valid values:
   * 
   * *   **1**: The domain name is added to WAF or valid.
   * *   **10**: The domain name is being added to WAF.
   * *   **11**: The domain name failed to be added to WAF.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The status of WAF. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  wafStatus?: string;
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
      aclStatus: 'string',
      ccStatus: 'string',
      domain: 'string',
      status: 'string',
      wafStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the accelerated domain name.
   */
  outPutDomains?: DescribeCdnWafDomainResponseBodyOutPutDomains[];
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
   * The number of accelerated domain names.
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
      outPutDomains: { 'type': 'array', 'itemType': DescribeCdnWafDomainResponseBodyOutPutDomains },
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

