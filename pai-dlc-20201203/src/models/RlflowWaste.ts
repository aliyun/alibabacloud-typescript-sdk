// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowWaste extends $dara.Model {
  /**
   * @remarks
   * The cumulative duration of trained trajectories, in seconds.
   * 
   * @example
   * 183
   */
  usefulSec?: number;
  static names(): { [key: string]: string } {
    return {
      usefulSec: 'UsefulSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usefulSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

