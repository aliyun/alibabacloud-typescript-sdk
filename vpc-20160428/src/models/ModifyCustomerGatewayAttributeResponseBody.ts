// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomerGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the customer gateway was created.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the customer gateway.
   * 
   * @example
   * cgw-bp1pvpl9r9adju6l5****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * The description of the customer gateway.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The public IP address of the gateway device in the data center.
   * 
   * @example
   * 139.32.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the customer gateway.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8AA5CE21-2E6A-4530-BDF5-F055849476E6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the customer gateway belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
      ipAddress: 'IpAddress',
      name: 'Name',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customerGatewayId: 'string',
      description: 'string',
      ipAddress: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

