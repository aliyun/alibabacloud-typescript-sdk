// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImageCacheRequestAcrRegistryInfo } from "./CreateImageCacheRequestAcrRegistryInfo";
import { CreateImageCacheRequestImageRegistryCredential } from "./CreateImageCacheRequestImageRegistryCredential";
import { CreateImageCacheRequestTag } from "./CreateImageCacheRequestTag";


export class CreateImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * Information about the Container Registry Enterprise Edition instance. For more information, see [Pull images from a Container Registry Enterprise Edition instance without using secrets](https://help.aliyun.com/document_detail/194250.html).
   */
  acrRegistryInfo?: CreateImageCacheRequestAcrRegistryInfo[];
  /**
   * @remarks
   * Comments.
   * 
   * @example
   * hide
   */
  annotations?: string;
  /**
   * @remarks
   * Specifies whether to enable reuse of image cache layers. If you enable this feature, and the image cache that you want to create and an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache. This accelerates the creation of the image cache. Valid values:
   * 
   * *   true: enables reuse of image cache layers.
   * *   false: disables reuse of image cache layers.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence of a request](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-xxx-xxx-xxxx-42665544xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the elastic IP address (EIP). If you want to pull images over the Internet, make sure that the elastic container instance can access the Internet. You can configure an EIP or a NAT gateway for the elastic container instance to access the Internet.
   * 
   * @example
   * eip-2zedsm5mfl3uhdj2d****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The elimination policy of the image cache. This parameter is empty by default, which indicates that the image cache is always retained.
   * 
   * You can set this parameter to LRU, which indicates that the image cache can be automatically deleted. When the number of image caches reaches the quota, the system automatically deletes the image caches whose EliminationStrategy parameter is set to LRU and that are least commonly used.
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
   * The number of temporary local snapshots. By default, the system creates one snapshot for each image cache. If an image cache is used to create multiple elastic container instances at a time, we recommend that you set this parameter to create multiple snapshots for the image cache. We recommend that you create one snapshot for creation of every 1,000 elastic container instances.
   * 
   * >  If you set the Flash parameter to true, instant image cache is enabled. During the creation of the image cache, the system first creates a temporary local snapshot for you to instantly use the snapshot. After the temporary local snapshot is created, the system begins to create a regular snapshot. After the regular snapshot is created, the temporary local snapshot is automatically deleted.
   * 
   * @example
   * 7
   */
  flashCopyCount?: number;
  /**
   * @remarks
   * Container image N that is used to create the image cache.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.15.10-perl
   */
  image?: string[];
  /**
   * @remarks
   * The name of the image cache.
   * 
   * This parameter is required.
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
   * The image repository.
   */
  imageRegistryCredential?: CreateImageCacheRequestImageRegistryCredential[];
  /**
   * @remarks
   * The address of the self-managed image repository.
   * 
   * When you create an image cache by using an image in a self-managed image repository that uses a self-signed certificate, you must specify this parameter to skip the certificate authentication. This can prevent the image from failing to pull due to certificate authentication failures.
   * 
   * @example
   * "harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"
   */
  insecureRegistry?: string;
  /**
   * @remarks
   * The operating system of the image. Default value: Linux. Valid values:
   * 
   * - Linux
   * - Windows
   * 
   * > Windows instances are in invitational preview. To use the operating system, submit a ticket.
   * 
   * @example
   * Linux
   */
  osType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The address of the self-managed image repository. When you create an image cache by using an image in a self-managed image repository that uses the HTTP protocol, you must specify this parameter. This way, Elastic Container Instance uses the HTTP protocol instead of the default HTTPS protocol to pull the image. This can prevent the image from failing to pull due to different protocols.
   * 
   * @example
   * "harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"
   */
  plainHttpRegistry?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of the image cache. Unit: days. When the retention period ends, the image cache expires and is deleted. By default, image caches never expire.
   * 
   * >  The image caches that fail to be created are only retained for one day.
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
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The number of regular snapshots. By default, the system creates one snapshot for each image cache. If an image cache is used to create multiple elastic container instances at a time, we recommend that you set this parameter to create multiple snapshots for the image cache. We recommend that you create one snapshot for creation of every 1,000 elastic container instances.
   * 
   * >  If you set the Flash parameter to false, instant image cache is disabled. In this case, only regular snapshots are generated during the creation of the image cache.
   * 
   * @example
   * 7
   */
  standardCopyCount?: number;
  /**
   * @remarks
   * The tag of the image cache.
   */
  tag?: CreateImageCacheRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch. You can specify up to 10 vSwitch IDs. Separate multiple vSwitch IDs with commas (,). Example: `vsw-***,vsw-***`.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the image cache.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfo: 'AcrRegistryInfo',
      annotations: 'Annotations',
      autoMatchImageCache: 'AutoMatchImageCache',
      clientToken: 'ClientToken',
      eipInstanceId: 'EipInstanceId',
      eliminationStrategy: 'EliminationStrategy',
      flash: 'Flash',
      flashCopyCount: 'FlashCopyCount',
      image: 'Image',
      imageCacheName: 'ImageCacheName',
      imageCacheSize: 'ImageCacheSize',
      imageRegistryCredential: 'ImageRegistryCredential',
      insecureRegistry: 'InsecureRegistry',
      osType: 'OsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plainHttpRegistry: 'PlainHttpRegistry',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      standardCopyCount: 'StandardCopyCount',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfo: { 'type': 'array', 'itemType': CreateImageCacheRequestAcrRegistryInfo },
      annotations: 'string',
      autoMatchImageCache: 'boolean',
      clientToken: 'string',
      eipInstanceId: 'string',
      eliminationStrategy: 'string',
      flash: 'boolean',
      flashCopyCount: 'number',
      image: { 'type': 'array', 'itemType': 'string' },
      imageCacheName: 'string',
      imageCacheSize: 'number',
      imageRegistryCredential: { 'type': 'array', 'itemType': CreateImageCacheRequestImageRegistryCredential },
      insecureRegistry: 'string',
      osType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plainHttpRegistry: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      standardCopyCount: 'number',
      tag: { 'type': 'array', 'itemType': CreateImageCacheRequestTag },
      vSwitchId: 'string',
      zoneId: 'string',
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

