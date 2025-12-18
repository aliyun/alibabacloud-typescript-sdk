// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RiskCheckResultsMetadata extends $dara.Model {
  /**
   * @example
   * Ingress
   */
  clusterType?: string;
  /**
   * @example
   * 3
   */
  replica?: number;
  /**
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
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
   * 执行检测的模块名称
   * 
   * @example
   * BaseInfo
   */
  checkModule?: string;
  /**
   * @remarks
   * 风险相关的详细数据，不同风险类型数据结构不同
   */
  data?: { [key: string]: string };
  /**
   * @remarks
   * 风险的详细描述，JSON字符串格式
   * 
   * @example
   * {"desc":"单节点实例存在架构风险，单点故障会导致服务不可用。建议扩容到2节点及以上。"}
   */
  description?: string;
  /**
   * @remarks
   * 该风险项的告警通知是否已被屏蔽
   * 
   * @example
   * false
   */
  isNoticeMute?: boolean;
  /**
   * @remarks
   * 风险项的唯一标识码
   * 
   * @example
   * 30010010001
   */
  riskCode?: string;
  /**
   * @remarks
   * 该风险项的等级，可选值：LOW、MEDIUM、HIGH、CRITICAL
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * 风险项的名称
   * 
   * @example
   * 单节点架构风险
   */
  riskName?: string;
  /**
   * @remarks
   * 风险分类，可选值：SYSTEM（系统风险）、VERSION（版本风险）、SAFE（安全风险）、CAPACITY（容量风险）
   * 
   * @example
   * SYSTEM
   */
  riskType?: string;
  /**
   * @remarks
   * 当前实例的风险现状，JSON字符串格式
   * 
   * @example
   * {"desc":"集群节点数为1，不具备高可用能力"}
   */
  situation?: string;
  /**
   * @remarks
   * 针对该风险的优化建议，JSON字符串格式，包含描述和操作链接
   * 
   * @example
   * {"desc":"扩容到2节点及以上","links":[{"descEn":"click to upgrade specification","type":"upgrade","desc":"点击扩容"}]}
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
  checkTime?: number;
  /**
   * @remarks
   * 网关实例的唯一标识符
   * 
   * @example
   * gw-0364f863b1a04474911b48cd6d51d03d
   */
  gatewayId?: string;
  /**
   * @remarks
   * 实例的基本信息
   */
  metadata?: RiskCheckResultsMetadata;
  /**
   * @remarks
   * 详细的风险项信息列表
   */
  riskDetails?: RiskCheckResultsRiskDetails[];
  /**
   * @remarks
   * 整体风险等级，可选值：LOW（低风险）、MEDIUM（中风险）、HIGH（高风险）、CRITICAL（严重风险）
   * 
   * @example
   * MEDIUM
   */
  riskLevel?: string;
  /**
   * @remarks
   * 风险综合评分，取值范围0-100分，分数越高表示风险越低
   * 
   * @example
   * 85
   */
  score?: number;
  snapshotTime?: number;
  /**
   * @remarks
   * 风险检测状态，可选值：SUCCESS（成功）、FAIL（失败）、RUNNING（运行中）
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * 检测到的风险项总数量
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

