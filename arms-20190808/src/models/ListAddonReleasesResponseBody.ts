// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonReleasesResponseBodyDataReleasesConditions extends $dara.Model {
  /**
   * @remarks
   * The first transition time.
   * 
   * @example
   * 2018-01-31T14:32:19Z
   */
  firstTransitionTime?: string;
  /**
   * @remarks
   * The last transition time.
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
   * The reason for the failure.
   * 
   * @example
   * xxxx
   */
  reason?: string;
  /**
   * @remarks
   * The status of the phase.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The type of the phase.
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
   * The name of the add-on.
   * 
   * @example
   * mysql
   */
  addonName?: string;
  /**
   * @remarks
   * The number of alert rules.
   * 
   * @example
   * 1
   */
  alertRuleCount?: number;
  /**
   * @remarks
   * The installation phase.
   */
  conditions?: ListAddonReleasesResponseBodyDataReleasesConditions[];
  /**
   * @remarks
   * The configuration information of the add-on release.
   * 
   * @example
   * {"port":"9379"}
   */
  config?: string;
  /**
   * @remarks
   * The time when the add-on was created.
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
   * The number of exporters.
   * 
   * @example
   * 2
   */
  exporterCount?: number;
  /**
   * @remarks
   * Indicates whether the configuration is available.
   * 
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @remarks
   * The user ID.
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
   * Indicates whether the component is fully managed.
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
   * The scenario.
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
   * The time when the add-on was updated.
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
   * The version of the add-on.
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
  /**
   * @remarks
   * The queried add-ons.
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
      releases: 'Releases',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The result returned.
   */
  data?: ListAddonReleasesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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

