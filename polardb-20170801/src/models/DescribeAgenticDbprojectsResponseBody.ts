// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBProjectsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @example
   * br-1a2b3c4d5e6f
   */
  defaultBranchId?: string;
  /**
   * @example
   * main
   */
  defaultBranchName?: string;
  /**
   * @example
   * Production analytics database
   */
  description?: string;
  /**
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @example
   * analytics-prod
   */
  projectName?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      defaultBranchId: 'DefaultBranchId',
      defaultBranchName: 'DefaultBranchName',
      description: 'Description',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusterId: 'string',
      defaultBranchId: 'string',
      defaultBranchName: 'string',
      description: 'string',
      projectId: 'string',
      projectName: 'string',
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

export class DescribeAgenticDBProjectsResponseBody extends $dara.Model {
  items?: DescribeAgenticDBProjectsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * F6A7B8C9-D0E1-2345-FABC-456789012345
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAgenticDBProjectsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

