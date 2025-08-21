// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElastictaskResponseBodyResultElasticExpansionTask extends $dara.Model {
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

export class ModifyElastictaskResponseBodyResultElasticShrinkTask extends $dara.Model {
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

export class ModifyElastictaskResponseBodyResult extends $dara.Model {
  elasticExpansionTask?: ModifyElastictaskResponseBodyResultElasticExpansionTask;
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
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
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

