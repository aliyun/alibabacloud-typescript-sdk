// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyResultClientNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable disk encryption for the node. Valid values:
   * 
   * *   true: enables instant image cache.
   * *   false: disables reuse of image cache layers.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * *   cloud_ssd: SSD.
   * *   cloud_essd: ESSD.
   * *   cloud_efficiency: ultra disk
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

