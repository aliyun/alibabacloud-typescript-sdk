// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionPoliciesResponseBodyDataCentralizeConfig extends $dara.Model {
  /**
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The data retention period for centralized storage. Unit: days.
   * 
   * @example
   * your-sls-logstore-ttl
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
   * @example
   * ""
   */
  dataProject?: string;
  /**
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
  instanceIds?: string[];
  regions?: string[];
  /**
   * @example
   * all
   */
  resourceMode?: string;
  /**
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
   * @example
   * all,custom
   */
  accountGroupType?: string;
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
   * The configuration for centralized storage.
   */
  centralizeConfig?: ListCollectionPoliciesResponseBodyDataCentralizeConfig;
  /**
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  dataConfig?: ListCollectionPoliciesResponseBodyDataDataConfig;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * false
   */
  internalPolicy?: boolean;
  policyConfig?: ListCollectionPoliciesResponseBodyDataPolicyConfig;
  /**
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @example
   * 148***********50
   */
  policyUid?: string;
  /**
   * @example
   * oss
   */
  productCode?: string;
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
   * @example
   * policy_name1_from148
   */
  policyName?: string;
  /**
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
  policySourceList?: ListCollectionPoliciesResponseBodyStatisticsPolicySourceList[];
  /**
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
   * @example
   * 1
   */
  currentCount?: number;
  /**
   * @remarks
   * The data of the policies that are matched against the query conditions. The data is returned based on paginated results.
   */
  data?: ListCollectionPoliciesResponseBodyData[];
  statistics?: ListCollectionPoliciesResponseBodyStatistics[];
  /**
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

