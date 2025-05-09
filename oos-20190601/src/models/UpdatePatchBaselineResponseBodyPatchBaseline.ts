// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePatchBaselineResponseBodyPatchBaselineTags } from "./UpdatePatchBaselineResponseBodyPatchBaselineTags";


export class UpdatePatchBaselineResponseBodyPatchBaseline extends $dara.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
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
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The creator of the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was created.
   * 
   * @example
   * 2021-09-07T03:42:56Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * UpdatePatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-445340b5c6504a85a300
   */
  id?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
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
   * rg-acfmy2zdbbjplii
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the patch baseline.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdatePatchBaselineResponseBodyPatchBaselineTags[];
  /**
   * @remarks
   * The user who updated the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was updated.
   * 
   * @example
   * 2021-09-08T07:26:37Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': UpdatePatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
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

