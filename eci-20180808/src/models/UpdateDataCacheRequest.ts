// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDataCacheRequestDataSource } from "./UpdateDataCacheRequestDataSource";
import { UpdateDataCacheRequestEipCreateParam } from "./UpdateDataCacheRequestEipCreateParam";
import { UpdateDataCacheRequestTag } from "./UpdateDataCacheRequestTag";


export class UpdateDataCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket in which the data cache is stored. Default value: default.
   * 
   * @example
   * default
   */
  bucket?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 2f22dc16-cad0-4d3f-87e5-91e604756547
   */
  clientToken?: string;
  /**
   * @remarks
   * The data cache ID.
   * 
   * @example
   * edc-bp1a7n7uawwwol******
   */
  dataCacheId?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: UpdateDataCacheRequestDataSource;
  /**
   * @remarks
   * The elastic IP address (EIP) to be created and associated. If no NAT gateway is configured for the virtual private cloud (VPC), you can associate an EIP to pull data from the Internet.
   */
  eipCreateParam?: UpdateDataCacheRequestEipCreateParam;
  /**
   * @remarks
   * The ID of the elastic IP address (EIP). If no NAT gateway is configured for the virtual private cloud (VPC), you can bind an EIP to the elastic container instance to pull data from the Internet.
   * 
   * @example
   * eip-2zedsm5mfl3uhdj2d****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The data cache name.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzw2jz2z****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period for the data cache. The data cache is deleted after the retention period expires. By default, the data cache does not expire.
   * 
   * @example
   * 7
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2ze81zoc3yl7a3we****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The data cache size.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The tags that are added to the data cache.
   */
  tag?: UpdateDataCacheRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze23nqzig8inprou****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataCacheId: 'DataCacheId',
      dataSource: 'DataSource',
      eipCreateParam: 'EipCreateParam',
      eipInstanceId: 'EipInstanceId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      size: 'Size',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataCacheId: 'string',
      dataSource: UpdateDataCacheRequestDataSource,
      eipCreateParam: UpdateDataCacheRequestEipCreateParam,
      eipInstanceId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': UpdateDataCacheRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.eipCreateParam && typeof (this.eipCreateParam as any).validate === 'function') {
      (this.eipCreateParam as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

