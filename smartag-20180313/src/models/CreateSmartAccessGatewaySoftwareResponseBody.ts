// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewaySoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order that you placed to purchase the SAG app instance.
   * 
   * @example
   * 203000000000000
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24675405-74DF-4C94-82C6-B749580C498E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SAG app instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the SAG app instance.
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

