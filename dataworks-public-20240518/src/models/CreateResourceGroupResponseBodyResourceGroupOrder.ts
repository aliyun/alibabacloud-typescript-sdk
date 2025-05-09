// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupResponseBodyResourceGroupOrder extends $dara.Model {
  /**
   * @remarks
   * The ID of the serverless resource group.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @remarks
   * The ID of the order that is used to create the serverless resource group.
   * 
   * @example
   * 2391982058XXXXX
   */
  orderId?: number;
  /**
   * @remarks
   * The instance ID of the order that is used to create the serverless resource group.
   * 
   * @example
   * c442b330-3b10-4584-959e-736e4edXXXXX
   */
  orderInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      orderId: 'OrderId',
      orderInstanceId: 'OrderInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      orderId: 'number',
      orderInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

