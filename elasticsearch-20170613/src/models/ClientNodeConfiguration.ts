// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of client nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The storage size of the client node. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the client node. Only cloud_efficiency (ultra cloud disk) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications of the client node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
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

