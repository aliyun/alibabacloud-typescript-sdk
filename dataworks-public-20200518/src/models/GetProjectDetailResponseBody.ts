// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectDetailResponseBodyDataTags extends $dara.Model {
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

export class GetProjectDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The identifier of the shared resource group for Data Integration on which nodes are run.
   * 
   * @example
   * group_280749521****
   */
  defaultDiResourceGroupIdentifier?: string;
  /**
   * @remarks
   * The development type of the workspace. The value is fixed to 4.
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
   * The environments of workspaces in different modes. Workspaces in basic mode provide only the production environment. Workspaces in standard mode provide both the development environment and the production environment.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * @example
   * Oct 10, 2019 3:42:53 PM
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the workspace was last modified.
   * 
   * @example
   * Dec 3, 2019 9:12:20 PM
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the download operation is allowed.
   * 
   * @example
   * 1
   */
  isAllowDownload?: number;
  /**
   * @remarks
   * Indicates whether the workspace is a default workspace. Valid values:
   * 
   * *   1: The workspace is a default workspace.
   * *   0: The workspace is not a default workspace.
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
   * abc
   */
  projectDescription?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the workspace.
   * 
   * @example
   * abc
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The mode of the workspace. The value 2 indicates that the workspace is in basic mode. The value 3 indicates that the workspace is in standard mode.
   * 
   * @example
   * 1
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
   * Indicates whether the workspace protection feature is enabled.
   * 
   * @example
   * 1
   */
  protectedMode?: number;
  /**
   * @remarks
   * The type of the workspace. Valid values: private and swap.
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
   * The interval between automatic reruns after an error occurs.
   * 
   * @example
   * 120000
   */
  schedulerRetryInterval?: number;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the MaxCompute tables in the workspace are visible to the users within a tenant. Valid values:
   * 
   * *   0: The MaxCompute tables in the workspace are not visible to the users within a tenant.
   * *   1: The MaxCompute tables in the workspace are visible to the users within a tenant.
   * 
   * @example
   * 1
   */
  tablePrivacyMode?: number;
  /**
   * @remarks
   * The tag information.
   */
  tags?: GetProjectDetailResponseBodyDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 280749521950784
   */
  tenantId?: number;
  /**
   * @remarks
   * Indicates whether a proxy account is used to access the MaxCompute compute engine.
   * 
   * @example
   * true
   */
  useProxyOdpsAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      developmentType: 'DevelopmentType',
      disableDevelopment: 'DisableDevelopment',
      envTypes: 'EnvTypes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isAllowDownload: 'IsAllowDownload',
      isDefault: 'IsDefault',
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
      defaultDiResourceGroupIdentifier: 'string',
      developmentType: 'number',
      disableDevelopment: 'boolean',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      isAllowDownload: 'number',
      isDefault: 'number',
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
      tags: { 'type': 'array', 'itemType': GetProjectDetailResponseBodyDataTags },
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

export class GetProjectDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the workspace.
   */
  data?: GetProjectDetailResponseBodyData;
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
   * Indicates whether the request was successful.
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
      data: GetProjectDetailResponseBodyData,
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

