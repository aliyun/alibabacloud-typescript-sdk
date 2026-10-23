// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The cloud disk size.
   * 
   * @example
   * 500
   */
  disk?: number;
  /**
   * @remarks
   * The cloud disk type.
   * 
   * @example
   * cloud_essd
   */
  diskType?: string;
  /**
   * @remarks
   * The cloud disk performance level (PL).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * elasticsearch.turbo1.ci.xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      performanceLevel: 'performanceLevel',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      performanceLevel: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

