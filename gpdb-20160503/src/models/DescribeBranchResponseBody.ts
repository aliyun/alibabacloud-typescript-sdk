// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBranchResponseBodyBranchTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * dev
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBranchResponseBodyBranch extends $dara.Model {
  /**
   * @remarks
   * The branch ID, which uniquely identifies a Supabase branch.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
  /**
   * @remarks
   * The name of the branch.
   * 
   * @example
   * dev
   */
  branchName?: string;
  /**
   * @remarks
   * The connection information of the compute node associated with the branch.
   * 
   * @example
   * postgresql://user:password@host:5432/db
   */
  computeEndpoint?: string;
  /**
   * @remarks
   * The time when the branch was created, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the branch.
   * 
   * @example
   * test branch
   */
  description?: string;
  /**
   * @remarks
   * The time when the branch is automatically deleted upon expiration, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-08T09:11:12Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The initialization source of the branch. Valid values:
   * - ParentData: Copies the schema and data from the parent branch. This is the default value.
   * - SchemaOnly: Copies only the schema structure.
   * 
   * @example
   * ParentData
   */
  initSource?: string;
  /**
   * @remarks
   * Indicates whether the branch is the default branch.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the parent branch, which is used to specify the parent branch for a new branch or a query condition.
   * 
   * @example
   * br-main
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The name of the parent branch. For a primary branch, this value is empty or displayed as a hyphen (-).
   * 
   * @example
   * main
   */
  parentBranchName?: string;
  /**
   * @remarks
   * The LSN of the parent branch when the branch was created.
   * 
   * @example
   * 0/3522648
   */
  parentLSN?: string;
  /**
   * @remarks
   * The data synchronization point in time selected when the branch was created from the parent branch, in ISO 8601 UTC format.
   * 
   * Note:
   * - For a child branch, the point in time of the parent branch selected during creation is returned.
   * - If the branch has no parent branch, 1970-01-01T00:00:00.000Z is returned.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  parentTimestamp?: string;
  /**
   * @remarks
   * The ID of the Supabase project that corresponds to the primary branch.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * Indicates whether branch protection is enabled. A value of true indicates that branch protection is enabled, and a value of false indicates that branch protection is disabled.
   * 
   * @example
   * false
   */
  protected?: boolean;
  /**
   * @remarks
   * The service type. Valid values:
   * - Supabase: Supabase service
   * - Memory: Memory service
   * 
   * @example
   * Supabase
   */
  serviceType?: string;
  /**
   * @remarks
   * The ID of the Supabase project that corresponds to the current branch.
   * 
   * @example
   * spb-xxxx
   */
  spbProjectId?: string;
  /**
   * @remarks
   * The status of the branch.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of tags for the branch.
   */
  tags?: DescribeBranchResponseBodyBranchTags[];
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      branchName: 'BranchName',
      computeEndpoint: 'ComputeEndpoint',
      createTime: 'CreateTime',
      description: 'Description',
      expiresAt: 'ExpiresAt',
      initSource: 'InitSource',
      isDefault: 'IsDefault',
      parentBranchId: 'ParentBranchId',
      parentBranchName: 'ParentBranchName',
      parentLSN: 'ParentLSN',
      parentTimestamp: 'ParentTimestamp',
      projectId: 'ProjectId',
      protected: 'Protected',
      serviceType: 'ServiceType',
      spbProjectId: 'SpbProjectId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      branchName: 'string',
      computeEndpoint: 'string',
      createTime: 'string',
      description: 'string',
      expiresAt: 'string',
      initSource: 'string',
      isDefault: 'boolean',
      parentBranchId: 'string',
      parentBranchName: 'string',
      parentLSN: 'string',
      parentTimestamp: 'string',
      projectId: 'string',
      protected: 'boolean',
      serviceType: 'string',
      spbProjectId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBranchResponseBodyBranchTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBranchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of branches. Each element represents a Supabase branch.
   */
  branch?: DescribeBranchResponseBodyBranch;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: DescribeBranchResponseBodyBranch,
      requestId: 'string',
    };
  }

  validate() {
    if(this.branch && typeof (this.branch as any).validate === 'function') {
      (this.branch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

