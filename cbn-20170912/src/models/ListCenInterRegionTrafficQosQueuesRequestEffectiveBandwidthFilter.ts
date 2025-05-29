// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter extends $dara.Model {
  /**
   * @remarks
   * The actual bandwidth is equal to or larger than the specified value.
   * 
   * @example
   * 50
   */
  gte?: number;
  /**
   * @remarks
   * The actual bandwidth is equal to or smaller than the specified value.
   * 
   * @example
   * 20
   */
  lte?: number;
  static names(): { [key: string]: string } {
    return {
      gte: 'Gte',
      lte: 'Lte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gte: 'number',
      lte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

