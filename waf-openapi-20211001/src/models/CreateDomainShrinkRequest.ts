// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Tagkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the WAF instance. Valid values:
   * 
   * - **share** (default): CNAME access.
   * 
   * - **hybrid_cloud_cname**: hybrid cloud CNAME access.
   * 
   * > If the value is **share**, or the value is **hybrid_cloud_cname** and public cloud disaster recovery is enabled, call the [DescribeVerifyContent](https://help.aliyun.com/document_detail/2985193.html) and [VerifyDomainOwner](https://help.aliyun.com/document_detail/2985192.html) operations to verify domain name ownership first. If the domain name is connected to a region in the Chinese mainland, ICP filing must be completed.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name to query.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
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
   * The listener configuration.
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
   * The region where the WAF instance resides. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tag?: CreateDomainShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDomainShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

