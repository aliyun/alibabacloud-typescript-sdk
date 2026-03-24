// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name whose ownership you want to verify.
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
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protocol type used for file verification. This parameter is required only when you set VerifyType to fileCheck. Valid values:
   * 
   * - **HTTP**: the HTTP protocol.
   * 
   * - **HTTPS**: the HTTPS protocol.
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
   * 
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

