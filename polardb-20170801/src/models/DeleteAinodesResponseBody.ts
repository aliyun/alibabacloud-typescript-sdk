// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAINodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pm-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2035629******
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

