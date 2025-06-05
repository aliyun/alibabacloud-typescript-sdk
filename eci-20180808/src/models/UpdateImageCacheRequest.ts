// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateImageCacheRequestAcrRegistryInfo } from "./UpdateImageCacheRequestAcrRegistryInfo";
import { UpdateImageCacheRequestImageRegistryCredential } from "./UpdateImageCacheRequestImageRegistryCredential";
import { UpdateImageCacheRequestTag } from "./UpdateImageCacheRequestTag";


export class UpdateImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the Container Registry Enterprise Edition instance.
   */
  acrRegistryInfo?: UpdateImageCacheRequestAcrRegistryInfo[];
  /**
   * @remarks
   * Specifies whether to enable reuse of image cache layers. If you enable this feature and the image cache that you want to create and an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache. This accelerates the creation of the image cache. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-xxx-xxx-xxxx-42665544xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the elastic IP address (EIP). If you want to pull public images, you must make sure that the elastic container instance can access the Internet. To enable Internet access, you can configure an EIP or a NAT gateway for the instance.
   * 
   * @example
   * eip-2zedsm5mfl3uhdj2d****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The elimination policy for the image cache. This parameter is empty by default, which indicates that the image cache is always retained.
   * 
   * You can set this parameter to LRU, which indicates that the image cache can be automatically deleted. When the number of image caches reaches the quota, the system automatically deletes the image caches whose EliminationStrategy parameter is set to LRU and that are least recently used.
   * 
   * @example
   * LRU
   */
  eliminationStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the instant image cache feature. The feature can accelerate the creation of image caches. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  flash?: boolean;
  /**
   * @remarks
   * The number of duplicates of temporary local snapshots. By default, the system creates one snapshot for each image cache. If you use the image cache to create multiple elastic container instances at a time, we recommend that you configure this parameter to create multiple snapshot duplicates for the image cache. We recommend that you create one snapshot duplicate for creation of every 1,000 elastic container instances.
   * 
   * > If you enable the instant image cache feature by setting Flash to true, a local snapshot is first created during the creation of the image cache. After the local snapshot is created, regular snapshots start to be created. After the regular snapshots are created, the local snapshot is automatically deleted.
   * 
   * @example
   * 7
   */
  flashCopyCount?: number;
  /**
   * @remarks
   * Container images that are used to create the image cache.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.15.10-perl
   */
  image?: string[];
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * This parameter is required.
   * 
   * @example
   * imc-bp195erqe9o2pb09****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The name of the image cache.
   * 
   * @example
   * testcache
   */
  imageCacheName?: string;
  /**
   * @remarks
   * The size of the image cache. Unit: GiB. Default value: 20.
   * 
   * @example
   * 20
   */
  imageCacheSize?: number;
  /**
   * @remarks
   * The information about the image repository.
   */
  imageRegistryCredential?: UpdateImageCacheRequestImageRegistryCredential[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the image cache.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the image cache belongs.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of the image cache. Unit: days. When the retention period elapses, the image cache expires and is deleted. By default, image caches never expire.
   * 
   * > The image caches that fail to be created are retained for only 1 day.
   * 
   * @example
   * 7
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the security group to which the image cache belongs.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The number of duplicates of regular snapshots. By default, the system creates one snapshot for each image cache. If you use the image cache to create multiple elastic container instances at a time, we recommend that you configure this parameter to create multiple snapshot duplicates for the image cache. We recommend that you create one snapshot duplicate for creation of every 1,000 elastic container instances.
   * 
   * > If you disable the instant image cache feature by setting Flash to false, only regular snapshots are generated when you create an image cache.
   * 
   * @example
   * 7
   */
  standardCopyCount?: number;
  /**
   * @remarks
   * The tags to add to the image cache. A maximum of 20 tags can be added to the image cache.
   */
  tag?: UpdateImageCacheRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the image cache is connected.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfo: 'AcrRegistryInfo',
      autoMatchImageCache: 'AutoMatchImageCache',
      clientToken: 'ClientToken',
      eipInstanceId: 'EipInstanceId',
      eliminationStrategy: 'EliminationStrategy',
      flash: 'Flash',
      flashCopyCount: 'FlashCopyCount',
      image: 'Image',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      imageCacheSize: 'ImageCacheSize',
      imageRegistryCredential: 'ImageRegistryCredential',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      standardCopyCount: 'StandardCopyCount',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfo: { 'type': 'array', 'itemType': UpdateImageCacheRequestAcrRegistryInfo },
      autoMatchImageCache: 'boolean',
      clientToken: 'string',
      eipInstanceId: 'string',
      eliminationStrategy: 'string',
      flash: 'boolean',
      flashCopyCount: 'number',
      image: { 'type': 'array', 'itemType': 'string' },
      imageCacheId: 'string',
      imageCacheName: 'string',
      imageCacheSize: 'number',
      imageRegistryCredential: { 'type': 'array', 'itemType': UpdateImageCacheRequestImageRegistryCredential },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      standardCopyCount: 'number',
      tag: { 'type': 'array', 'itemType': UpdateImageCacheRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acrRegistryInfo)) {
      $dara.Model.validateArray(this.acrRegistryInfo);
    }
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    if(Array.isArray(this.imageRegistryCredential)) {
      $dara.Model.validateArray(this.imageRegistryCredential);
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

