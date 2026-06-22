// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManagedScalingConstraints extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes in a node group.
   * 
   * @example
   * 2000
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go task nodes.
   * 
   * @example
   * 0
   */
  maxOnDemandCapacity?: number;
  /**
   * @remarks
   * The minimum number of nodes in a node group.
   * 
   * @example
   * 0
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

