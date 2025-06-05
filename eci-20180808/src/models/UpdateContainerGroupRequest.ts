// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestDnsConfig } from "./UpdateContainerGroupRequestDnsConfig";
import { UpdateContainerGroupRequestAcrRegistryInfo } from "./UpdateContainerGroupRequestAcrRegistryInfo";
import { UpdateContainerGroupRequestContainer } from "./UpdateContainerGroupRequestContainer";
import { UpdateContainerGroupRequestImageRegistryCredential } from "./UpdateContainerGroupRequestImageRegistryCredential";
import { UpdateContainerGroupRequestInitContainer } from "./UpdateContainerGroupRequestInitContainer";
import { UpdateContainerGroupRequestTag } from "./UpdateContainerGroupRequestTag";
import { UpdateContainerGroupRequestVolume } from "./UpdateContainerGroupRequestVolume";


export class UpdateContainerGroupRequest extends $dara.Model {
  dnsConfig?: UpdateContainerGroupRequestDnsConfig;
  /**
   * @remarks
   * Details of the Container Registry Enterprise Edition instance that hosts the image of the init container.
   */
  acrRegistryInfo?: UpdateContainerGroupRequestAcrRegistryInfo[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The new configurations of the container group.
   */
  container?: UpdateContainerGroupRequestContainer[];
  /**
   * @remarks
   * The ID of the elastic container instance that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-2zelg8vwnlzdhf8hv****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The number of vCPUs that are allocated to the elastic container instance.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The information about the credentials of the image repository.
   */
  imageRegistryCredential?: UpdateContainerGroupRequestImageRegistryCredential[];
  /**
   * @remarks
   * The information about the new init container.
   */
  initContainer?: UpdateContainerGroupRequestInitContainer[];
  /**
   * @remarks
   * The size of the memory that is allocated to the elastic container instance. Unit: GiB.
   * 
   * @example
   * 4.0
   */
  memory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
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
   * The restart policy of the elastic container instance. Valid values:
   * 
   * *   Always: Always restarts the instance if a container in the instance exits upon termination.
   * *   Never: Never restarts the instance if a container in the instance exits upon termination.
   * *   OnFailure: Restarts the instance only if a container in the instance exists upon failure with a status code of non-zero.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The tags that are bound to the instance.
   */
  tag?: UpdateContainerGroupRequestTag[];
  /**
   * @remarks
   * The update type. Valid values:
   * 
   * *   RenewUpdate: full updates. You must specify all relevant parameters to update the elastic container instance. For a parameter of the list type, you must specify all the items contained in the parameter even if you want to update only some of the items. For a parameter of the struct type, you must specify all the members even if you want to update only some of the members.
   * *   IncrementalUpdate: incremental updates. You may specify only the parameter that you want to update. Other related parameters remain unchanged.
   * 
   * Default value: RenewUpdate.
   * 
   * @example
   * RenewUpdate
   */
  updateType?: string;
  /**
   * @remarks
   * The volumes that are mounted to the instance.
   */
  volume?: UpdateContainerGroupRequestVolume[];
  static names(): { [key: string]: string } {
    return {
      dnsConfig: 'DnsConfig',
      acrRegistryInfo: 'AcrRegistryInfo',
      clientToken: 'ClientToken',
      container: 'Container',
      containerGroupId: 'ContainerGroupId',
      cpu: 'Cpu',
      imageRegistryCredential: 'ImageRegistryCredential',
      initContainer: 'InitContainer',
      memory: 'Memory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restartPolicy: 'RestartPolicy',
      tag: 'Tag',
      updateType: 'UpdateType',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsConfig: UpdateContainerGroupRequestDnsConfig,
      acrRegistryInfo: { 'type': 'array', 'itemType': UpdateContainerGroupRequestAcrRegistryInfo },
      clientToken: 'string',
      container: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainer },
      containerGroupId: 'string',
      cpu: 'number',
      imageRegistryCredential: { 'type': 'array', 'itemType': UpdateContainerGroupRequestImageRegistryCredential },
      initContainer: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainer },
      memory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restartPolicy: 'string',
      tag: { 'type': 'array', 'itemType': UpdateContainerGroupRequestTag },
      updateType: 'string',
      volume: { 'type': 'array', 'itemType': UpdateContainerGroupRequestVolume },
    };
  }

  validate() {
    if(this.dnsConfig && typeof (this.dnsConfig as any).validate === 'function') {
      (this.dnsConfig as any).validate();
    }
    if(Array.isArray(this.acrRegistryInfo)) {
      $dara.Model.validateArray(this.acrRegistryInfo);
    }
    if(Array.isArray(this.container)) {
      $dara.Model.validateArray(this.container);
    }
    if(Array.isArray(this.imageRegistryCredential)) {
      $dara.Model.validateArray(this.imageRegistryCredential);
    }
    if(Array.isArray(this.initContainer)) {
      $dara.Model.validateArray(this.initContainer);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.volume)) {
      $dara.Model.validateArray(this.volume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

