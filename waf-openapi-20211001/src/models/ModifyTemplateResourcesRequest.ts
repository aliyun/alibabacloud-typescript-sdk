// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the protected assets to associate, in the format of ["XX1","XX2",...].
   */
  bindAssets?: string[];
  /**
   * @remarks
   * The protected object groups to associate, in the format of [**"group1","group2",...**].
   */
  bindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects to associate, in the format of [**"XX1","XX2",...**].
   */
  bindResources?: string[];
  /**
   * @remarks
   * Specifies whether to enable the dry run mode. If you do not specify this parameter, a normal request is sent. Valid values:
   * - **true**: A dry run request is sent. The system checks whether the request meets the execution conditions without performing the specified operation. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
   * - **false**: A normal request is sent. The specified operation is performed after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
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
   * The IDs of the protected assets to disassociate, in the format of ["XX1","XX2",...].
   */
  unbindAssets?: string[];
  /**
   * @remarks
   * The protected object groups to disassociate, in the format of [**"group1","group2",...**].
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects to disassociate, in the format of [**"XX1","XX2",...**].
   */
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      bindAssets: 'BindAssets',
      bindResourceGroups: 'BindResourceGroups',
      bindResources: 'BindResources',
      dryRun: 'DryRun',
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
      dryRun: 'boolean',
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

