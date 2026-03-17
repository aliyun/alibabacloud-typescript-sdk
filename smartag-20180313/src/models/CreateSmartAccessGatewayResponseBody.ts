// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the SAG instance.
   * 
   * @example
   * testdesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * @example
   * testname
   */
  name?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20337777****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A6B9EB0F-57DB-4843-A372-04678ABF490E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SAG instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-nylv14tghsk26c*****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

