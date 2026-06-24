// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KibanaNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of Kibana nodes.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The storage space of the Kibana node. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The Kibana node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
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
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
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

