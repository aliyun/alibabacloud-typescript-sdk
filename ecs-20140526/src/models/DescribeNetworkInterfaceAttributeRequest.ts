// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeRequestTag extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
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

export class DescribeNetworkInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The property of the Elastic Network Interface (ENI). Valid values:
   * 
   * attachment: queries the attachment information of member network interface controllers (NICs) for a trunk network interface controller (NIC). This parameter is in invitational preview and is not available for use.
   * 
   * connectionTrackingConfiguration: queries the network connectivity tracking configuration.
   * 
   * Default value:
   * 
   * @example
   * attachment
   */
  attribute?: string;
  /**
   * @remarks
   * The ID of the network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp67acfmxazb4p****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network interface controller (NIC). You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * > This parameter is not available for use.
   */
  tag?: DescribeNetworkInterfaceAttributeRequestTag[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeRequestTag },
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

