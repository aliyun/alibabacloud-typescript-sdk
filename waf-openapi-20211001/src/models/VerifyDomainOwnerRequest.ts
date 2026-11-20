// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to query.
   * 
   * You can set this parameter to perform a fuzzy match to check whether a domain name is added to WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protocol type used for file verification. This parameter is required only when VerifyType is set to fileCheck. Valid values:
   * - **HTTP**: HTTP.
   * - **HTTPS**: HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * - **dnsCheck**: DNS verification.
   * - **fileCheck**: File verification.
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

