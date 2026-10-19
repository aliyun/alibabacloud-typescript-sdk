// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the project was created.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the default branch.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  defaultBranchId?: string;
  /**
   * @remarks
   * The name of the default branch.
   * 
   * @example
   * main
   */
  defaultBranchName?: string;
  /**
   * @remarks
   * The description of the project.
   * 
   * @example
   * Production analytics database
   */
  description?: string;
  /**
   * @remarks
   * Project ID
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
   * I9J0K1L2-M3N4-5678-IJKL-789012345678
   */
  requestId?: string;
  /**
   * @remarks
   * The project status. Valid values:
   * 
   * - Active: Normal.
   * - Destroying: Being destroyed.
   * - Destroyed: Destroyed.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant to which the project belongs.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultBranchId: 'DefaultBranchId',
      defaultBranchName: 'DefaultBranchName',
      description: 'Description',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultBranchId: 'string',
      defaultBranchName: 'string',
      description: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
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

