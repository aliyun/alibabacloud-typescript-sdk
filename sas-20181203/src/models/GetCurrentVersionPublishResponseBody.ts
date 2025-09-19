// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCurrentVersionPublishResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic upgrade is enabled. Valid values:
   * 
   * *   **1**: yes.
   * *   **0**: no.
   * 
   * @example
   * 1
   */
  autoUpgrade?: number;
  /**
   * @remarks
   * Indicates whether you can enable custom upgrade for the Security Center agent. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  bigCustomer?: boolean;
  /**
   * @remarks
   * The version of the Security Center agent.
   * 
   * @example
   * 0.0.8
   */
  curVersion?: string;
  /**
   * @remarks
   * The timestamp when the Security Center agent was forcibly upgraded.
   * 
   * @example
   * 1732506308000
   */
  forceUpgradeTime?: number;
  /**
   * @remarks
   * Indicates whether the canary release policy is enabled. Valid values:
   * 
   * *   **1**: yes.
   * *   .**0**: no.
   * 
   * @example
   * 1
   */
  graySwitchStatus?: number;
  /**
   * @remarks
   * The latest version of the Security Center agent.
   * 
   * @example
   * 0.0.9
   */
  latestVersion?: string;
  /**
   * @remarks
   * The timestamp when the latest version of the Security Center agent was created.
   * 
   * @example
   * 1662639150000
   */
  latestVersionCreate?: number;
  /**
   * @remarks
   * The description of about the latest version.
   * 
   * @example
   * test
   */
  latestVersionDesc?: string;
  /**
   * @remarks
   * The publish status of the Security Center agent. Valid values:
   * 
   * *   **0**: not started.
   * *   **1**: publishing.
   * *   **2**: published.
   * *   **3**: publish suspended.
   * *   **4**: forcibly upgrading.
   * 
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @remarks
   * The destination version of the Security Center agent.
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
   * The data returned.
   */
  data?: GetCurrentVersionPublishResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

