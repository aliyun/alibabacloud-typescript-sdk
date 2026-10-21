// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecyclePolicyRequestDeleteRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule.
   * 
   * Valid values:
   * - Atime: the access time of the file.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule.
   * 
   * Valid values:
   * - When Attribute is set to Atime, the value indicates the number of days a file has not been accessed. Valid values: 1 to 365.
   * 
   * @example
   * 1
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyRequestRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule. Valid values:
   * - RetrieveType: the retrieval method.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule. Valid values:
   * - RetrieveType
   *     - AfterVisit: supported when LifecyclePolicyType is set to Auto, which indicates best-effort recall on visit.
   *     - All: supported when LifecyclePolicyType is set to OnDemand, which indicates retrieving all files.
   * 
   * @example
   * All
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyRequestTransitRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule.
   * 
   * Valid values:
   * - Atime: the access time of the file.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule.
   * 
   * Valid values:
   * - When Attribute is set to Atime, the value indicates the number of days a file has not been accessed. Valid values: 0 to 365.
   * 
   * @example
   * 3
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The file data expiration and deletion rules. You can configure up to 1 rule.
   */
  deleteRules?: CreateLifecyclePolicyRequestDeleteRules[];
  /**
   * @remarks
   * The description of the lifecycle policy.
   * 
   * Format:
   * The description must be 3 to 64 characters in length, and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * > This parameter is supported only by CPFS for Lingjun.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The lifecycle management policy name. The name must be 3 to 64 characters in length, and must start with an uppercase letter or a lowercase letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * > This parameter is required for General-purpose NAS, but not required for CPFS for Lingjun.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The policy type.
   * - Auto (default): automatic execution.
   * - OnDemand: on-demand execution.
   * 
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The management rule associated with the lifecycle management policy. This parameter is supported only by General-purpose NAS.
   * 
   * Valid values:
   * 
   * - DEFAULT_ATIME_14: files that have not been accessed for 14 days.
   * - DEFAULT_ATIME_30: files that have not been accessed for 30 days.
   * - DEFAULT_ATIME_60: files that have not been accessed for 60 days.
   * - DEFAULT_ATIME_90: files that have not been accessed for 90 days.
   * - DEFAULT_ATIME_180: files that have not been accessed for 180 days. DEFAULT_ATIME_180 is supported only when StorageType is set to Archive.
   * >- If an IA storage class policy is already configured for the directory, the time threshold for the archive storage class policy must be longer than that of the IA storage class policy when you configure the archive storage class policy.
   * > - This parameter is supported only by General-purpose NAS.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of the directory associated with the lifecycle management policy. This parameter is supported only by General-purpose NAS.
   * 
   * - General-purpose NAS supports associating only a single directory. The path must start with a forward slash (/) and must be an existing path in the mount target.
   * 
   * > This parameter is supported only by General-purpose NAS. For General-purpose NAS, configure Paths.N to associate multiple directories at the same time.
   * >- You must specify either Path or Paths, but not both.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The absolute paths of the directories associated with the lifecycle management policy.
   * 
   * @example
   * "/path1", "/path2"
   */
  paths?: string[];
  /**
   * @remarks
   * The file data retrieval rules. You can configure up to 1 rule.
   * > This parameter is supported only by CPFS for Lingjun file systems.
   * 
   * > When LifecyclePolicyType is set to OnDemand, you must specify at least one of the active transition rules (TransitRules) and retrieval rules (RetrieveRules).
   */
  retrieveRules?: CreateLifecyclePolicyRequestRetrieveRules[];
  /**
   * @remarks
   * The tiered storage type.
   * - InfrequentAccess: IA storage class.
   * - Archive: archive storage class.
   * 
   * > General-purpose NAS supports both InfrequentAccess and Archive. CPFS for Lingjun supports only InfrequentAccess.
   * 
   * This parameter is required.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The file data transit rules. You can configure up to 1 rule.
   * 
   * > This parameter is supported only when LifecyclePolicyType is set to Auto for CPFS for Lingjun file systems.
   */
  transitRules?: CreateLifecyclePolicyRequestTransitRules[];
  static names(): { [key: string]: string } {
    return {
      deleteRules: 'DeleteRules',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecyclePolicyType: 'LifecyclePolicyType',
      lifecycleRuleName: 'LifecycleRuleName',
      path: 'Path',
      paths: 'Paths',
      retrieveRules: 'RetrieveRules',
      storageType: 'StorageType',
      transitRules: 'TransitRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteRules: { 'type': 'array', 'itemType': CreateLifecyclePolicyRequestDeleteRules },
      description: 'string',
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      lifecyclePolicyType: 'string',
      lifecycleRuleName: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrieveRules: { 'type': 'array', 'itemType': CreateLifecyclePolicyRequestRetrieveRules },
      storageType: 'string',
      transitRules: { 'type': 'array', 'itemType': CreateLifecyclePolicyRequestTransitRules },
    };
  }

  validate() {
    if(Array.isArray(this.deleteRules)) {
      $dara.Model.validateArray(this.deleteRules);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.retrieveRules)) {
      $dara.Model.validateArray(this.retrieveRules);
    }
    if(Array.isArray(this.transitRules)) {
      $dara.Model.validateArray(this.transitRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

