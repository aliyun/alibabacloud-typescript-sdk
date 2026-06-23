// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformEipSegmentToPublicIpAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the IP address pool instance.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolDescription
   */
  description?: string;
  /**
   * @remarks
   * The instance ID of the contiguous EIP group to migrate.
   * 
   * This parameter is required.
   * 
   * @example
   * eipsg-2zett8ba055tbsxme****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the IP address pool instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the contiguous EIP group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the IP address pool.
   * 
   * @example
   * rg-acfmxazb4pcdvf****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
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

