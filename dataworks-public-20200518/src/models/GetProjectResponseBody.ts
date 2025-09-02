// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  appkey?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * false
   */
  baseProject?: boolean;
  /**
   * @remarks
   * The ID of the resource group that was allocated by default when you purchased an exclusive resource group for MaxCompute.
   * 
   * @example
   * group_280749521****
   */
  defaultDiResourceGroupIdentifier?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  destination?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  devStorageQuota?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 4
   */
  developmentType?: number;
  /**
   * @remarks
   * Indicates whether the Develop role is disabled. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * true
   */
  disableDevelopment?: boolean;
  /**
   * @remarks
   * The environment information of the workspace.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The time when the workspace was created. Example: `Dec 3, 2019 9:12:20 PM`.
   * 
   * @example
   * Oct 10, 2019 3:42:53 PM
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the workspace was last modified. Example: `Dec 3, 2019 9:12:20 PM`.
   * 
   * @example
   * Dec 3, 2019 9:12:20 PM
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether you are allowed to download the query result from DataStudio. Valid values:
   * 
   * *   **1**: You are allowed to download the query result from DataStudio.
   * *   **0**: You are not allowed to download the query result from DataStudio.
   * 
   * @example
   * 1
   */
  isAllowDownload?: number;
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
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  maxFlowNode?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  prodStorageQuota?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * abc
   */
  projectDescription?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * abc
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The mode of the workspace. Valid values:
   * 
   * *   **2**: The workspace is in basic mode.
   * *   **3**: The workspace is in standard mode.
   * 
   * @example
   * 2
   */
  projectMode?: number;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * abc
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace owner.
   * 
   * @example
   * 18229311****
   */
  projectOwnerBaseId?: string;
  /**
   * @remarks
   * Indicates whether the workspace protection feature is enabled. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  protectedMode?: number;
  /**
   * @remarks
   * The type of the workspace. Valid values:
   * 
   * *   **private**
   * *   **swap**
   * 
   * @example
   * private
   */
  residentArea?: string;
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
   * The default maximum number of automatic reruns that are allowed after an error occurs.
   * 
   * @example
   * 3
   */
  schedulerMaxRetryTimes?: number;
  /**
   * @remarks
   * The default interval between automatic reruns after an error occurs. Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
   * 
   * @example
   * 120000
   */
  schedulerRetryInterval?: number;
  /**
   * @remarks
   * The status of the workspace. Valid values:
   * 
   * *   **0**: AVAILABLE, which indicates that the workspace runs as expected.
   * *   **1**: DELETED, which indicates that the workspace is deleted.
   * *   **2**: INITIALIZING, which indicates that the workspace is being initialized.
   * *   **3**: INIT_FAILED, which indicates that the workspace fails to be initialized.
   * *   **4**: FORBIDDEN, which indicates that the workspace is manually disabled.
   * *   **5**: DELETING, which indicates that the workspace is being deleted.
   * *   **6**: DEL_FAILED, which indicates that the workspace fails to be deleted.
   * *   **7**: FROZEN, which indicates that the workspace is frozen due to overdue payments.
   * *   **8**: UPDATING, which indicates that the workspace is being updated. The workspace enters this state after you associate a new compute engine with the workspace and the compute engine is initialized.
   * *   **9**: UPDATE_FAILED, which indicates that the workspace fails to be updated.
   * 
   * @example
   * 0
   */
  status?: number;
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
  tags?: GetProjectResponseBodyDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 280749521
   */
  tenantId?: number;
  /**
   * @remarks
   * Indicates whether a proxy account is used to access the MaxCompute compute engine associated with the workspace.
   * 
   * @example
   * true
   */
  useProxyOdpsAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      appkey: 'Appkey',
      baseProject: 'BaseProject',
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      destination: 'Destination',
      devStorageQuota: 'DevStorageQuota',
      developmentType: 'DevelopmentType',
      disableDevelopment: 'DisableDevelopment',
      envTypes: 'EnvTypes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isAllowDownload: 'IsAllowDownload',
      isDefault: 'IsDefault',
      maxFlowNode: 'MaxFlowNode',
      prodStorageQuota: 'ProdStorageQuota',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      projectMode: 'ProjectMode',
      projectName: 'ProjectName',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      protectedMode: 'ProtectedMode',
      residentArea: 'ResidentArea',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      schedulerMaxRetryTimes: 'SchedulerMaxRetryTimes',
      schedulerRetryInterval: 'SchedulerRetryInterval',
      status: 'Status',
      tablePrivacyMode: 'TablePrivacyMode',
      tags: 'Tags',
      tenantId: 'TenantId',
      useProxyOdpsAccount: 'UseProxyOdpsAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appkey: 'string',
      baseProject: 'boolean',
      defaultDiResourceGroupIdentifier: 'string',
      destination: 'number',
      devStorageQuota: 'string',
      developmentType: 'number',
      disableDevelopment: 'boolean',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      isAllowDownload: 'number',
      isDefault: 'number',
      maxFlowNode: 'number',
      prodStorageQuota: 'string',
      projectDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      projectMode: 'number',
      projectName: 'string',
      projectOwnerBaseId: 'string',
      protectedMode: 'number',
      residentArea: 'string',
      resourceManagerResourceGroupId: 'string',
      schedulerMaxRetryTimes: 'number',
      schedulerRetryInterval: 'number',
      status: 'number',
      tablePrivacyMode: 'number',
      tags: { 'type': 'array', 'itemType': GetProjectResponseBodyDataTags },
      tenantId: 'number',
      useProxyOdpsAccount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the workspace.
   */
  data?: GetProjectResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProjectResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

