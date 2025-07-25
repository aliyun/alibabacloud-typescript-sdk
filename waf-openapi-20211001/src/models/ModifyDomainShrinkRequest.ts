// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The mode in which you want to add the domain name to WAF. Set the value to share.
   * 
   * *   **share:** adds the domain name to WAF in CNAME record mode. This is the default value.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name whose access configurations you want to modify.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  domainId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener configurations.
   * 
   * This parameter is required.
   */
  listenShrink?: string;
  /**
   * @remarks
   * The forwarding configurations.
   * 
   * This parameter is required.
   */
  redirectShrink?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      domainId: 'DomainId',
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      domainId: 'string',
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

