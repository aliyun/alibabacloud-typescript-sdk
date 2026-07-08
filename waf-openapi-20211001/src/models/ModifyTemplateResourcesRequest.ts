// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the protected assets to attach. The value is in the [**"XX1","XX2",...**] format.
   */
  bindAssets?: string[];
  /**
   * @remarks
   * The protected object groups to attach. The value is in the [**"group1","group2",...**] format.
   */
  bindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects to attach. The value is in the [**"XX1","XX2",...**] format.
   */
  bindResources?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * This parameter is required.
   * 
   * @example
   * 2291
   */
  templateId?: number;
  /**
   * @remarks
   * The IDs of the protected assets to detach. The value is in the [**"XX1","XX2",...**] format.
   */
  unbindAssets?: string[];
  /**
   * @remarks
   * The protected object groups to detach. The value is in the [**"group1","group2",...**] format.
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects to detach. The value is in the [**"XX1","XX2",...**] format.
   */
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      bindAssets: 'BindAssets',
      bindResourceGroups: 'BindResourceGroups',
      bindResources: 'BindResources',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      unbindAssets: 'UnbindAssets',
      unbindResourceGroups: 'UnbindResourceGroups',
      unbindResources: 'UnbindResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAssets: { 'type': 'array', 'itemType': 'string' },
      bindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      bindResources: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      unbindAssets: { 'type': 'array', 'itemType': 'string' },
      unbindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      unbindResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bindAssets)) {
      $dara.Model.validateArray(this.bindAssets);
    }
    if(Array.isArray(this.bindResourceGroups)) {
      $dara.Model.validateArray(this.bindResourceGroups);
    }
    if(Array.isArray(this.bindResources)) {
      $dara.Model.validateArray(this.bindResources);
    }
    if(Array.isArray(this.unbindAssets)) {
      $dara.Model.validateArray(this.unbindAssets);
    }
    if(Array.isArray(this.unbindResourceGroups)) {
      $dara.Model.validateArray(this.unbindResourceGroups);
    }
    if(Array.isArray(this.unbindResources)) {
      $dara.Model.validateArray(this.unbindResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

