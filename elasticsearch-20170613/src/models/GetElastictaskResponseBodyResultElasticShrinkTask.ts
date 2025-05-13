// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

