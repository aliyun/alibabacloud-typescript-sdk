// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerRequestRandomSteering extends $dara.Model {
  /**
   * @remarks
   * The default round-robin weight, used for all pools that do not have a specific weight set. Value range: integers between 0-100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * Weight configuration for each backend server pool, where the key is the pool ID and the value is the weight coefficient. The weight coefficient represents the proportion of relative traffic distribution.
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

