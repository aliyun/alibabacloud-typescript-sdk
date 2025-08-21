// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElastictaskResponseBodyResultElasticExpansionTask extends $dara.Model {
  /**
   * @example
   * 0 0 0 ? * MON
   */
  cronExpression?: string;
  /**
   * @example
   * 2
   */
  elasticNodeCount?: number;
  /**
   * @example
   * 2
   */
  replicaCount?: number;
  targetIndices?: string[];
  /**
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

export class GetElastictaskResponseBodyResultElasticShrinkTask extends $dara.Model {
  /**
   * @example
   * 4 4 4 ? * WED
   */
  cronExpression?: string;
  /**
   * @example
   * 2
   */
  elasticNodeCount?: number;
  /**
   * @example
   * 2
   */
  replicaCount?: number;
  targetIndices?: string[];
  /**
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

export class GetElastictaskResponseBodyResult extends $dara.Model {
  elasticExpansionTask?: GetElastictaskResponseBodyResultElasticExpansionTask;
  elasticShrinkTask?: GetElastictaskResponseBodyResultElasticShrinkTask;
  static names(): { [key: string]: string } {
    return {
      elasticExpansionTask: 'elasticExpansionTask',
      elasticShrinkTask: 'elasticShrinkTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticExpansionTask: GetElastictaskResponseBodyResultElasticExpansionTask,
      elasticShrinkTask: GetElastictaskResponseBodyResultElasticShrinkTask,
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

export class GetElastictaskResponseBody extends $dara.Model {
  /**
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  result?: GetElastictaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetElastictaskResponseBodyResult,
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

