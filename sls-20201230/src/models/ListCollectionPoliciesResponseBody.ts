// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionPoliciesResponseBodyDataCentralizeConfig extends $dara.Model {
  /**
   * @remarks
   * The destination Logstore for centralized data shipping.
   * 
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @remarks
   * The destination project for centralized data shipping.
   * 
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @remarks
   * The destination region for centralized data shipping.
   * 
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The data retention period of the destination Logstore for centralized data shipping. Unit: days.
   * 
   * @example
   * 0
   */
  destTTL?: number;
  static names(): { [key: string]: string } {
    return {
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRegion: 'destRegion',
      destTTL: 'destTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destLogstore: 'string',
      destProject: 'string',
      destRegion: 'string',
      destTTL: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataDataConfig extends $dara.Model {
  /**
   * @remarks
   * The project for global logs. This parameter is used only for global log types, such as sls. If this parameter is empty, logs are collected to the default project of the account in the region specified by dataRegion.
   * 
   * @example
   * ""
   */
  dataProject?: string;
  /**
   * @remarks
   * The region where global logs are first collected. This parameter is used only for global log types, such as sls.
   * 
   * @example
   * cn-hangzhou
   */
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dataProject: 'dataProject',
      dataRegion: 'dataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProject: 'string',
      dataRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataPolicyConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The regions to which the instances belong.
   */
  regions?: string[];
  /**
   * @remarks
   * The resource collection mode.
   * 
   * @example
   * all
   */
  resourceMode?: string;
  /**
   * @remarks
   * The resource tags.
   * 
   * @example
   * {"tag1":"value1","tag2":"value2"}
   */
  resourceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      regions: 'regions',
      resourceMode: 'resourceMode',
      resourceTags: 'resourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceMode: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    if(this.resourceTags) {
      $dara.Model.validateMap(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The mode for selecting accounts in the resource directory. Valid values: all and custom.
   * 
   * @example
   * all,custom
   */
  accountGroupType?: string;
  /**
   * @remarks
   * The list of member accounts. This parameter is returned only if accountGroupType is set to custom.
   */
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      accountGroupType: 'accountGroupType',
      members: 'members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountGroupType: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration for centralized data shipping.
   */
  centralizeConfig?: ListCollectionPoliciesResponseBodyDataCentralizeConfig;
  /**
   * @remarks
   * Indicates whether centralized data shipping is enabled.
   * 
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @remarks
   * The code of the log type.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @remarks
   * Configurations for global log types, such as sls. This parameter is empty for other log types.
   */
  dataConfig?: ListCollectionPoliciesResponseBodyDataDataConfig;
  /**
   * @remarks
   * Indicates whether the collection rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the policy is a built-in policy. Built-in policies cannot be modified or deleted.
   * 
   * @example
   * false
   */
  internalPolicy?: boolean;
  /**
   * @remarks
   * The configuration of the collection rule.
   */
  policyConfig?: ListCollectionPoliciesResponseBodyDataPolicyConfig;
  /**
   * @remarks
   * The name of the collection rule.
   * 
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the collection rule. If a resource directory administrator or delegated administrator creates the rule, this is the ID of that administrator\\"s account.
   * 
   * @example
   * 148***********50
   */
  policyUid?: string;
  /**
   * @remarks
   * The code of the Alibaba Cloud service.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The configuration of the resource directory. This parameter is empty if no configuration is available.
   */
  resourceDirectory?: ListCollectionPoliciesResponseBodyDataResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      internalPolicy: 'internalPolicy',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      policyUid: 'policyUid',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: ListCollectionPoliciesResponseBodyDataCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: ListCollectionPoliciesResponseBodyDataDataConfig,
      enabled: 'boolean',
      internalPolicy: 'boolean',
      policyConfig: ListCollectionPoliciesResponseBodyDataPolicyConfig,
      policyName: 'string',
      policyUid: 'string',
      productCode: 'string',
      resourceDirectory: ListCollectionPoliciesResponseBodyDataResourceDirectory,
    };
  }

  validate() {
    if(this.centralizeConfig && typeof (this.centralizeConfig as any).validate === 'function') {
      (this.centralizeConfig as any).validate();
    }
    if(this.dataConfig && typeof (this.dataConfig as any).validate === 'function') {
      (this.dataConfig as any).validate();
    }
    if(this.policyConfig && typeof (this.policyConfig as any).validate === 'function') {
      (this.policyConfig as any).validate();
    }
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyStatisticsPolicySourceList extends $dara.Model {
  /**
   * @remarks
   * The name of the collection rule.
   * 
   * @example
   * policy_name1_from148
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the collection rule. If a resource directory administrator or delegated administrator creates the rule, this is the ID of that administrator\\"s account.
   * 
   * @example
   * 148***********50
   */
  policyUid?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'policyName',
      policyUid: 'policyUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The list of collection rule sources.
   */
  policySourceList?: ListCollectionPoliciesResponseBodyStatisticsPolicySourceList[];
  /**
   * @remarks
   * The code of the Alibaba Cloud service.
   * 
   * @example
   * oss
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      policySourceList: 'policySourceList',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySourceList: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyStatisticsPolicySourceList },
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policySourceList)) {
      $dara.Model.validateArray(this.policySourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of collection rules returned on the current page.
   * 
   * @example
   * 1
   */
  currentCount?: number;
  /**
   * @remarks
   * The collection rules that are returned on the current page.
   */
  data?: ListCollectionPoliciesResponseBodyData[];
  /**
   * @remarks
   * Statistics returned based on the query conditions.
   */
  statistics?: ListCollectionPoliciesResponseBodyStatistics[];
  /**
   * @remarks
   * The total number of collection rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'currentCount',
      data: 'data',
      statistics: 'statistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      data: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyData },
      statistics: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyStatistics },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

