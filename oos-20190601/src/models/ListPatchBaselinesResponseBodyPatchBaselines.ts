// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPatchBaselinesResponseBodyPatchBaselinesTags } from "./ListPatchBaselinesResponseBodyPatchBaselinesTags";


export class ListPatchBaselinesResponseBodyPatchBaselines extends $dara.Model {
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
   * The user who created the patch baseline.
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
   * 2021-09-08T03:41:23Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * ListPatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-c2838b5d89b540e19ee6
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the patch baseline is set as the default patch baseline.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
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
   * AliyunLinux
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek256ia6vhsndy
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
   * The configurations of patch sources.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags of the patch baseline.
   */
  tags?: ListPatchBaselinesResponseBodyPatchBaselinesTags[];
  /**
   * @remarks
   * The user who last updated the patch baseline.
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
   * 2021-09-08T03:44:34Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
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
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListPatchBaselinesResponseBodyPatchBaselinesTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvedPatches)) {
      $dara.Model.validateArray(this.approvedPatches);
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

