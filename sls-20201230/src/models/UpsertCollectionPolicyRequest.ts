// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionPolicyRequestCentralizeConfig extends $dara.Model {
  /**
   * @remarks
   * The destination logstore for centralized storage. Make sure that the region of the destination logstore is consistent with the region specified by destRegion and the destination logstore belongs to the destination project specified by destProject.
   * 
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @remarks
   * The destination project for centralized storage. Make sure that the region of the destination project is consistent with the region specified by destRegion.
   * 
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @remarks
   * The destination region for centralized storage.
   * 
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The data retention period for centralized storage. Unit: days. This parameter takes effect only when you use an existing logstore for centralized storage.
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

export class UpsertCollectionPolicyRequestDataConfig extends $dara.Model {
  /**
   * @remarks
   * The region for storing the global logs that are collected for the first time.
   * 
   * @example
   * cn-beijing
   */
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dataRegion: 'dataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpsertCollectionPolicyRequestPolicyConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. This parameter takes effect only when resourceMode is set to instanceMode. Logs are collected only from instances that use the specified IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The regions of the instances. This parameter takes effect only when resourceMode is set to attributeMode. Wildcard characters are supported. If you leave this parameter empty, region-based filtering is not performed. The system considers that all instances are matched. If you specify a value for this parameter, logs of instances that reside in the specified regions are collected. Logs are collected from an instance only if the resource tags and region of the instance match the specified conditions.
   */
  regions?: string[];
  /**
   * @remarks
   * The resource collection mode. Valid values: all, attributeMode, and instanceMode. The value all specifies that logs of all instances within your account are collected to the default logstore. The value attributeMode specifies that logs are collected based on the regions of instances and resource tags. The value instanceMode specifies that logs are collected based on instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  resourceMode?: string;
  /**
   * @remarks
   * The resource tags. This parameter takes effect only when resourceMode is set to attributeMode. If you leave this parameter empty, resource tag-based filtering is not performed. The system considers that all instances are matched. If you specify a value for this parameter, logs of instances that use the specified resource tags are collected. Logs are collected from an instance only if the resource tags and region of the instance match the specified conditions.
   * 
   * @example
   * {"tag1":"value1",“tag2":"value2"}
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

export class UpsertCollectionPolicyRequestResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The mode of the resource directory. Valid values: all and custom.
   * 
   * @example
   * all,custom
   */
  accountGroupType?: string;
  /**
   * @remarks
   * The members. If accountGroupType is set to custom, the members are returned.
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

export class UpsertCollectionPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of centralized storage.
   */
  centralizeConfig?: UpsertCollectionPolicyRequestCentralizeConfig;
  /**
   * @remarks
   * Specifies whether to enable centralized storage. Default value: false.
   * 
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @remarks
   * The code of the log type.
   * 
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @remarks
   * The data configurations. The configuration is returned only for global logs. For example, if productCode is set to sls, the configuration is returned.
   */
  dataConfig?: UpsertCollectionPolicyRequestDataConfig;
  /**
   * @remarks
   * Specifies whether to enable the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The configurations of the policy.
   * 
   * This parameter is required.
   */
  policyConfig?: UpsertCollectionPolicyRequestPolicyConfig;
  /**
   * @remarks
   * The name must meet the following requirements:
   * 
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start with a letter.
   * *   The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The configurations of the resource directory. The account must have activated the resource directory and be a management account or a delegated administrator of the resource directory.
   */
  resourceDirectory?: UpsertCollectionPolicyRequestResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: UpsertCollectionPolicyRequestCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: UpsertCollectionPolicyRequestDataConfig,
      enabled: 'boolean',
      policyConfig: UpsertCollectionPolicyRequestPolicyConfig,
      policyName: 'string',
      productCode: 'string',
      resourceDirectory: UpsertCollectionPolicyRequestResourceDirectory,
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

