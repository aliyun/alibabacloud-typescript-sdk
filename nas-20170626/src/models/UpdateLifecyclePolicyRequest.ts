// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLifecyclePolicyRequestRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The rule attribute. Valid value:
   * 
   * - `RetrieveType`: The retrieval method.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The retrieval method. Valid values:
   * 
   * - If `Attribute` is set to `RetrieveType`:
   * 
   *   - `AfterVisit`: Retrieves data on a best-effort basis after a file is accessed. This value is valid only when `LifecyclePolicyType` is `Auto`.
   * 
   *   - `All`: Retrieves all data. This value is valid only when `LifecyclePolicyType` is `OnDemand`.
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

export class UpdateLifecyclePolicyRequestTransitRules extends $dara.Model {
  /**
   * @remarks
   * The rule attribute.
   * 
   * Valid value:
   * 
   * - `Atime`: The last access time of a file.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * The rule threshold.
   * 
   * Valid value:
   * 
   * - If `Attribute` is set to `Atime`, this parameter specifies the number of days since a file was last accessed. The value must be between 1 and 365.
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

export class UpdateLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the lifecycle policy.
   * 
   * The description must be 3 to 64 characters long and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * > This parameter is supported only for CPFS for AI file systems.
   * 
   * @example
   * Lifecycle policy description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64y*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the lifecycle policy.
   * 
   * > This parameter is required for CPFS for AI file systems.
   * 
   * This parameter is required.
   * 
   * @example
   * lsp-bp1234567890ab****
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The absolute paths of the directories to which the lifecycle policy applies.
   */
  paths?: string[];
  /**
   * @remarks
   * The retrieval rule for files. You can specify only one retrieval rule.
   * 
   * > This parameter is supported only for CPFS for AI file systems.
   */
  retrieveRules?: UpdateLifecyclePolicyRequestRetrieveRules[];
  /**
   * @remarks
   * The storage tier.
   * 
   * - `InfrequentAccess`: The Infrequent Access storage tier. This is the default value.
   * 
   * - `Archive`: The Archive storage tier.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The transition rule for files. You can specify only one transition rule.
   * 
   * > This parameter is supported only for CPFS for AI file systems when `LifecyclePolicyType` is set to `Auto`.
   */
  transitRules?: UpdateLifecyclePolicyRequestTransitRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
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
      lifecyclePolicyId: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrieveRules: { 'type': 'array', 'itemType': UpdateLifecyclePolicyRequestRetrieveRules },
      storageType: 'string',
      transitRules: { 'type': 'array', 'itemType': UpdateLifecyclePolicyRequestTransitRules },
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

