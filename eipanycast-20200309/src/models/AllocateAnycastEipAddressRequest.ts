// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateAnycastEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * Valid values: **200** to **1000**.
   * 
   * Default value: **1000**.
   * 
   * > The maximum bandwidth is not a guaranteed service and is for reference only.
   * 
   * @example
   * 200
   * 
   * **if can be null:**
   * false
   */
  bandwidth?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * docdesc
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * Set the value to **PostPaid**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * Set the value to **PayByTraffic**, which specifies the pay-by-data-transfer metering method.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * The name must be 0 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm3obzjukv53a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * Set the value to **international**, which specifies the areas outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      clientToken: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

