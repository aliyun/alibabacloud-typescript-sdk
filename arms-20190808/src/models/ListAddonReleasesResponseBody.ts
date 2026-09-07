// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonReleasesResponseBodyDataReleasesConditions extends $dara.Model {
  /**
   * @remarks
   * The time of the first transition.
   * 
   * @example
   * 2018-01-31T14:32:19Z
   */
  firstTransitionTime?: string;
  /**
   * @remarks
   * The time of the last transition.
   * 
   * @example
   * 2018-01-31T14:32:19Z
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The detailed information.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * xxxx
   */
  reason?: string;
  /**
   * @remarks
   * The phase status.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The phase type.
   * 
   * @example
   * Loaded
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      firstTransitionTime: 'FirstTransitionTime',
      lastTransitionTime: 'LastTransitionTime',
      message: 'Message',
      reason: 'Reason',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTransitionTime: 'string',
      lastTransitionTime: 'string',
      message: 'string',
      reason: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonReleasesResponseBodyDataReleases extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * mysql
   */
  addonName?: string;
  /**
   * @remarks
   * The number of alert groups.
   * 
   * @example
   * 1
   */
  alertRuleCount?: number;
  /**
   * @remarks
   * The installation phases.
   */
  conditions?: ListAddonReleasesResponseBodyDataReleasesConditions[];
  /**
   * @remarks
   * The configuration of the addon release.
   * 
   * @example
   * {"port":"9379"}
   */
  config?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-09-22T16:56:29+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The number of dashboards.
   * 
   * @example
   * 1
   */
  dashboardCount?: number;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-xxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The number of plug-ins.
   * 
   * @example
   * 2
   */
  exporterCount?: number;
  /**
   * @remarks
   * Indicates whether the addon has configurations.
   * 
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @remarks
   * The user ID of the installer.
   * 
   * @example
   * 1268790592387
   */
  installUserId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * Indicates whether the component is managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 0.0.4
   */
  nextVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The release ID after installation.
   * 
   * @example
   * be29c093-3fd6-4fb6-9430-797030cc183a
   */
  releaseId?: string;
  /**
   * @remarks
   * The name of the release.
   * 
   * @example
   * mysql-1695372983039
   */
  releaseName?: string;
  /**
   * @remarks
   * The identified scenario.
   * 
   * @example
   * database
   */
  scene?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-09-22T16:56:29+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 111
   */
  userId?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      alertRuleCount: 'AlertRuleCount',
      conditions: 'Conditions',
      config: 'Config',
      createTime: 'CreateTime',
      dashboardCount: 'DashboardCount',
      environmentId: 'EnvironmentId',
      exporterCount: 'ExporterCount',
      haveConfig: 'HaveConfig',
      installUserId: 'InstallUserId',
      language: 'Language',
      managed: 'Managed',
      nextVersion: 'NextVersion',
      regionId: 'RegionId',
      releaseId: 'ReleaseId',
      releaseName: 'ReleaseName',
      scene: 'Scene',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      alertRuleCount: 'number',
      conditions: { 'type': 'array', 'itemType': ListAddonReleasesResponseBodyDataReleasesConditions },
      config: 'string',
      createTime: 'string',
      dashboardCount: 'number',
      environmentId: 'string',
      exporterCount: 'number',
      haveConfig: 'boolean',
      installUserId: 'string',
      language: 'string',
      managed: 'boolean',
      nextVersion: 'string',
      regionId: 'string',
      releaseId: 'string',
      releaseName: 'string',
      scene: 'string',
      status: 'string',
      updateTime: 'string',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonReleasesResponseBodyData extends $dara.Model {
  containsV2Addon?: boolean;
  /**
   * @remarks
   * The collection of addon releases.
   */
  releases?: ListAddonReleasesResponseBodyDataReleases[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      containsV2Addon: 'ContainsV2Addon',
      releases: 'Releases',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containsV2Addon: 'boolean',
      releases: { 'type': 'array', 'itemType': ListAddonReleasesResponseBodyDataReleases },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.releases)) {
      $dara.Model.validateArray(this.releases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonReleasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAddonReleasesResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListAddonReleasesResponseBodyData,
      message: 'string',
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

