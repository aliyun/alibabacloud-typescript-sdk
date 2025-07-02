// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoScalingPolicyResponseBodyScalingPolicyConstraints extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes in the node group. Default value: 2000.
   * 
   * @example
   * 2000
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of nodes in the node group. Default value: 0.
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
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

