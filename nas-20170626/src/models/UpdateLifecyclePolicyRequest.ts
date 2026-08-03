// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLifecyclePolicyRequestDeleteRules extends $dara.Model {
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
   * - If Attribute is set to Atime, the value specifies the number of days since the file was last accessed. Valid values: 1 to 365.
   * 
   * @example
   * 4
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

export class UpdateLifecyclePolicyRequestRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule.
   * 
   * Valid values:
   * - RetrieveType: the retrieval method.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule.
   * 
   * Valid values:
   * - RetrieveType
   *     - AfterVisit: supported when LifecyclePolicyType is set to Auto. Indicates best-effort recall on visit.
   *     - All: supported when LifecyclePolicyType is set to OnDemand. Indicates retrieval of all data.
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
   * - If Attribute is set to Atime, the value specifies the number of days since the file was last accessed. Valid values: 1 to 365.
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
   * The file data expiration and deletion rules.
   */
  deleteRules?: UpdateLifecyclePolicyRequestDeleteRules[];
  /**
   * @remarks
   * The description of the lifecycle policy.
   * 
   * Format:
   * The description must be 3 to 64 characters in length, start with a letter, and can contain letters, digits, underscores (_), or hyphens (-).
   * > Only CPFS for Lingjun is supported.
   * 
   * @example
   * Lifecycle policy description
   */
  description?: string;
  /**
   * @remarks
   * The file system ID. The ID starts with bmcpfs-, such as bmcpfs-290w65p03ok64ya****.
   * > This parameter is supported only when LifecyclePolicyType is set to OnDemand in the lifecycle management policy of a CPFS for Lingjun file system.
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
   * > This parameter is required for CPFS for Lingjun file systems.
   * 
   * This parameter is required.
   * 
   * @example
   * lsp-bp1234567890ab****
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The absolute paths of the directories associated with the lifecycle management policy.
   */
  paths?: string[];
  /**
   * @remarks
   * The file data retrieval rules. You can configure up to one rule.
   * > Only CPFS for Lingjun file systems are supported.
   */
  retrieveRules?: UpdateLifecyclePolicyRequestRetrieveRules[];
  /**
   * @remarks
   * The tiered storage type.
   * 
   * Valid values:
   * - InfrequentAccess: IA storage class. This is the default value.
   * - Archive: Archive storage.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The file data transit rules. You can configure up to one rule.
   * 
   * > This parameter is supported only when LifecyclePolicyType is set to Auto for a CPFS for Lingjun file system.
   */
  transitRules?: UpdateLifecyclePolicyRequestTransitRules[];
  static names(): { [key: string]: string } {
    return {
      deleteRules: 'DeleteRules',
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
      deleteRules: { 'type': 'array', 'itemType': UpdateLifecyclePolicyRequestDeleteRules },
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

