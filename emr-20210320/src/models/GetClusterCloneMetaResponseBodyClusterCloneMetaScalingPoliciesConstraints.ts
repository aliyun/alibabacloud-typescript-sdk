// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes in the node group. Default value: 2000.
   * 
   * @example
   * 200
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go nodes in the node group.
   * 
   * @example
   * 200
   */
  maxOnDemandCapacity?: number;
  /**
   * @remarks
   * The minimum number of nodes in the node group. Default value: 0.
   * 
   * @example
   * 50
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      maxOnDemandCapacity: 'MaxOnDemandCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      maxOnDemandCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

