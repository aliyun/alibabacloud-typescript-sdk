// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCurrentVersionPublishResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic upgrade is enabled. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  autoUpgrade?: number;
  /**
   * @remarks
   * Indicates whether the current user supports custom upgrades in Security Center. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  bigCustomer?: boolean;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 0.0.8
   */
  curVersion?: string;
  /**
   * @remarks
   * The timestamp for the forced client upgrade.
   * 
   * @example
   * 1732506308000
   */
  forceUpgradeTime?: number;
  /**
   * @remarks
   * Indicates whether the canary release policy is enabled. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  graySwitchStatus?: number;
  /**
   * @remarks
   * The latest client version number.
   * 
   * @example
   * 0.0.9
   */
  latestVersion?: string;
  /**
   * @remarks
   * The timestamp when the latest client version was created.
   * 
   * @example
   * 1662639150000
   */
  latestVersionCreate?: number;
  /**
   * @remarks
   * The description of the latest version.
   * 
   * @example
   * test
   */
  latestVersionDesc?: string;
  /**
   * @remarks
   * The release status of the current version. Valid values:
   * - **0**: Not started.
   * - **1**: Being released.
   * - **2**: Release completed.
   * - **3**: Release paused.
   * - **4**: Forced upgrade in progress.
   * 
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @remarks
   * The target version to upgrade to.
   * 
   * @example
   * 0.0.9
   */
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'AutoUpgrade',
      bigCustomer: 'BigCustomer',
      curVersion: 'CurVersion',
      forceUpgradeTime: 'ForceUpgradeTime',
      graySwitchStatus: 'GraySwitchStatus',
      latestVersion: 'LatestVersion',
      latestVersionCreate: 'LatestVersionCreate',
      latestVersionDesc: 'LatestVersionDesc',
      publishStatus: 'PublishStatus',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'number',
      bigCustomer: 'boolean',
      curVersion: 'string',
      forceUpgradeTime: 'number',
      graySwitchStatus: 'number',
      latestVersion: 'string',
      latestVersionCreate: 'number',
      latestVersionDesc: 'string',
      publishStatus: 'number',
      upgradeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentVersionPublishResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  data?: GetCurrentVersionPublishResponseBodyData;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8E67FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCurrentVersionPublishResponseBodyData,
      requestId: 'string',
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

