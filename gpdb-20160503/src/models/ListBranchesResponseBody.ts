// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBranchesResponseBodyBranchesBranchTagsTag extends $dara.Model {
  key?: string;
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

export class ListBranchesResponseBodyBranchesBranchTags extends $dara.Model {
  tag?: ListBranchesResponseBodyBranchesBranchTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListBranchesResponseBodyBranchesBranchTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBranchesResponseBodyBranchesBranch extends $dara.Model {
  branchId?: string;
  branchName?: string;
  createTime?: string;
  description?: string;
  expiresAt?: string;
  initSource?: string;
  isDefault?: boolean;
  parentBranchId?: string;
  parentBranchName?: string;
  parentLSN?: string;
  parentTimestamp?: string;
  projectId?: string;
  protected?: boolean;
  serviceType?: string;
  status?: string;
  tags?: ListBranchesResponseBodyBranchesBranchTags;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      branchName: 'BranchName',
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
      tags: ListBranchesResponseBodyBranchesBranchTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBranchesResponseBodyBranches extends $dara.Model {
  branch?: ListBranchesResponseBodyBranchesBranch[];
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: { 'type': 'array', 'itemType': ListBranchesResponseBodyBranchesBranch },
    };
  }

  validate() {
    if(Array.isArray(this.branch)) {
      $dara.Model.validateArray(this.branch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBranchesResponseBody extends $dara.Model {
  branches?: ListBranchesResponseBodyBranches;
  /**
   * @remarks
   * The maximum number of records returned in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. It is not required for the first query. For subsequent queries, use the NextToken returned from the previous query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * Valid values:
   * - 10
   * - 20
   * - 50
   * - 100
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of branches that match the query conditions.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      branches: 'Branches',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branches: ListBranchesResponseBodyBranches,
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.branches && typeof (this.branches as any).validate === 'function') {
      (this.branches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

