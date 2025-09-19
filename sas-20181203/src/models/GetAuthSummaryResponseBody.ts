// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthSummaryResponseBodyMachine extends $dara.Model {
  /**
   * @remarks
   * The number of cores of the assets that are bound to Security Center.
   * 
   * @example
   * 10
   */
  bindCoreCount?: number;
  /**
   * @remarks
   * The number of the assets that are bound to Security Center.
   * 
   * @example
   * 10
   */
  bindEcsCount?: number;
  /**
   * @remarks
   * Bind the number of cores for postpaid authorization assets.
   * 
   * @example
   * 10
   */
  postPaidBindCoreCount?: number;
  /**
   * @remarks
   * The number of assets bound to the postpaid authorization.
   * 
   * @example
   * 10
   */
  postPaidBindEcsCount?: number;
  /**
   * @remarks
   * The number of cores of the assets that are at risk.
   * 
   * @example
   * 10
   */
  riskCoreCount?: number;
  /**
   * @remarks
   * The number of the assets that are at risk.
   * 
   * @example
   * 10
   */
  riskEcsCount?: number;
  /**
   * @remarks
   * The total number of asset cores.
   * 
   * @example
   * 10
   */
  totalCoreCount?: number;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 10
   */
  totalEcsCount?: number;
  /**
   * @remarks
   * The number of cores of unbound assets.
   * 
   * @example
   * 10
   */
  unBindCoreCount?: number;
  /**
   * @remarks
   * The number of unbound assets.
   * 
   * @example
   * 10
   */
  unBindEcsCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindCoreCount: 'BindCoreCount',
      bindEcsCount: 'BindEcsCount',
      postPaidBindCoreCount: 'PostPaidBindCoreCount',
      postPaidBindEcsCount: 'PostPaidBindEcsCount',
      riskCoreCount: 'RiskCoreCount',
      riskEcsCount: 'RiskEcsCount',
      totalCoreCount: 'TotalCoreCount',
      totalEcsCount: 'TotalEcsCount',
      unBindCoreCount: 'UnBindCoreCount',
      unBindEcsCount: 'UnBindEcsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCoreCount: 'number',
      bindEcsCount: 'number',
      postPaidBindCoreCount: 'number',
      postPaidBindEcsCount: 'number',
      riskCoreCount: 'number',
      riskEcsCount: 'number',
      totalCoreCount: 'number',
      totalEcsCount: 'number',
      unBindCoreCount: 'number',
      unBindEcsCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthSummaryResponseBodyPostPaidVersionSummary extends $dara.Model {
  /**
   * @remarks
   * The type of authorization consumed during binding, with values: - **ASSET**: Consumes the number of authorized devices - **CORE**: Consumes the number of authorized cores - **ASSET_AND_CORE**: Consumes both the number of authorized devices and cores.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * Current version index, the higher the number, the newer the version, used for sorting. Values: - **1**: Free Edition - **2**: Anti-virus Edition - **3**: Advanced Edition - **4**: Enterprise Edition - **5**: Flagship Edition
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Number of authorized cores used. > This parameter is valid when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * Number of authorized devices used. > This parameter is valid when AuthBindType is ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * Bound host assets with postpaid versions, values:   - **1**: Free version  - **3**: Enterprise version - **5**: Advanced version - **6**: Anti-virus version     - **7**: Flagship version
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      authBindType: 'AuthBindType',
      index: 'Index',
      usedCoreCount: 'UsedCoreCount',
      usedEcsCount: 'UsedEcsCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authBindType: 'string',
      index: 'number',
      usedCoreCount: 'number',
      usedEcsCount: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthSummaryResponseBodyVersionSummary extends $dara.Model {
  /**
   * @remarks
   * The type of the quota that is consumed. Valid values:
   * 
   * *   ASSET: quota of servers.
   * *   CORE: quota of server cores.
   * *   ASSET_AND_CORE: both.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The index of the current edition. The smaller the value, the higher the edition. The index is used for sorting.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The total quota of server cores.
   * 
   * >  This parameter takes effect only if AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalCoreAuthCount?: number;
  /**
   * @remarks
   * The total quota of servers in the current edition.
   * 
   * >  This parameter takes effect only if AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The total quota of servers.
   * 
   * >  This parameter takes effect only if AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalEcsAuthCount?: number;
  /**
   * @remarks
   * The remaining quota of servers.
   * 
   * >  This parameter takes effect only if AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unUsedCount?: number;
  /**
   * @remarks
   * The remaining quota of server cores.
   * 
   * >  This parameter takes effect only if AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unusedCoreAuthCount?: number;
  /**
   * @remarks
   * The remaining quota of servers.
   * 
   * >  This parameter takes effect only if AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unusedEcsAuthCount?: number;
  /**
   * @remarks
   * The consumed quota of server cores.
   * 
   * >  This parameter takes effect only if AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The used quota of servers.
   * 
   * >  This parameter takes effect only if AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The edition of purchased Security Center. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **3**: Enterprise edition
   * *   **5**: Advanced edition
   * *   **6**: Anti-virus edition
   * *   **7**: Ultimate edition
   * *   **8**: Multi-edition
   * *   **10**: Value-added Plan edition
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      authBindType: 'AuthBindType',
      index: 'Index',
      totalCoreAuthCount: 'TotalCoreAuthCount',
      totalCount: 'TotalCount',
      totalEcsAuthCount: 'TotalEcsAuthCount',
      unUsedCount: 'UnUsedCount',
      unusedCoreAuthCount: 'UnusedCoreAuthCount',
      unusedEcsAuthCount: 'UnusedEcsAuthCount',
      usedCoreCount: 'UsedCoreCount',
      usedEcsCount: 'UsedEcsCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authBindType: 'string',
      index: 'number',
      totalCoreAuthCount: 'number',
      totalCount: 'number',
      totalEcsAuthCount: 'number',
      unUsedCount: 'number',
      unusedCoreAuthCount: 'number',
      unusedEcsAuthCount: 'number',
      usedCoreCount: 'number',
      usedEcsCount: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can purchase protection quota on demand when you purchase Security Center. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * Indicates whether you can purchase protection quota on demand after an upgrade. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allowUpgradePartialBuy?: number;
  /**
   * @remarks
   * Indicates whether all bound assets can be immediately unbound. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allowUserUnbind?: number;
  /**
   * @remarks
   * Indicates whether automatic binding is enabled. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * Indicates whether the protection quota is supported for all assets. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  defaultAuthToAll?: number;
  /**
   * @remarks
   * Indicates whether pre-bound assets exist. If you select assets to bind when you purchase Security Center, pre-bound assets exist. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  hasPreBindSetting?: boolean;
  /**
   * @remarks
   * The most advanced edition that is used. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **3**: Enterprise edition
   * *   **5**: Advanced edition
   * *   **6**: Anti-virus edition
   * *   **7**: Ultimate edition
   * *   **10**: Value-added Plan edition
   * 
   * >  If you purchase Security Center Multi-edition, the value indicates the most advanced edition that is used. Otherwise, the value indicates the specific edition that is purchased.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  invalidBindStatus?: string;
  /**
   * @remarks
   * Indicates whether Security Center Multi-edition is purchased. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  isMultiVersion?: number;
  /**
   * @remarks
   * The statistics of the protection quota for assets.
   */
  machine?: GetAuthSummaryResponseBodyMachine;
  /**
   * @remarks
   * Activate the pay-as-you-go service protection version for hosts and container security, which is the highest protection version among all bound hosts. Values:   - **1**: Free Edition  - **3**: Enterprise Edition - **5**: Advanced Edition - **6**: Antivirus Edition     - **7**: Flagship Edition
   * 
   * @example
   * 7
   */
  postPaidHighestVersion?: string;
  /**
   * @remarks
   * The pay-as-you-go service for host and container security adds an automatic binding identifier for new hosts, with values: - **0**: Off - **1**: On
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: string;
  /**
   * @remarks
   * The version for the pay-as-you-go service of host and container security to automatically bind new assets, with values: - **1**: Free Edition - **3**: Enterprise Edition - **5**: Advanced Edition - **6**: Antivirus Edition - **7**: Flagship Edition
   * 
   * @example
   * 7
   */
  postPaidHostAutoBindVersion?: string;
  /**
   * @remarks
   * Statistics on pay-as-you-go service authorization for host and container security.
   */
  postPaidVersionSummary?: GetAuthSummaryResponseBodyPostPaidVersionSummary[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-***-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The quota consumption statistics.
   */
  versionSummary?: GetAuthSummaryResponseBodyVersionSummary[];
  static names(): { [key: string]: string } {
    return {
      allowPartialBuy: 'AllowPartialBuy',
      allowUpgradePartialBuy: 'AllowUpgradePartialBuy',
      allowUserUnbind: 'AllowUserUnbind',
      autoBind: 'AutoBind',
      defaultAuthToAll: 'DefaultAuthToAll',
      hasPreBindSetting: 'HasPreBindSetting',
      highestVersion: 'HighestVersion',
      invalidBindStatus: 'InvalidBindStatus',
      isMultiVersion: 'IsMultiVersion',
      machine: 'Machine',
      postPaidHighestVersion: 'PostPaidHighestVersion',
      postPaidHostAutoBind: 'PostPaidHostAutoBind',
      postPaidHostAutoBindVersion: 'PostPaidHostAutoBindVersion',
      postPaidVersionSummary: 'PostPaidVersionSummary',
      requestId: 'RequestId',
      versionSummary: 'VersionSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPartialBuy: 'number',
      allowUpgradePartialBuy: 'number',
      allowUserUnbind: 'number',
      autoBind: 'number',
      defaultAuthToAll: 'number',
      hasPreBindSetting: 'boolean',
      highestVersion: 'number',
      invalidBindStatus: 'string',
      isMultiVersion: 'number',
      machine: GetAuthSummaryResponseBodyMachine,
      postPaidHighestVersion: 'string',
      postPaidHostAutoBind: 'string',
      postPaidHostAutoBindVersion: 'string',
      postPaidVersionSummary: { 'type': 'array', 'itemType': GetAuthSummaryResponseBodyPostPaidVersionSummary },
      requestId: 'string',
      versionSummary: { 'type': 'array', 'itemType': GetAuthSummaryResponseBodyVersionSummary },
    };
  }

  validate() {
    if(this.machine && typeof (this.machine as any).validate === 'function') {
      (this.machine as any).validate();
    }
    if(Array.isArray(this.postPaidVersionSummary)) {
      $dara.Model.validateArray(this.postPaidVersionSummary);
    }
    if(Array.isArray(this.versionSummary)) {
      $dara.Model.validateArray(this.versionSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

