// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WarmNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of cold data nodes.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The storage space size of cold data nodes, in GB.
   * 
   * @example
   * 500
   */
  disk?: number;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption for cold data nodes. Valid values:
   * 
   * - true: enabled.
   * - false: not enabled.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage type of cold data nodes. Only cloud_efficiency (ultra cloud disk) is supported.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. This parameter is required when the disk type of cold data nodes is a standard SSD. Valid values: PL1, PL2, and PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The node specifications of cold data nodes. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
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
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      performanceLevel: 'performanceLevel',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
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

