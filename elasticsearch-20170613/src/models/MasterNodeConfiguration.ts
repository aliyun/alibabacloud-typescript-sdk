// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MasterNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of dedicated master nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The storage space of dedicated master nodes. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of dedicated master nodes. Valid values:
   * - cloud_ssd: standard SSD
   * - cloud_essd (default): Enterprise SSD (ESSD).
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications of dedicated master nodes. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * This parameter is required.
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
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

