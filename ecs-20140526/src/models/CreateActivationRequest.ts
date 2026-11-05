// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the managed instance activation code (dynamic code). Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count returned cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that are attached to all the specified tags cannot exceed 1,000. If the resource count exceeds 1,000, you must invoke the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the managed instance activation code. Valid values of N: 1 to 20. The tag value can be an empty string.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the activation code. The description must be 1 to 100 characters in length.
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
   * The default prefix of the instance name. The prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with a special character or a digit. It can contain only periods (.), underscores (_), hyphens (-), and colons (:). It cannot start with `http://` or `https://`.
   * 
   * Instances registered by using the activation code created by this operation use this name as a prefix to generate sequential instance names. You can also specify a new instance name to override this default value when you register a managed instance.
   * 
   * When you register a managed instance, if you specify the InstanceName parameter, an instance name in the <InstanceName>-001 format is generated. The number of digits in the serial number 001 depends on the number of digits in the value of the InstanceCount parameter. If you do not specify the InstanceName parameter, the hostname of the host is used as the instance name.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP addresses of the hosts that are allowed to use the activation code. Set the value to an IPv4 address, an IPv6 address, or a CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipAddressRange?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), Hong Kong (China), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The list of tags.
   */
  tag?: CreateActivationRequestTag[];
  /**
   * @remarks
   * The validity period of the activation code. After the activation code expires, it cannot be used to register new instances. Unit: hours. Valid values: 1 to 4.
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

