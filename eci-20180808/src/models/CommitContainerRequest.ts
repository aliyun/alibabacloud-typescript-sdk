// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommitContainerRequestAcrRegistryInfo } from "./CommitContainerRequestAcrRegistryInfo";
import { CommitContainerRequestArn } from "./CommitContainerRequestArn";
import { CommitContainerRequestImage } from "./CommitContainerRequestImage";


export class CommitContainerRequest extends $dara.Model {
  /**
   * @remarks
   * The access credential configurations of the Container Registry Enterprise Edition instance.
   * 
   * >  If you use a Container Registry Personal Edition instance, you do not need to configure this parameter. If you use a Container Registry Enterprise Edition instance, you must configure this parameter.
   */
  acrRegistryInfo?: CommitContainerRequestAcrRegistryInfo;
  /**
   * @remarks
   * The details about the ARN that is required for authorization.
   */
  arn?: CommitContainerRequestArn;
  /**
   * @remarks
   * The ID of the container group.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-bp1do4xz75fa5sd****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * This parameter is required.
   * 
   * @example
   * container-1
   */
  containerName?: string;
  /**
   * @remarks
   * The image of the container.
   */
  image?: CommitContainerRequestImage;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfo: 'AcrRegistryInfo',
      arn: 'Arn',
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      image: 'Image',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfo: CommitContainerRequestAcrRegistryInfo,
      arn: CommitContainerRequestArn,
      containerGroupId: 'string',
      containerName: 'string',
      image: CommitContainerRequestImage,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.acrRegistryInfo && typeof (this.acrRegistryInfo as any).validate === 'function') {
      (this.acrRegistryInfo as any).validate();
    }
    if(this.arn && typeof (this.arn as any).validate === 'function') {
      (this.arn as any).validate();
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

