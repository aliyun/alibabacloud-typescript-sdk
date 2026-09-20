// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyPageResultProjectListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class ListProjectsResponseBodyPageResultProjectList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the development role is disabled. Valid values:
   * -  **false**: The development role is enabled.
   * -  **true**: The development role is disabled.
   * 
   * @example
   * true
   */
  disableDevelopment?: boolean;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace. Valid values:
   * - **1**: yes.
   * - **0**: no.
   * 
   * @example
   * 1
   */
  isDefault?: number;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * test_describe
   */
  projectDescription?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 466230
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The user ID of the workspace owner.
   * 
   * @example
   * 13969939245****
   */
  projectOwnerBaseId?: string;
  /**
   * @remarks
   * The status of the workspace. Valid values:
   * - AVAILABLE: The status value is 0, which indicates that the workspace is Normal.
   * - DELETED: The status value is 1, which indicates that the workspace is deleted.
   * - INITIALIZING: The status value is 2, which indicates that the workspace is being initialized.
   * - INIT_FAILED: The status value is 3, which indicates that the workspace failed to be initialized.
   * - FORBIDDEN: The status value is 4, which indicates that the workspace is manually disabled.
   * - DELETING: The status value is 5, which indicates that the workspace is being deleted.
   * - DEL_FAILED: The status value is 6, which indicates that the workspace failed to be deleted.
   * - FROZEN: The status value is 7, which indicates that the workspace is frozen due to overdue payment.
   * - UPDATING: The status value is 8, which indicates that the workspace is being updated (a compute engine is being added and initialized for the project).
   * - UPDATE_FAILED: The status value is 9, which indicates that the workspace failed to be updated (a compute engine failed to be added and initialized for the project).
   * 
   * @example
   * 0
   */
  projectStatus?: number;
  /**
   * @remarks
   * The status code of the workspace. Valid values:
   * 
   * - AVAILABLE: The status value is 0, which indicates that the workspace is Normal.
   * - DELETED: The status value is 1, which indicates that the workspace is deleted.
   * - INITIALIZING: The status value is 2, which indicates that the workspace is being initialized.
   * - INIT_FAILED: The status value is 3, which indicates that the workspace failed to be initialized.
   * - FORBIDDEN: The status value is 4, which indicates that the workspace is manually disabled.
   * - DELETING: The status value is 5, which indicates that the workspace is being deleted.
   * - DEL_FAILED: The status value is 6, which indicates that the workspace failed to be deleted.
   * - FROZEN: The status value is 7, which indicates that the workspace is frozen due to overdue payment.
   * - UPDATING: The status value is 8, which indicates that the workspace is being updated (a compute engine is being added and initialized for the project).
   * - UPDATE_FAILED: The status value is 9, which indicates that the workspace failed to be updated (a compute engine failed to be added and initialized for the project).
   * 
   * @example
   * AVAILABLE
   */
  projectStatusCode?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzbn7****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The visibility permission of MaxCompute tables. Valid values:
   * - **0**: MaxCompute tables are not visible to users within the tenant.
   * - **1**: MaxCompute tables are visible to users within the tenant.
   * 
   * @example
   * 1
   */
  tablePrivacyMode?: number;
  /**
   * @remarks
   * The list of tags bound to the workspace.
   */
  tags?: ListProjectsResponseBodyPageResultProjectListTags[];
  /**
   * @remarks
   * Indicates whether a proxy account is used to access the MaxCompute engine. Valid values:
   * - **false**: A proxy account is not used.
   * - **true**: A proxy account is used.
   * 
   * @example
   * true
   */
  useProxyOdpsAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableDevelopment: 'DisableDevelopment',
      isDefault: 'IsDefault',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      projectName: 'ProjectName',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      projectStatus: 'ProjectStatus',
      projectStatusCode: 'ProjectStatusCode',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tablePrivacyMode: 'TablePrivacyMode',
      tags: 'Tags',
      useProxyOdpsAccount: 'UseProxyOdpsAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableDevelopment: 'boolean',
      isDefault: 'number',
      projectDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      projectName: 'string',
      projectOwnerBaseId: 'string',
      projectStatus: 'number',
      projectStatusCode: 'string',
      resourceManagerResourceGroupId: 'string',
      tablePrivacyMode: 'number',
      tags: { 'type': 'array', 'itemType': ListProjectsResponseBodyPageResultProjectListTags },
      useProxyOdpsAccount: 'boolean',
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

export class ListProjectsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of DataWorks workspaces.
   */
  projectList?: ListProjectsResponseBodyPageResultProjectList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectList: 'ProjectList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectList: { 'type': 'array', 'itemType': ListProjectsResponseBodyPageResultProjectList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result.
   */
  pageResult?: ListProjectsResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20658801****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageResult: 'PageResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageResult: ListProjectsResponseBodyPageResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

