// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterResponseBodyDBCluster extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp19lo45sy98x****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21417210003****
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'dbClusterId',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

