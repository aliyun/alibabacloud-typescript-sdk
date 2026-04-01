// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLifecyclePolicyRequestRetrieveRules extends $dara.Model {
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

export class UpdateLifecyclePolicyRequestTransitRules extends $dara.Model {
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

export class UpdateLifecyclePolicyRequest extends $dara.Model {
  /**
   * @example
   * Lifecycle policy description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64y*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lsp-bp1234567890ab****
   */
  lifecyclePolicyId?: string;
  paths?: string[];
  retrieveRules?: UpdateLifecyclePolicyRequestRetrieveRules[];
  /**
   * @example
   * InfrequentAccess
   */
  storageType?: string;
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

