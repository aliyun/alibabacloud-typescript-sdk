// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalAccelerationInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Alibaba Cloud Global Accelerator (GA) instance. Unit: Mbit/s. Valid value: **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  bandwidth?: string;
  /**
   * @remarks
   * The bandwidth type of the instance. Valid values:
   * 
   * - **Sharing**: shared bandwidth.
   * 
   * - **Exclusive**: dedicated bandwidth.
   * 
   * @example
   * Exclusive
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. 
   * 
   * The client generates the value of this parameter. Ensure that the value is unique among different requests. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Alibaba Cloud Global Accelerator (GA) instance. 
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character, but cannot start with `http://` or `https://`.
   * 
   * @example
   * My GA
   */
  description?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud Global Accelerator (GA) instance.  
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-), but cannot start with `http://` or `https://`.
   * 
   * @example
   * GA-1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Alibaba Cloud Global Accelerator (GA) instance resides. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The area where the accelerated service resides. Valid values:
   * 
   * - **china-mainland**: the Chinese mainland.
   * 
   * - **north-america**: North America.
   *    
   * - **asia-pacific**: Asia-Pacific.
   *    
   * - **europe**: Europe.
   * 
   * This parameter is required.
   * 
   * @example
   * china-mainland
   */
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      bandwidthType: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

