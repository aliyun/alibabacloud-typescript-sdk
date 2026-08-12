// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the WAF instance. Valid values:
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name to operate on.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The listening configuration.
   * 
   * This parameter is required.
   */
  listenShrink?: string;
  /**
   * @remarks
   * The forwarding configuration.
   * 
   * This parameter is required.
   */
  redirectShrink?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * - **ap-southeast-1**: outside the Chinese mainland.
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

