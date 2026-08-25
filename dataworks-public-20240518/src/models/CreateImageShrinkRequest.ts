// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The image visibility. Valid values:
   * - Public: visible to all users.
   * - Private: visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The VPC ID associated with the ACR instance. This parameter is required when referencing an ACR image.
   * 
   * @example
   * vpc-xxx
   */
  acrAssociatedVpcId?: string;
  /**
   * @remarks
   * The ACR instance ID. This parameter is required when referencing an ACR image.
   * 
   * @example
   * acr_instance_id
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image build configuration.
   */
  buildConfigShrink?: string;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * This parameter is required.
   * 
   * @example
   * dasfsd-94fqwe-da8d
   */
  clientToken?: string;
  /**
   * @remarks
   * The image description, up to 128 characters.
   * 
   * @example
   * create by xxxx
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the image to MaxCompute. Specify this parameter when referencing an ACR image. Default value: false.
   * 
   * @example
   * false
   */
  enableSyncMaxCompute?: boolean;
  /**
   * @remarks
   * The image URI. This parameter is required when referencing an ACR image.
   * 
   * @example
   * registry-vpc.cn-beijing.cr.aliyuncs.com/namespace/image:0.1.0
   */
  imageUri?: string;
  /**
   * @remarks
   * The image name, which can contain lowercase letters, digits, and underscores (_), up to 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * task_image_001
   */
  name?: string;
  /**
   * @remarks
   * The image namespace. Set this parameter to DataWorks Default when referencing a DataWorks official image.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace_name
   */
  namespace?: string;
  /**
   * @remarks
   * The image ID from the image provider. This parameter is required when referencing a DataWorks official image.
   * 
   * @example
   * System_shell_20251201
   */
  providerImageId?: string;
  /**
   * @remarks
   * The image reference data type. Valid values:
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
   * The image repository name. Set this parameter to DataWorks Default when referencing a DataWorks official image.
   * 
   * This parameter is required.
   * 
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @remarks
   * The image sub-purpose.
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

