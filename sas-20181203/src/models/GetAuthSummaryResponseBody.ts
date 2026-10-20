// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthSummaryResponseBodyEdrSummary extends $dara.Model {
  /**
   * @remarks
   * The number of bound EDR authorizations.
   * 
   * @example
   * 0
   */
  boundCount?: string;
  /**
   * @remarks
   * The automatic binding status of hybrid billing EDR instances.
   * 
   * @example
   * 0
   */
  hybridPaidAutoBind?: string;
  /**
   * @remarks
   * The automatic binding status of pay-as-you-go EDR instances.
   * 
   * @example
   * 0
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
   * The number of cores for assets bound with authorization.
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
   * The number of cores for assets bound with pay-as-you-go authorization.
   * 
   * @example
   * 10
   */
  postPaidBindCoreCount?: number;
  /**
   * @remarks
   * The number of assets bound with pay-as-you-go authorization.
   * 
   * @example
   * 10
   */
  postPaidBindEcsCount?: number;
  /**
   * @remarks
   * The number of cores for assets with security risks.
   * 
   * @example
   * 10
   */
  riskCoreCount?: number;
  /**
   * @remarks
   * The number of assets with security risks.
   * 
   * @example
   * 10
   */
  riskEcsCount?: number;
  /**
   * @remarks
   * The total number of cores for all assets.
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
   * The number of cores for unbound assets.
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
   * - **ASSET**: Consumes the number of authorized assets.
   * - **CORE**: Consumes the number of authorized cores.
   * - **ASSET_AND_CORE**: Consumes both the number of authorized assets and the number of authorized cores.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The number of free authorized cores.
   * 
   * @example
   * 0
   */
  freeCoreCount?: number;
  /**
   * @remarks
   * The number of free authorized assets.
   * 
   * @example
   * 0
   */
  freeEcsCount?: number;
  /**
   * @remarks
   * The category identifier of the free quota.
   */
  freeType?: string;
  /**
   * @remarks
   * The index of the current edition. A larger value indicates a higher edition, which is used for sorting. Valid values:
   * - **1**: Free Edition 
   * - **2**: Anti-virus Edition    
   * - **3**: Advanced Edition
   * - **4**: Enterprise Edition
   * - **5**: Ultimate Edition
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The number of used authorized cores.
   * > This parameter is valid only when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The number of used authorized assets.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The pay-as-you-go edition bound to the host assets. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
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
   * The type of authorization consumed during binding. Valid values:
   * - ASSET: Consumes the number of authorized assets.
   * - CORE: Consumes the number of authorized cores.
   * - ASSET_AND_CORE: Consumes both the number of authorized assets and the number of authorized cores.
   * 
   * @example
   * ASSET
   */
  authBindType?: string;
  /**
   * @remarks
   * The index of the current edition. A larger value indicates a higher edition, which is used for sorting. Valid values:
   * - **1**: Free Edition 
   * - **2**: Anti-virus Edition    
   * - **3**: Advanced Edition
   * - **4**: Enterprise Edition
   * - **5**: Ultimate Edition
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
   * The number of used authorized cores.
   * > This parameter is valid only when AuthBindType is set to CORE or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedCoreCount?: number;
  /**
   * @remarks
   * The number of used authorized assets.
   * > This parameter is valid only when AuthBindType is set to ASSET or ASSET_AND_CORE.
   * 
   * @example
   * 10
   */
  usedEcsCount?: number;
  /**
   * @remarks
   * The purchased edition of Security Center. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition   
   * - **8**: Multiple editions   
   * - **10**: Value-added services only
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
   * Specifies whether pay-as-you-go authorization is allowed for new purchases. Valid values:
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
   * Specifies whether to allow immediate unbinding of all bound assets. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  allowUserUnbind?: number;
  /**
   * @remarks
   * Specifies whether to automatically bind newly added assets when the subscription service for host and container security is activated. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * Specifies whether to verify the machine version for cluster nodes. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  clusterNodeCheck?: number;
  /**
   * @remarks
   * Specifies whether default authorization is applied to all assets. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  defaultAuthToAll?: number;
  /**
   * @remarks
   * The EDR authorization summary.
   * 
   * @example
   * {"BoundCount":"0","PostPaidAutoBind":"0","HybridPaidAutoBind":"0"}
   */
  edrSummary?: GetAuthSummaryResponseBodyEdrSummary;
  /**
   * @remarks
   * Specifies whether pre-bound asset configurations exist. Pre-binding refers to the asset binding configurations selected in advance during purchase. Valid values:
   * - **0**: Does not exist.
   * - **1**: Exists.
   * 
   * @example
   * 1
   */
  hasPreBindSetting?: boolean;
  /**
   * @remarks
   * The highest purchased edition of Security Center. Valid values:
   * - **1**: Free Edition
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added services only
   * > If a single edition is purchased, this value indicates the corresponding edition. If multiple editions are purchased, this value indicates the highest edition among the sub-editions.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The effective status of the binding. Valid values:
   * - **NORMAL**: Valid.
   * - **INVALID_NODE_VERSION**: Invalid.
   * 
   * @example
   * INVALID_NODE_VERSION
   */
  invalidBindStatus?: string;
  /**
   * @remarks
   * Specifies whether multiple versions are used. Valid values:
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
   * The protection edition of the pay-as-you-go service for host and container security, which is the highest protection edition among all bound hosts. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
   * 
   * @example
   * 7
   */
  postPaidHighestVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically bind newly added hosts for the pay-as-you-go service of host and container security. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: string;
  /**
   * @remarks
   * The edition to which newly added assets are automatically bound for the pay-as-you-go service of host and container security. Valid values:
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
   * 
   * @example
   * 7
   */
  postPaidHostAutoBindVersion?: string;
  /**
   * @remarks
   * The service authorization statistics for the pay-as-you-go service of host and container security.
   */
  postPaidVersionSummary?: GetAuthSummaryResponseBodyPostPaidVersionSummary[];
  /**
   * @remarks
   * The ID of the request. This is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
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

