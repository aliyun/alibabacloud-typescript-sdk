// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The time is displayed in ISO 8601 format in the UTC time zone (YYYY-MM-DDTHH:mm:ssZ).
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
   * The description.
   * 
   * @example
   * Production analytics database
   */
  description?: string;
  /**
   * @remarks
   * The retention period for recent records of the project. This parameter may be empty for older projects. To query the current effective value, call DescribeAgenticDBProjectHistoryRetention.
   * 
   * @example
   * 604800
   */
  historyRetentionSeconds?: number;
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
   * The project status. Valid values: Active (Normal), Destroying (Destroying), and Destroyed (Destroyed).
   * 
   * @example
   * Active
   */
  status?: string;
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
      createTime: 'CreateTime',
      defaultBranchId: 'DefaultBranchId',
      defaultBranchName: 'DefaultBranchName',
      description: 'Description',
      historyRetentionSeconds: 'HistoryRetentionSeconds',
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
      historyRetentionSeconds: 'number',
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

