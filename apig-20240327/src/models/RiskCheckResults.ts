// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RiskCheckResultsMetadata extends $dara.Model {
  /**
   * @remarks
   * The cluster type
   * 
   * @example
   * Ingress
   */
  clusterType?: string;
  /**
   * @remarks
   * The replica count
   * 
   * @example
   * 3
   */
  replica?: number;
  /**
   * @remarks
   * The specification
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * The version
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
   * The check module
   * 
   * @example
   * BaseInfo
   */
  checkModule?: string;
  /**
   * @remarks
   * The risk detailed data
   */
  data?: { [key: string]: string };
  /**
   * @remarks
   * The risk description
   * 
   * @example
   * The version is outdated
   */
  description?: string;
  /**
   * @remarks
   * Whether to mute notifications
   * 
   * @example
   * false
   */
  isNoticeMute?: boolean;
  /**
   * @remarks
   * The risk code
   * 
   * @example
   * 30010010001
   */
  riskCode?: string;
  /**
   * @remarks
   * The risk level
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk title
   * 
   * @example
   * Version Risk
   */
  riskName?: string;
  /**
   * @remarks
   * The risk type
   * 
   * @example
   * SYSTEM
   */
  riskType?: string;
  /**
   * @remarks
   * The risk situation
   * 
   * @example
   * Current version is 2 releases behind
   */
  situation?: string;
  /**
   * @remarks
   * The fix suggestion
   * 
   * @example
   * Upgrade to the latest version
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
   * The check time
   * 
   * @example
   * 1234567890000
   */
  checkTime?: number;
  /**
   * @remarks
   * The gateway ID
   * 
   * @example
   * gw-0364f863b1a04474911b48cd6d51d03d
   */
  gatewayId?: string;
  /**
   * @remarks
   * The instance metadata
   */
  metadata?: RiskCheckResultsMetadata;
  /**
   * @remarks
   * The risk details list
   */
  riskDetails?: RiskCheckResultsRiskDetails[];
  /**
   * @remarks
   * The risk level
   * 
   * @example
   * MEDIUM
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk score
   * 
   * @example
   * 85
   */
  score?: number;
  /**
   * @remarks
   * The snapshot time
   * 
   * @example
   * 1234567890000
   */
  snapshotTime?: number;
  /**
   * @remarks
   * The execution status
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The total number of risks
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

