// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the image. Valid values:
   * - Public: The image is visible to all users.
   * - Private: The image is visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) associated with the ACR instance. This parameter is required if you reference an ACR image.
   * 
   * @example
   * vpc-xxx
   */
  acrAssociatedVpcId?: string;
  /**
   * @remarks
   * The ACR instance ID. This parameter is required if you reference an ACR image.
   * 
   * @example
   * acr_instance_id
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The build configuration of the image.
   */
  buildConfigShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure idempotence.
   * 
   * This parameter is required.
   * 
   * @example
   * dasfsd-94fqwe-da8d
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the image. The description can be up to 128 characters in length.
   * 
   * @example
   * create by xxxx
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the image to MaxCompute. Specify this parameter when you reference an ACR image. Default value: false.
   * 
   * @example
   * false
   */
  enableSyncMaxCompute?: boolean;
  /**
   * @remarks
   * The URI of the image. This parameter is required if you reference an ACR image.
   * 
   * @example
   * registry-vpc.cn-beijing.cr.aliyuncs.com/namespace/image:0.1.0
   */
  imageUri?: string;
  /**
   * @remarks
   * The name of the image. The name can contain lowercase letters, digits, and underscores (_), and can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * task_image_001
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the image. If you reference a DataWorks official image, set this parameter to DataWorks Default.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace_name
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the image provided by the image provider. This parameter is required if you reference a DataWorks official image.
   * 
   * @example
   * System_shell_20251201
   */
  providerImageId?: string;
  /**
   * @remarks
   * The reference data type of the image. Valid values:
   * 
   * - ACR: ACR image repository.
   * - DataWorks: DataWorks official image.
   * 
   * This parameter is required.
   * 
   * @example
   * ACR
   */
  providerType?: string;
  /**
   * @remarks
   * The name of the image repository. If you reference a DataWorks official image, set this parameter to DataWorks Default.
   * 
   * This parameter is required.
   * 
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @remarks
   * The sub-purpose of the image.
   * 
   * This parameter is required.
   */
  supportedShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      acrAssociatedVpcId: 'AcrAssociatedVpcId',
      acrInstanceId: 'AcrInstanceId',
      buildConfigShrink: 'BuildConfig',
      clientToken: 'ClientToken',
      description: 'Description',
      enableSyncMaxCompute: 'EnableSyncMaxCompute',
      imageUri: 'ImageUri',
      name: 'Name',
      namespace: 'Namespace',
      providerImageId: 'ProviderImageId',
      providerType: 'ProviderType',
      repositoryName: 'RepositoryName',
      supportedShrink: 'Supported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      acrAssociatedVpcId: 'string',
      acrInstanceId: 'string',
      buildConfigShrink: 'string',
      clientToken: 'string',
      description: 'string',
      enableSyncMaxCompute: 'boolean',
      imageUri: 'string',
      name: 'string',
      namespace: 'string',
      providerImageId: 'string',
      providerType: 'string',
      repositoryName: 'string',
      supportedShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

