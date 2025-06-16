// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestRandomSteering extends $dara.Model {
  /**
   * @remarks
   * Default weight for all pools that do not have individual weights specified. The value range is an integer between 0 and 100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * Weight configuration for each backend server pool, with the key being the pool ID and the value being the weight coefficient. The weight coefficient represents the proportion of relative traffic distribution.
   */
  poolWeights?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      defaultWeight: 'DefaultWeight',
      poolWeights: 'PoolWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultWeight: 'number',
      poolWeights: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.poolWeights) {
      $dara.Model.validateMap(this.poolWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

