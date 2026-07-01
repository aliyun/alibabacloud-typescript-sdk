// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBBranchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute cluster associated with the branch.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  branchComputeClusterId?: string;
  /**
   * @remarks
   * The branch ID.
   * 
   * @example
   * br-7g8h9i0j1k2l
   */
  branchId?: string;
  /**
   * @remarks
   * The name of the branch.
   * 
   * @example
   * feature-analytics
   */
  branchName?: string;
  /**
   * @remarks
   * The AgenticDB cluster ID.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the parent branch.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The name of the parent branch.
   * 
   * @example
   * main
   */
  parentBranchName?: string;
  /**
   * @remarks
   * The ID of the project to which the branch belongs.
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project to which the branch belongs.
   * 
   * @example
   * analytics-prod
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-1234567890AB
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the branch.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      branchComputeClusterId: 'BranchComputeClusterId',
      branchId: 'BranchId',
      branchName: 'BranchName',
      DBClusterId: 'DBClusterId',
      parentBranchId: 'ParentBranchId',
      parentBranchName: 'ParentBranchName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchComputeClusterId: 'string',
      branchId: 'string',
      branchName: 'string',
      DBClusterId: 'string',
      parentBranchId: 'string',
      parentBranchName: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

