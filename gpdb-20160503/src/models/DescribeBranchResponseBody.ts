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
   * The branch name.
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
   * The branch description.
   * 
   * @example
   * test branch
   */
  description?: string;
  /**
   * @remarks
   * The time when the branch expires and is automatically deleted, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-08T09:11:12Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The initialization source of the branch.
   * 
   * Valid values:
   * - ParentData: Copies the schema and data from the parent branch. This is the default value.
   * - SchemaOnly: Copies only the schema structure.
   * 
   * @example
   * ParentData
   */
  initSource?: string;
  /**
   * @remarks
   * Indicates whether this is the default branch.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The parent branch ID, which specifies the parent branch of a new branch or a query condition.
   * 
   * @example
   * br-main
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The parent branch name. This value is empty or displayed as - for the primary branch.
   * 
   * @example
   * main
   */
  parentBranchName?: string;
  /**
   * @remarks
   * The Log Sequence Number (LSN) of the parent branch at the time this branch was created.
   * 
   * @example
   * 0/3522648
   */
  parentLSN?: string;
  /**
   * @remarks
   * The data synchronization point in time selected from the parent branch when this branch was created, in ISO 8601 UTC format.
   * 
   * Note:
   * - For child branches, this value indicates the point in time of the parent branch selected during creation.
   * - If no parent branch exists, the value 1970-01-01T00:00:00.000Z is returned.
   * 
   * @example
   * 2026-04-08T09:11:12Z
   */
  parentTimestamp?: string;
  /**
   * @remarks
   * The Supabase project ID that corresponds to the primary branch.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * Indicates whether branch protection is enabled. A value of true indicates that branch protection is enabled. A value of false indicates that branch protection is disabled.
   * 
   * @example
   * false
   */
  protected?: boolean;
  /**
   * @remarks
   * The service type.
   * 
   * Valid values:
   * - Supabase: Supabase service.
   * - Memory: Memory service.
   * 
   * @example
   * Supabase
   */
  serviceType?: string;
  /**
   * @remarks
   * The branch status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of branch tags.
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
   * The branch list. Each element represents a Supabase branch.
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

