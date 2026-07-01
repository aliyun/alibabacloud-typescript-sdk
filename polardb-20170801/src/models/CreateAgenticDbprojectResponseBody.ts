// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute instance associated with the default branch.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  branchComputeClusterId?: string;
  /**
   * @remarks
   * The time when the project was created.
   * 
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default branch ID.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  defaultBranchId?: string;
  /**
   * @remarks
   * The default branch name.
   * 
   * @example
   * main
   */
  defaultBranchName?: string;
  /**
   * @remarks
   * The ID of the new project.
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
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
   * E5F6A7B8-C9D0-1234-EFAB-345678901234
   */
  requestId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      branchComputeClusterId: 'BranchComputeClusterId',
      createTime: 'CreateTime',
      defaultBranchId: 'DefaultBranchId',
      defaultBranchName: 'DefaultBranchName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchComputeClusterId: 'string',
      createTime: 'string',
      defaultBranchId: 'string',
      defaultBranchName: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

