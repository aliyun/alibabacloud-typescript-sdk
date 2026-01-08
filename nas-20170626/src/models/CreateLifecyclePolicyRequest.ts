// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecyclePolicyRequestRetrieveRules extends $dara.Model {
  /**
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
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
   * @example
   * Atime
   */
  attribute?: string;
  /**
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
   * @example
   * 描述
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
   * The name of the lifecycle policy. The name must be 3 to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The management rule that is associated with the lifecycle policy.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files that are not accessed in the last 14 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_30: Files that are not accessed in the last 30 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_60: Files that are not accessed in the last 60 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_90: Files that are not accessed in the last 90 days are dumped to the IA storage medium.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of the directory that is associated with the lifecycle policy.
   * 
   * If you specify this parameter, you can associate the lifecycle policy with only one directory. The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * > We recommend that you specify the Paths.N parameter so that you can associate the lifecycle policy with multiple directories.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The absolute paths of the directories that are associated with the lifecycle policy.
   * 
   * If you specify this parameter, you can associate the lifecycle policy with multiple directories. Each path must start with a forward slash (/) and must be a path that exists in the mount target. Valid values of N: 1 to 10.
   * 
   * @example
   * "/path1", "/path2"
   */
  paths?: string[];
  retrieveRules?: CreateLifecyclePolicyRequestRetrieveRules[];
  /**
   * @remarks
   * The storage type of the data that is dumped to the IA storage medium.
   * 
   * Default value: InfrequentAccess (IA).
   * 
   * This parameter is required.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
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

