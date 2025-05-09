// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePatchBaselineShrinkRequest extends $dara.Model {
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
  approvedPatchesShrink?: string;
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
  rejectedPatchesShrink?: string;
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
  sourcesShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      rejectedPatchesShrink: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
      rejectedPatchesShrink: 'string',
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

