// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterDefaultPatchBaselineResponseBodyPatchBaseline extends $dara.Model {
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
   * 2021-09-07T03:42:56Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * RegisterPatchBaseline
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4dpaq2yox6q
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
   * The user who last updated the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was last updated.
   * 
   * @example
   * 2021-09-07T03:42:56Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: RegisterDefaultPatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6850689-348D-59FC-AE13-BB0EDB7C4BE8
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
      patchBaseline: RegisterDefaultPatchBaselineResponseBodyPatchBaseline,
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

