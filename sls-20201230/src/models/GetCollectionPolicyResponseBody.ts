// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig extends $dara.Model {
  /**
   * @remarks
   * The destination Logstore for centralized shipping.
   * 
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @remarks
   * The destination project for centralized shipping.
   * 
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @remarks
   * The destination region for centralized shipping.
   * 
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The retention period of the destination Logstore. Unit: days.
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

export class GetCollectionPolicyResponseBodyCollectionPolicyDataConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is valid only for global log types, such as when \\`productCode\\` is \\`sls\\`. If this parameter is left empty, logs are collected to the default project of the account in the specified \\`dataRegion\\`.
   * 
   * @example
   * ""
   */
  dataProject?: string;
  /**
   * @remarks
   * This parameter is supported only for global log types, such as when \\`productCode\\` is \\`sls\\`. This parameter specifies the region to which global logs are collected during the initial configuration.
   * 
   * @example
   * cn-beijing
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

export class GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig extends $dara.Model {
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The regions where the instances reside. Wildcard characters are supported.
   */
  regions?: string[];
  /**
   * @remarks
   * The collection pattern for resources.
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

export class GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The mode for selecting accounts in the resource directory. Valid values: \\`all\\` and \\`custom\\`.
   * 
   * @example
   * all,custom
   */
  accountGroupType?: string;
  /**
   * @remarks
   * The member accounts. This parameter is returned only when \\`accountGroupType\\` is set to \\`custom\\`.
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

export class GetCollectionPolicyResponseBodyCollectionPolicy extends $dara.Model {
  /**
   * @remarks
   * The configuration for centralized shipping.
   */
  centralizeConfig?: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig;
  /**
   * @remarks
   * Indicates whether centralized storage is enabled.
   * 
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @remarks
   * The code for the log type.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @remarks
   * The configuration that is supported only for global log types, such as when \\`productCode\\` is \\`sls\\`. Otherwise, this parameter is empty.
   */
  dataConfig?: GetCollectionPolicyResponseBodyCollectionPolicyDataConfig;
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the rule is a built-in rule. Built-in rules cannot be modified or deleted.
   * 
   * @example
   * false
   */
  internalPolicy?: boolean;
  /**
   * @remarks
   * The configuration of the collection rule.
   */
  policyConfig?: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the rule belongs. If the rule is created by a resource directory administrator or a delegated administrator, this parameter specifies the ID of the administrator\\"s Alibaba Cloud account.
   * 
   * @example
   * 148***********50
   */
  policyUid?: string;
  /**
   * @remarks
   * The code of the product.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The configuration of the resource directory. This parameter is empty if no configuration is specified.
   */
  resourceDirectory?: GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory;
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
      centralizeConfig: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: GetCollectionPolicyResponseBodyCollectionPolicyDataConfig,
      enabled: 'boolean',
      internalPolicy: 'boolean',
      policyConfig: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig,
      policyName: 'string',
      policyUid: 'string',
      productCode: 'string',
      resourceDirectory: GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory,
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

export class GetCollectionPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  collectionPolicy?: GetCollectionPolicyResponseBodyCollectionPolicy;
  static names(): { [key: string]: string } {
    return {
      collectionPolicy: 'collectionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionPolicy: GetCollectionPolicyResponseBodyCollectionPolicy,
    };
  }

  validate() {
    if(this.collectionPolicy && typeof (this.collectionPolicy as any).validate === 'function') {
      (this.collectionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

