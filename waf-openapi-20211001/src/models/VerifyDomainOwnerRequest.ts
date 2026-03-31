// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of which you want to verify the ownership.
   * 
   * You can specify this parameter to check whether a domain name is added to WAF. Fuzzy match is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protocol type that is used for file verification. Specify this parameter when you set VerifyType to fileCheck. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   **dnsCheck**: DNS verification
   * *   **fileCheck**: file verification
   * 
   * This parameter is required.
   * 
   * @example
   * dnsCheck
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      protocol: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

