// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupResponseBodyResourceGroupOrder extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the general-purpose resource group.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @remarks
   * The ID of the resource group creation order.
   * 
   * @example
   * 2391982058XXXXX
   */
  orderId?: number;
  /**
   * @remarks
   * The instance ID of the resource group creation order.
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

export class CreateResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Information about the resource group creation order.
   */
  resourceGroupOrder?: CreateResourceGroupResponseBodyResourceGroupOrder;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupOrder: 'ResourceGroupOrder',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupOrder: CreateResourceGroupResponseBodyResourceGroupOrder,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resourceGroupOrder && typeof (this.resourceGroupOrder as any).validate === 'function') {
      (this.resourceGroupOrder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

