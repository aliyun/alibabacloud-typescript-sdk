// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateResourcesRequest extends $dara.Model {
  bindAssets?: string[];
  /**
   * @remarks
   * The protected object groups that you want to associate with the template. Specify the value in the [**"group1","group2",...**] format.
   */
  bindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects that you want to associate with the template. Specify the value in the [**"XX1","XX2",...**] format.
   */
  bindResources?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
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
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland.
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
   * The ID of the protection rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * 2291
   */
  templateId?: number;
  unbindAssets?: string[];
  /**
   * @remarks
   * The protected object groups that you want to disassociate from the template. Specify the value in the [**"group1","group2",...**] format.
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects that you want to disassociate from the template. Specify the value in the [**"XX1","XX2",...**] format.
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

