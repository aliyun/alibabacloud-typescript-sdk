// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePatchBaselineResponseBodyPatchBaselineTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponseBodyPatchBaseline extends $dara.Model {
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
   * 2021-09-08T06:25:41Z
   */
  createdDate?: string;
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
   * The ID of the patch baseline.
   * 
   * @example
   * pb-0a0aeda72ed147eb97ea
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
   * The type of the operating system.
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
   * "ALLOW_AS_DEPENDENCY"
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3comlufxpva
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
  tags?: CreatePatchBaselineResponseBodyPatchBaselineTags[];
  /**
   * @remarks
   * The Alibaba Cloud account that last modified the information about the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the information about the patch baseline was last modified.
   * 
   * @example
   * 2021-09-08T06:25:41Z
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
      tags: { 'type': 'array', 'itemType': CreatePatchBaselineResponseBodyPatchBaselineTags },
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

export class CreatePatchBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: CreatePatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5173FF6-D10D-5E8C-8F71-943C2A3E25C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: CreatePatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.patchBaseline && typeof (this.patchBaseline as any).validate === 'function') {
      (this.patchBaseline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

