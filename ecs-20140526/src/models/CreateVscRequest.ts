// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of instances, cloud disks, and primary ENIs that are created by using the template version. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command. Valid values of N: 1 to 20. The tag value can be an empty string.
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

export class CreateVscRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Virtual Storage Channel.
   * 
   * @example
   * Description of the device.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values: true: sends a check request without querying resource status. The check items include whether the AccessKey pair is valid, whether the Resource Access Management (RAM) user has the required authorization, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check passes, the DryRunOperation error code is returned. false: sends a Normal request. If the request passes the check, a 2XX HTTP status code is returned and the resource status is queried. Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp**c262
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the resource belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateVscRequestTag[];
  /**
   * @remarks
   * The name of the Virtual Storage Channel.
   * 
   * @example
   * Device1
   */
  vscName?: string;
  /**
   * @remarks
   * The VSC type. Valid values: Primary and Standard. Default value: Primary.
   * 
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateVscRequestTag },
      vscName: 'string',
      vscType: 'string',
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

