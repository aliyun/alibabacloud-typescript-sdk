// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataCacheRequestDataSource } from "./CreateDataCacheRequestDataSource";
import { CreateDataCacheRequestEipCreateParam } from "./CreateDataCacheRequestEipCreateParam";
import { CreateDataCacheRequestTag } from "./CreateDataCacheRequestTag";


export class CreateDataCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket in which the data is stored. By default, the default bucket is used. You can use a custom bucket for business grouping and to prevent path conflicts.
   * 
   * >  eci-system is the reserved bucket of the ECI and cannot be used.
   * 
   * @example
   * default
   */
  bucket?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-****-12d3-****-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The data source.
   */
  dataSource?: CreateDataCacheRequestDataSource;
  /**
   * @remarks
   * The elastic IP address (EIP) to be created and associated. If no NAT gateway is configured for the virtual private cloud (VPC), you can associate an EIP to pull data from the Internet.
   */
  eipCreateParam?: CreateDataCacheRequestEipCreateParam;
  /**
   * @remarks
   * The existing elastic IP address (EIP) to be associated. If no NAT gateway is configured for the virtual private cloud (VPC), you can associate an EIP to pull data from the Internet.
   * 
   * @example
   * eip-uf66jeqopgqa9hdn****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The DataCache name.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The storage path of the data.
   * 
   * @example
   * /model/test
   */
  path?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-2df3isufhi38****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The number of days for which the DataCache is retained. When the retention days end, the DataCache is deleted. By default, DataCaches do not expire.
   * 
   * @example
   * 7
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the security group to which the generated ECI belongs during the creation of the data cache.
   * 
   * @example
   * sg-2ze81zoc3yl7a3we****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The size of the data cache. Unit: GiB. Default value: 20. Evaluate the required size based on the actual data size.
   * 
   * @example
   * 30
   */
  size?: number;
  /**
   * @remarks
   * The tags to be bound to the data cache.
   */
  tag?: CreateDataCacheRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the generated ECI belongs during the creation of the data cache.
   * 
   * @example
   * vsw-bp1jrgfqqy54kg5hc****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataSource: 'DataSource',
      eipCreateParam: 'EipCreateParam',
      eipInstanceId: 'EipInstanceId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
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
      dataSource: CreateDataCacheRequestDataSource,
      eipCreateParam: CreateDataCacheRequestEipCreateParam,
      eipInstanceId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': CreateDataCacheRequestTag },
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

