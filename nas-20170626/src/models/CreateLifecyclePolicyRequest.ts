// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecyclePolicyRequestRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule. Valid value:
   * 
   * *   RetrieveType: the retrieval method.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule. Valid values:
   * 
   * *   RetrieveType
   * 
   *     *   AfterVisit: Supported when LifecyclePolicyType is Auto. Represents a best-effort recall on access.
   *     *   All: Supported when LifecyclePolicyType is OnDemand. Represents retrieving all data.
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
   * Attribute of the rule.
   * 
   * Valid values:
   * 
   * *   Atime: the access time of the file.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * Threshold for the rule.
   * 
   * Valid values:
   * 
   * *   If Attribute is set to Atime, this value represents the number of days since the file was last accessed. Valid values: [1, 365].
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
   * The description of the lifecycle policy.
   * 
   * Format: The name must be 3 to 64 characters in length and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * >  Only CPFS for Lingjun supports this parameter.
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
   * The name of the lifecycle policy. The name must be 3 to 64 characters in length and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * >  Required for General-purpose NAS.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * *   Auto (default): The job is automatically triggered.
   * *   OnDemand: On-demand execution.
   * 
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The management rule associated with the lifecycle policy. Only General-purpose NAS supports this parameter.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files not accessed for 14 days.
   * *   DEFAULT_ATIME_30: Files not accessed for 30 days.
   * *   DEFAULT_ATIME_60: Files not accessed for 60 days.
   * *   DEFAULT_ATIME_90: Files not accessed for 90 days.
   * *   DEFAULT_ATIME_180: Files not accessed for 180 days. DEFAULT_ATIME_180 is supported only when the StorageType parameter is set to Archive.
   * 
   * > 
   * 
   * *   If an IA policy already exists for the directory, the new archive policy must have a longer transition period.
   * 
   * *   Only General-purpose NAS supports this parameter.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of the directory associated with the lifecycle policy. Only General-purpose NAS supports this parameter.
   * 
   * *   Single value only. The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * >  We recommend configuring the Paths.N parameter so that you can associate the policy with multiple directories at a time.
   * 
   * *   Path and Paths are mutually exclusive. You must specify one.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The absolute paths of the directories associated with the lifecycle policy.
   * 
   * @example
   * "/path1", "/path2"
   */
  paths?: string[];
  /**
   * @remarks
   * The file data retrieval rule. Only one rule can be configured.
   * 
   * >  Only CPFS for Lingjun supports this parameter.
   */
  retrieveRules?: CreateLifecyclePolicyRequestRetrieveRules[];
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * 
   * >  General-purpose NAS supports InfrequentAccess and Archive. CPFS for Lingjun only supports InfrequentAccess.
   * 
   * This parameter is required.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The data transition rule. Only one rule can be configured.
   * 
   * >  Supported only for CPFS for Lingjun file systems with LifecyclePolicyType set to Auto.
   */
  transitRules?: CreateLifecyclePolicyRequestTransitRules[];
  static names(): { [key: string]: string } {
    return {
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

