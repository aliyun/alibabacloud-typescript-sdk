// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthSummaryResponseBodyEdrSummary extends $dara.Model {
  /**
   * @remarks
   * The number of EDR authorizations that have been bound.
   */
  boundCount?: string;
  /**
   * @remarks
   * The automatic binding status of hybrid-paid EDR instances.
   */
  hybridPaidAutoBind?: string;
  /**
   * @remarks
   * The automatic binding status of pay-as-you-go EDR instances.
   */
  postPaidAutoBind?: string;
  static names(): { [key: string]: string } {
    return {
      boundCount: 'BoundCount',
      hybridPaidAutoBind: 'HybridPaidAutoBind',
      postPaidAutoBind: 'PostPaidAutoBind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundCount: 'string',
      hybridPaidAutoBind: 'string',
      postPaidAutoBind: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthSummaryResponseBodyMachine extends $dara.Model {
  /**
   * @remarks
   * The number of cores of assets that are bound to authorizations.
   * 
   * @example
   * 10
   */
  bindCoreCount?: number;
  /**
   * @remarks
   * The number of assets that are bound to authorizations.
   * 
   * @example
   * 10
   */
  bindEcsCount?: number;
  /**
   * @remarks
   * The number of cores of assets that are bound to pay-as-you-go authorizations.
   * 
   * @example
   * 10
   */
  postPaidBindCoreCount?: number;
  /**
   * @remarks
   * The number of assets that are bound to pay-as-you-go authorizations.
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
   * The total number of cores of all assets.
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
   * The number of cores of assets that are not bound to authorizations.
   * 
   * @example
   * 10
   */
  unBindCoreCount?: number;
  /**
   * @remarks
   * The number of assets that are not bound to authorizations.
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
   * The type of authorization consumed when binding. Valid values:
   * - **ASSET**: consumes authorization units.
   * - **CORE**: consumes authorization cores.
   * - **ASSET_AND_CORE**: consumes both authorization units and authorization cores.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The number of free authorization cores.
   */
  freeCoreCount?: number;
  /**
   * @remarks
   * The number of free authorization units.
   */
  freeEcsCount?: number;
  /**
   * @remarks
   * The type of free quota.
   */
  freeType?: string;
  /**
   * @remarks
   * The index of the current edition. A higher value indicates a higher edition. This field is used for sorting. Valid values:
   * - **1**: Free Edition. 
   * - **2**: Anti-virus Edition.    
   * - **3**: Advanced Edition.
   * - **4**: Enterprise Edition.
   * - **5**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The number of authorization cores that have been used.
   * > This parameter is valid when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The number of authorization units that have been used.
   * > This parameter is valid when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The pay-as-you-go edition bound to the host asset. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
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
      freeCoreCount: 'FreeCoreCount',
      freeEcsCount: 'FreeEcsCount',
      freeType: 'FreeType',
      index: 'Index',
      usedCoreCount: 'UsedCoreCount',
      usedEcsCount: 'UsedEcsCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authBindType: 'string',
      freeCoreCount: 'number',
      freeEcsCount: 'number',
      freeType: 'string',
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
   * The type of authorization consumed when binding. Valid values:
   * - ASSET: consumes authorization units.
   * - CORE: consumes authorization cores.
   * - ASSET_AND_CORE: consumes both authorization units and authorization cores.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The index of the current edition. A higher value indicates a higher edition. This field is used for sorting. Valid values:
   * - **1**: Free Edition. 
   * - **2**: Anti-virus Edition.    
   * - **3**: Advanced Edition.
   * - **4**: Enterprise Edition.
   * - **5**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The total number of authorization cores.
   * > This parameter is valid when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalCoreAuthCount?: number;
  /**
   * @remarks
   * The total number of authorization units for the current edition.
   * > This parameter is valid when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of authorization units.
   * > This parameter is valid when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  totalEcsAuthCount?: number;
  /**
   * @remarks
   * The number of unused authorization units.
   * > This parameter is valid when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unUsedCount?: number;
  /**
   * @remarks
   * The number of unused authorization cores.
   * > This parameter is valid when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unusedCoreAuthCount?: number;
  /**
   * @remarks
   * The number of unused authorization units.
   * > This parameter is valid when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  unusedEcsAuthCount?: number;
  /**
   * @remarks
   * The number of authorization cores that have been used.
   * > This parameter is valid when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The number of authorization units that have been used.
   * > This parameter is valid when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The edition of Security Center that you have purchased. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multiple editions.   
   * - **10**: Value-added services only.
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
   * Specifies whether pay-as-you-go authorization is allowed when purchasing. Valid values:
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * Specifies whether upgrading to pay-as-you-go authorization is allowed during an upgrade. Valid values:
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 1
   */
  allowUpgradePartialBuy?: number;
  /**
   * @remarks
   * Specifies whether immediately unbinding all bound assets is allowed. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  allowUserUnbind?: number;
  /**
   * @remarks
   * Specifies whether newly added assets are automatically bound when you activate the subscription-based host and container security service. Valid values:
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
   * Specifies whether cluster nodes require machine version verification. Valid values:
   * - **0**: Not required.
   * - **1**: Required.
   * 
   * @example
   * 1
   */
  clusterNodeCheck?: number;
  /**
   * @remarks
   * Specifies whether all assets are authorized by default. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  defaultAuthToAll?: number;
  /**
   * @remarks
   * The EDR authorization summary information.
   */
  edrSummary?: GetAuthSummaryResponseBodyEdrSummary;
  /**
   * @remarks
   * Specifies whether a pre-binding asset configuration exists. Pre-binding refers to the asset binding configuration selected in advance at the time of purchase. Valid values:
   * - **0**: Does not exist.
   * - **1**: Exists.
   * 
   * @example
   * 1
   */
  hasPreBindSetting?: boolean;
  /**
   * @remarks
   * The highest edition of Security Center that you have purchased. Valid values:
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.
   * - **7**: Ultimate Edition.
   * - **10**: Value-added services only.
   * > If you purchased a single edition, this value indicates that edition. If you purchased multiple editions, this value indicates the highest edition among all sub-editions.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The binding effective status. Valid values:
   * - **NORMAL**: valid.
   * - **INVALID_NODE_VERSION**: invalid.
   * 
   * @example
   * INVALID_NODE_VERSION
   */
  invalidBindStatus?: string;
  /**
   * @remarks
   * Specifies whether multiple versions exist. Valid values:
   * - **0**: Does not exist.
   * - **1**: Exists.
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
   * The highest protection edition among all hosts bound to the pay-as-you-go host and container security service. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  postPaidHighestVersion?: string;
  /**
   * @remarks
   * Specifies whether newly added hosts are automatically bound to the pay-as-you-go host and container security service. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: string;
  /**
   * @remarks
   * The edition to which newly added assets are automatically bound under the pay-as-you-go host and container security service. Valid values:
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  postPaidHostAutoBindVersion?: string;
  /**
   * @remarks
   * The service authorization statistics for the pay-as-you-go host and container security service.
   */
  postPaidVersionSummary?: GetAuthSummaryResponseBodyPostPaidVersionSummary[];
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot and locate issues.
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
      edrSummary: 'EdrSummary',
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
      edrSummary: GetAuthSummaryResponseBodyEdrSummary,
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
    if(this.edrSummary && typeof (this.edrSummary as any).validate === 'function') {
      (this.edrSummary as any).validate();
    }
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

