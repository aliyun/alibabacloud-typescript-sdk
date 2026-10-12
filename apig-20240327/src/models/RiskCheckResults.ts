// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RiskCheckResultsMetadata extends $dara.Model {
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * Ingress
   */
  clusterType?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 3
   */
  replica?: number;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 2.0.14
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      replica: 'replica',
      spec: 'spec',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      replica: 'number',
      spec: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RiskCheckResultsRiskDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the module that performed the check.
   * 
   * @example
   * BaseInfo
   */
  checkModule?: string;
  /**
   * @remarks
   * The detailed data related to the risk. The data structure varies by risk type.
   */
  data?: { [key: string]: string };
  /**
   * @remarks
   * The detailed description of the risk in JSON string format.
   * 
   * @example
   * {"desc":"The single-node instance has an architecture risk. A single point of failure can cause service unavailability. Scale out to two or more nodes."}
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the alert notification for the risk item is muted.
   * 
   * @example
   * false
   */
  isNoticeMute?: boolean;
  /**
   * @remarks
   * The unique identifier of the risk item.
   * 
   * @example
   * 30010010001
   */
  riskCode?: string;
  /**
   * @remarks
   * The level of the risk item. Valid values: LOW, MEDIUM, HIGH, and CRITICAL.
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the risk item.
   * 
   * @example
   * Single-node architecture risk
   */
  riskName?: string;
  /**
   * @remarks
   * The risk category. Valid values:
   * - SYSTEM: System risk.
   * - VERSION: Version risk.
   * - SAFE: Security risk.
   * - CAPACITY: Capacity risk.
   * 
   * @example
   * SYSTEM
   */
  riskType?: string;
  /**
   * @remarks
   * The current risk situation of the instance in JSON string format.
   * 
   * @example
   * {"desc":"The cluster has only one node and does not support high availability."}
   */
  situation?: string;
  /**
   * @remarks
   * The optimization suggestions for the risk in JSON string format, including descriptions and action links.
   * 
   * @example
   * {"desc":"Scale out to two or more nodes.","links":[{"descEn":"click to upgrade specification","type":"upgrade","desc":"Click to scale out"}]}
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      checkModule: 'checkModule',
      data: 'data',
      description: 'description',
      isNoticeMute: 'isNoticeMute',
      riskCode: 'riskCode',
      riskLevel: 'riskLevel',
      riskName: 'riskName',
      riskType: 'riskType',
      situation: 'situation',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkModule: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      isNoticeMute: 'boolean',
      riskCode: 'string',
      riskLevel: 'string',
      riskName: 'string',
      riskType: 'string',
      situation: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RiskCheckResults extends $dara.Model {
  /**
   * @remarks
   * The check timestamp.
   * 
   * @example
   * 1234567890000
   */
  checkTime?: number;
  /**
   * @remarks
   * The unique identifier of the gateway instance.
   * 
   * @example
   * gw-0364f863b1a04474911b48cd6d51d03d
   */
  gatewayId?: string;
  /**
   * @remarks
   * The basic information about the instance.
   */
  metadata?: RiskCheckResultsMetadata;
  /**
   * @remarks
   * The list of detailed risk items.
   */
  riskDetails?: RiskCheckResultsRiskDetails[];
  /**
   * @remarks
   * The overall risk level. Valid values:
   * - LOW: Low risk.
   * - MEDIUM: Medium risk.
   * - HIGH: High risk.
   * - CRITICAL: Critical risk.
   * 
   * @example
   * MEDIUM
   */
  riskLevel?: string;
  /**
   * @remarks
   * The overall risk score. Valid values: 0 to 100. A higher score indicates a lower risk.
   * 
   * @example
   * 85
   */
  score?: number;
  /**
   * @remarks
   * The snapshot time.
   * 
   * @example
   * 1234567890000
   */
  snapshotTime?: number;
  /**
   * @remarks
   * The risk detection status. Valid values:
   * - SUCCESS: The detection succeeded.
   * - FAIL: The detection failed.
   * - RUNNING: The detection is running.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The total number of detected risk items.
   * 
   * @example
   * 1
   */
  totalRisk?: number;
  static names(): { [key: string]: string } {
    return {
      checkTime: 'checkTime',
      gatewayId: 'gatewayId',
      metadata: 'metadata',
      riskDetails: 'riskDetails',
      riskLevel: 'riskLevel',
      score: 'score',
      snapshotTime: 'snapshotTime',
      status: 'status',
      totalRisk: 'totalRisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTime: 'number',
      gatewayId: 'string',
      metadata: RiskCheckResultsMetadata,
      riskDetails: { 'type': 'array', 'itemType': RiskCheckResultsRiskDetails },
      riskLevel: 'string',
      score: 'number',
      snapshotTime: 'number',
      status: 'string',
      totalRisk: 'number',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.riskDetails)) {
      $dara.Model.validateArray(this.riskDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

