// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElastictaskResponseBodyResultElasticExpansionTask extends $dara.Model {
  /**
   * @remarks
   * The trigger cycle, specified as a Quartz Cron expression.
   * 
   * @example
   * 0 0 0 ? * MON
   */
  cronExpression?: string;
  /**
   * @remarks
   * The target number of elastic data nodes during peak hours.
   * 
   * @example
   * 2
   */
  elasticNodeCount?: number;
  /**
   * @remarks
   * The number of replicas for the target index.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  targetIndices?: string[];
  /**
   * @remarks
   * The cause. The value is fixed as crontab, which indicates scheduled triggering.
   * 
   * @example
   * crontab
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      elasticNodeCount: 'elasticNodeCount',
      replicaCount: 'replicaCount',
      targetIndices: 'targetIndices',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      elasticNodeCount: 'number',
      replicaCount: 'number',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetIndices)) {
      $dara.Model.validateArray(this.targetIndices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResultElasticShrinkTask extends $dara.Model {
  /**
   * @remarks
   * The trigger cycle, specified as a Quartz Cron expression.
   * 
   * @example
   * 4 4 4 ? * WED
   */
  cronExpression?: string;
  /**
   * @remarks
   * The target number of elastic data nodes during off-peak hours.
   * 
   * @example
   * 2
   */
  elasticNodeCount?: number;
  /**
   * @remarks
   * The number of replicas for the target index.
   * 
   * @example
   * 2
   */
  replicaCount?: number;
  targetIndices?: string[];
  /**
   * @remarks
   * The cause. Valid values: crontab, which indicates scheduled triggering.
   * 
   * @example
   * crontab
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      elasticNodeCount: 'elasticNodeCount',
      replicaCount: 'replicaCount',
      targetIndices: 'targetIndices',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      elasticNodeCount: 'number',
      replicaCount: 'number',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetIndices)) {
      $dara.Model.validateArray(this.targetIndices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The elastic node scale-out rule.
   */
  elasticExpansionTask?: ModifyElastictaskResponseBodyResultElasticExpansionTask;
  /**
   * @remarks
   * The elastic node scale-in rule.
   */
  elasticShrinkTask?: ModifyElastictaskResponseBodyResultElasticShrinkTask;
  static names(): { [key: string]: string } {
    return {
      elasticExpansionTask: 'elasticExpansionTask',
      elasticShrinkTask: 'elasticShrinkTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticExpansionTask: ModifyElastictaskResponseBodyResultElasticExpansionTask,
      elasticShrinkTask: ModifyElastictaskResponseBodyResultElasticShrinkTask,
    };
  }

  validate() {
    if(this.elasticExpansionTask && typeof (this.elasticExpansionTask as any).validate === 'function') {
      (this.elasticExpansionTask as any).validate();
    }
    if(this.elasticShrinkTask && typeof (this.elasticShrinkTask as any).validate === 'function') {
      (this.elasticShrinkTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ModifyElastictaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyElastictaskResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

