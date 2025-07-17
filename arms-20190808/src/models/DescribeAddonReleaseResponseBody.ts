// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonReleaseResponseBodyDataReleaseConditions extends $dara.Model {
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
   * The returned message.
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

export class DescribeAddonReleaseResponseBodyDataRelease extends $dara.Model {
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
  conditions?: DescribeAddonReleaseResponseBodyDataReleaseConditions[];
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
   * 23810923891
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
   */
  managed?: boolean;
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
   * 13818734031
   */
  userID?: string;
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
      createTime: 'CreateTime',
      dashboardCount: 'DashboardCount',
      environmentId: 'EnvironmentId',
      exporterCount: 'ExporterCount',
      haveConfig: 'HaveConfig',
      installUserId: 'InstallUserId',
      language: 'Language',
      managed: 'Managed',
      regionId: 'RegionId',
      releaseId: 'ReleaseId',
      releaseName: 'ReleaseName',
      scene: 'Scene',
      status: 'Status',
      updateTime: 'UpdateTime',
      userID: 'UserID',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      alertRuleCount: 'number',
      conditions: { 'type': 'array', 'itemType': DescribeAddonReleaseResponseBodyDataReleaseConditions },
      createTime: 'string',
      dashboardCount: 'number',
      environmentId: 'string',
      exporterCount: 'number',
      haveConfig: 'boolean',
      installUserId: 'string',
      language: 'string',
      managed: 'boolean',
      regionId: 'string',
      releaseId: 'string',
      releaseName: 'string',
      scene: 'string',
      status: 'string',
      updateTime: 'string',
      userID: 'string',
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

export class DescribeAddonReleaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration information of the add-on release.
   * 
   * @example
   * {"host":"mysql-service.default","port":3306,"username":"root","password":"roots"}
   */
  config?: string;
  /**
   * @remarks
   * The release information.
   */
  release?: DescribeAddonReleaseResponseBodyDataRelease;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      release: 'Release',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      release: DescribeAddonReleaseResponseBodyDataRelease,
    };
  }

  validate() {
    if(this.release && typeof (this.release as any).validate === 'function') {
      (this.release as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The release information.
   */
  data?: DescribeAddonReleaseResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      data: DescribeAddonReleaseResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

