// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataTags extends $dara.Model {
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
   * The identifier of the default resource group that is automatically assigned when you purchase a MaxCompute exclusive resource group.
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
   * Indicates whether the development role is disabled. Valid values:
   *  - **false** (default): The development role is enabled.
   *  - **true**: The development role is disabled.
   * 
   * @example
   * true
   */
  disableDevelopment?: boolean;
  /**
   * @remarks
   * The environment context of the workspace.
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
   * Indicates whether downloading query results from the IDE is allowed. Valid values:
   * - **1**: Downloading is allowed.
   * - **0**: Downloading is not allowed.
   * 
   * @example
   * 1
   */
  isAllowDownload?: number;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace. Valid values:
   * - **1**: Yes.
   * - **0**: No.
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
   * The mode of the workspace. Valid values:
   * - **2**: basic mode.
   * - **3**: standard mode.
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
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the workspace owner.
   * 
   * @example
   * 18229311****
   */
  projectOwnerBaseId?: string;
  /**
   * @remarks
   * Indicates whether protected mode is enabled for the workspace. Valid values:
   * - **1**: Protected mode is enabled.
   * - **0**: Protected mode is not enabled.
   * 
   * @example
   * 1
   */
  protectedMode?: number;
  /**
   * @remarks
   * The type of the workspace. Valid values:
   * - **private**: private zone.
   * - **swap**: swap zone.
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
   * rg-acfmzbn7****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The default maximum number of automatic reruns upon an error.
   * 
   * @example
   * 3
   */
  schedulerMaxRetryTimes?: number;
  /**
   * @remarks
   * The default interval between automatic reruns upon an error. Unit: ms. The maximum value is 30 minutes. Note the unit conversion.
   * 
   * @example
   * 120000
   */
  schedulerRetryInterval?: number;
  /**
   * @remarks
   * The status of the workspace. Valid values:
   * - **0**: AVAILABLE. The workspace is running normally.
   * - **1**: DELETED. The workspace has been deleted.
   * - **2**: INITIALIZING. The workspace is being initialized.
   * - **3**: INIT_FAILED. The workspace failed to be initialized.
   * - **4**: FORBIDDEN. The workspace is manually disabled.
   * - **5**: DELETING. The workspace is being deleted.
   * - **6**: DEL_FAILED. The workspace failed to be deleted.
   * - **7**: FROZEN. The workspace is frozen due to overdue payment.
   * - **8**: UPDATING. The workspace is being updated (a compute engine is being added and initialized).
   * - **9**: UPDATE_FAILED. The workspace failed to be updated (a compute engine failed to be added and initialized).
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The visibility of MaxCompute tables. Valid values:
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
   * Indicates whether a proxy account is used to access the MaxCompute engine.
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
   * The details of the workspace.
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
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

