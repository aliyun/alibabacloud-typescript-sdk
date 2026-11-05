// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewaySoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID for purchasing the Smart Access Gateway app instance.
   * 
   * @example
   * 203000000000000
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24675405-74DF-4C94-82C6-B749580C498E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Smart Access Gateway app instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway app.
   * 
   * @example
   * sag-gnhe6sywtare5******
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

