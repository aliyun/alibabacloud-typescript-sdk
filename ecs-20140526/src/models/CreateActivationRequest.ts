// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the managed instance activation code. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with the tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count with all the specified tags attached cannot exceed 1000. If the resource count exceeds 1000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the managed instance activation code. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActivationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the activation code. The value can be 1 to 100 characters in length.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of times that the activation code can be used to register managed instances. Valid values: 1 to 1000.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  instanceCount?: number;
  /**
   * @remarks
   * The default instance name prefix. The value must be 2 to 50 characters in length and must start with a letter. It cannot start with a special character or digit. It can contain only periods (.), underscores (_), hyphens (-), and colons (:). It cannot start with `http://` or `https://`.
   * 
   * Instances registered with the activation code created by this operation use this value as the prefix to generate sequential instance names. You can also specify a new instance name when you register a managed instance to override this default value.
   * 
   * When you register a managed instance, if you specify a value for InstanceName, a name in the format of `<InstanceName>-001` is generated. The number of digits in `001` depends on the number of digits in the `InstanceCount` value. If you do not specify a value for InstanceName, the hostname of the host is used as the instance name.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP addresses of hosts that are allowed to use the activation code. The value can be an IPv4 address, an IPv6 address, or a CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipAddressRange?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Currently supported regions include China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), Hong Kong (China), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query region IDs and other information.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the activation code belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateActivationRequestTag[];
  /**
   * @remarks
   * The validity period of the activation code. After the validity period expires, the activation code cannot be used to register new instances. Unit: hours. Valid values: 1 to 4.
   * 
   * Default value: 4.
   * 
   * @example
   * 4
   */
  timeToLiveInHours?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceCount: 'InstanceCount',
      instanceName: 'InstanceName',
      ipAddressRange: 'IpAddressRange',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      timeToLiveInHours: 'TimeToLiveInHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceCount: 'number',
      instanceName: 'string',
      ipAddressRange: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateActivationRequestTag },
      timeToLiveInHours: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

