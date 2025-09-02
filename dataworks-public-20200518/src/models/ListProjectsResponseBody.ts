// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyPageResultProjectListTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the workspace.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the workspace.
   * 
   * @example
   * Test
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
   * Indicates whether the Development role is disabled. Valid values:
   * 
   * *   **false**: enabled
   * *   **true**: disabled
   * 
   * @example
   * true
   */
  disableDevelopment?: boolean;
  /**
   * @remarks
   * Indicates whether the workspace is a default workspace. Valid values:
   * 
   * *   **1**: The workspace is a default workspace.
   * *   **0**: The workspace is not a default workspace.
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
   * 1212
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test
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
   * The ID of the user used by the workspace owner.
   * 
   * @example
   * 122222
   */
  projectOwnerBaseId?: string;
  /**
   * @remarks
   * The status of the workspace. Valid values:
   * 
   * *   0: AVAILABLE, which indicates that the workspace is running as expected.
   * *   1: DELETED, which indicates that the workspace is deleted.
   * *   2: INITIALIZING, which indicates that the workspace is being initialized.
   * *   3: INIT_FAILED, which indicates that the workspace fails to be initialized.
   * *   4: FORBIDDEN, which indicates that the workspace is manually disabled.
   * *   5: DELETING, which indicates that the workspace is being deleted.
   * *   6: DEL_FAILED, which indicates that the workspace fails to be deleted.
   * *   7: FROZEN, which indicates that the workspace is frozen due to overdue payments.
   * *   8: UPDATING, which indicates that the workspace is being updated. After you associate a compute engine with the workspace, the system initializes the compute engine and updates the workspace.
   * *   9: UPDATE_FAILED, which indicates that the workspace fails to be updated.
   * 
   * @example
   * 0
   */
  projectStatus?: number;
  /**
   * @remarks
   * The status code of the workspace. Valid values:
   * 
   * *   AVAILABLE: 0, which indicates that the workspace is running as expected.
   * *   DELETED: 1, which indicates that the workspace is deleted.
   * *   INITIALIZING: 2, which indicates that the workspace is being initialized.
   * *   INIT_FAILED: 3, which indicates that the workspace fails to be initialized.
   * *   FORBIDDEN: 4, which indicates that the workspace is manually disabled.
   * *   DELETING: 5, which indicates that the workspace is being deleted.
   * *   DEL_FAILED: 6, which indicates that the workspace fails to be deleted.
   * *   FROZEN: 7, which indicates that the workspace is frozen due to overdue payments.
   * *   UPDATING: 8, which indicates that the workspace is being updated. After you associate a compute engine with the workspace, the system initializes the compute engine and updates the workspace.
   * *   UPDATE_FAILED: 9, which indicates that the workspace fails to be updated.
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
   * rg-acfmzbn7pti3zfa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the MaxCompute tables in the workspace are visible to the users within a tenant. Valid values:
   * 
   * *   **0**: invisible
   * *   **1**: visible
   * 
   * @example
   * 1
   */
  tablePrivacyMode?: number;
  /**
   * @remarks
   * The tags added to the workspace.
   */
  tags?: ListProjectsResponseBodyPageResultProjectListTags[];
  /**
   * @remarks
   * Indicates whether a proxy account is used to access the MaxCompute compute engine associated with the workspace. Valid values:
   * 
   * *   **false**
   * *   **true**
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
   * The page number.
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
   * The DataWorks workspaces.
   */
  projectList?: ListProjectsResponseBodyPageResultProjectList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 123
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
   * The results that are returned.
   */
  pageResult?: ListProjectsResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20658801***
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

