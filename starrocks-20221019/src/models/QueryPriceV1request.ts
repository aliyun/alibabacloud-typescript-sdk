// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPriceV1RequestAgentNodeGroup extends $dara.Model {
  /**
   * @example
   * 2
   */
  cu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1RequestBackendNodeGroups extends $dara.Model {
  /**
   * @example
   * 8
   */
  cu?: string;
  /**
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1RequestFrontendNodeGroups extends $dara.Model {
  /**
   * @example
   * 8
   */
  cu?: string;
  /**
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1RequestObserverNodeGroups extends $dara.Model {
  /**
   * @example
   * 8
   */
  cu?: string;
  /**
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1Request extends $dara.Model {
  agentNodeGroup?: QueryPriceV1RequestAgentNodeGroup;
  backendNodeGroups?: QueryPriceV1RequestBackendNodeGroups[];
  /**
   * @example
   * 1
   */
  duration?: number;
  frontendNodeGroups?: QueryPriceV1RequestFrontendNodeGroups[];
  observerNodeGroups?: QueryPriceV1RequestObserverNodeGroups[];
  /**
   * @example
   * official
   */
  packageType?: string;
  /**
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * shared_data
   */
  runMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentNodeGroup: 'AgentNodeGroup',
      backendNodeGroups: 'BackendNodeGroups',
      duration: 'Duration',
      frontendNodeGroups: 'FrontendNodeGroups',
      observerNodeGroups: 'ObserverNodeGroups',
      packageType: 'PackageType',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNodeGroup: QueryPriceV1RequestAgentNodeGroup,
      backendNodeGroups: { 'type': 'array', 'itemType': QueryPriceV1RequestBackendNodeGroups },
      duration: 'number',
      frontendNodeGroups: { 'type': 'array', 'itemType': QueryPriceV1RequestFrontendNodeGroups },
      observerNodeGroups: { 'type': 'array', 'itemType': QueryPriceV1RequestObserverNodeGroups },
      packageType: 'string',
      payType: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      runMode: 'string',
    };
  }

  validate() {
    if(this.agentNodeGroup && typeof (this.agentNodeGroup as any).validate === 'function') {
      (this.agentNodeGroup as any).validate();
    }
    if(Array.isArray(this.backendNodeGroups)) {
      $dara.Model.validateArray(this.backendNodeGroups);
    }
    if(Array.isArray(this.frontendNodeGroups)) {
      $dara.Model.validateArray(this.frontendNodeGroups);
    }
    if(Array.isArray(this.observerNodeGroups)) {
      $dara.Model.validateArray(this.observerNodeGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

