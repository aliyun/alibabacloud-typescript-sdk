// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthSummaryResponseBodyMachine extends $dara.Model {
  /**
   * @remarks
   * The number of cores of assets that are bound with authorization.
   * 
   * @example
   * 10
   */
  bindCoreCount?: number;
  /**
   * @remarks
   * The number of bound assets.
   * 
   * @example
   * 10
   */
  bindEcsCount?: number;
  /**
   * @remarks
   * The number of cores of assets that are bound with pay-as-you-go authorization.
   * 
   * @example
   * 10
   */
  postPaidBindCoreCount?: number;
  /**
   * @remarks
   * The number of assets that are bound with pay-as-you-go authorization.
   * 
   * @example
   * 10
   */
  postPaidBindEcsCount?: number;
  /**
   * @remarks
   * The number of cores of assets that have security risks.
   * 
   * @example
   * 10
   */
  riskCoreCount?: number;
  /**
   * @remarks
   * The number of assets that have security risks.
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
   * The type of authorization consumed during binding. Valid values:
   * - **ASSET**: consumes authorized asset count.
   * - **CORE**: consumes authorized core count.
   * - **ASSET_AND_CORE**: consumes both authorized asset count and authorized core count.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The index of the current edition. A larger value indicates a higher edition. This parameter is used for sorting. Valid values:
   * - **1**: Free Edition. 
   * - **2**: Anti-virus Edition.    
   * - **3**: Premium Edition.
   * - **4**: Enterprise Edition.
   * - **5**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The number of authorized cores that are used.
   * > This parameter is valid only when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The number of authorized assets that are used.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The pay-as-you-go edition that is bound to host assets. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
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
   * The type of authorization consumed during binding. Valid values:
   * - ASSET: consumes authorized asset count.
   * - CORE: consumes authorized core count.
   * - ASSET_AND_CORE: consumes both authorized asset count and authorized core count.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The index of the current edition. A larger value indicates a higher edition. This parameter is used for sorting. Valid values:
   * - **1**: Free Edition. 
   * - **2**: Anti-virus Edition.    
   * - **3**: Premium Edition.
   * - **4**: Enterprise Edition.
   * - **5**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The total number of authorized cores.
   * > This parameter is valid only when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalCoreAuthCount?: number;
  /**
   * @remarks
   * The total number of authorized assets for the current edition.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of authorized assets.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalEcsAuthCount?: number;
  /**
   * @remarks
   * The number of unused authorized assets.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unUsedCount?: number;
  /**
   * @remarks
   * The number of unused authorized cores.
   * > This parameter is valid only when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unusedCoreAuthCount?: number;
  /**
   * @remarks
   * The number of unused authorized assets.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unusedEcsAuthCount?: number;
  /**
   * @remarks
   * The number of authorized cores that are used.
   * > This parameter is valid only when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The number of authorized assets that are used.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The purchased edition of Security Center. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multi-version.   
   * - **10**: Only value-added services are purchased.
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
   * Indicates whether on-demand authorization purchase is allowed during initial purchase. Valid values:
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * Indicates whether upgrading to on-demand authorization purchase is allowed during an upgrade. Valid values:
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 1
   */
  allowUpgradePartialBuy?: number;
  /**
   * @remarks
   * Indicates whether you can immediately unbind all bound assets. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  allowUserUnbind?: number;
  /**
   * @remarks
   * Indicates whether new subscription assets are automatically bound when the host and container security subscription service is activated. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * Indicates whether the cluster node requires machine version verification. Valid values:
   * - **0**: Not required.
   * - **1**: Required.
   * 
   * @example
   * 1
   */
  clusterNodeCheck?: number;
  /**
   * @remarks
   * Indicates whether all assets are authorized by default. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  defaultAuthToAll?: number;
  /**
   * @remarks
   * Indicates whether a pre-bindingasset configuration exists. Pre-binding refers to the asset binding configuration that is selected in advance during purchase. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  hasPreBindSetting?: boolean;
  /**
   * @remarks
   * The highest edition of Security Center that is purchased. Valid values:
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.
   * - **7**: Ultimate Edition.
   * - **10**: Only value-added services are purchased.
   * > If a single edition is purchased, this value indicates the corresponding edition. If multiple editions are purchased, this value indicates the highest edition among the sub-editions.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The binding validity status. Valid values:
   * - **NORMAL**: valid.
   * - **INVALID_NODE_VERSION**: invalid.
   * 
   * @example
   * INVALID_NODE_VERSION
   */
  invalidBindStatus?: string;
  /**
   * @remarks
   * Indicates whether multiple versions exist. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  isMultiVersion?: number;
  /**
   * @remarks
   * The asset authorization statistics information.
   */
  machine?: GetAuthSummaryResponseBodyMachine;
  /**
   * @remarks
   * The protection edition of the host and container security pay-as-you-go service. This value indicates the highest protection edition among all bound hosts. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  postPaidHighestVersion?: string;
  /**
   * @remarks
   * Indicates whether new hosts are automatically bound for the host and container security pay-as-you-go service. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: string;
  /**
   * @remarks
   * The edition to which new assets are automatically bound for the host and container security pay-as-you-go service. Valid values:
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  postPaidHostAutoBindVersion?: string;
  /**
   * @remarks
   * The service authorization statistics for the host and container security pay-as-you-go service.
   */
  postPaidVersionSummary?: GetAuthSummaryResponseBodyPostPaidVersionSummary[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-***-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The authorization usage statistics information.
   */
  versionSummary?: GetAuthSummaryResponseBodyVersionSummary[];
  static names(): { [key: string]: string } {
    return {
      allowPartialBuy: 'AllowPartialBuy',
      allowUpgradePartialBuy: 'AllowUpgradePartialBuy',
      allowUserUnbind: 'AllowUserUnbind',
      autoBind: 'AutoBind',
      clusterNodeCheck: 'ClusterNodeCheck',
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
      clusterNodeCheck: 'number',
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

