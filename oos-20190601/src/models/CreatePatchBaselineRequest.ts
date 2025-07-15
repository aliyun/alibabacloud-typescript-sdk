// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePatchBaselineRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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

export class CreatePatchBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * This parameter is required.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Specifies whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * PatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   Windows
   * *   Ubuntu
   * *   CentOS
   * *   Debian
   * *   AliyunLinux
   * *   RedhatEnterpriseLinux
   * *   Anolis
   * *   AlmaLinux
   * 
   * This parameter is required.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the region in which you want to create a patch baseline.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatches?: string[];
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: CreatePatchBaselineRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreatePatchBaselineRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.approvedPatches)) {
      $dara.Model.validateArray(this.approvedPatches);
    }
    if(Array.isArray(this.rejectedPatches)) {
      $dara.Model.validateArray(this.rejectedPatches);
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

