// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageShrinkRequest extends $dara.Model {
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
   * The Container Registry (ACR) instance ID. This parameter is required when referencing an ACR image.
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
   * The image description.
   * 
   * @example
   * create by xxxx
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
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
   * The image name.
   * 
   * @example
   * task_image_001
   */
  name?: string;
  /**
   * @remarks
   * The image namespace. Set this parameter to DataWorks Default when referencing a DataWorks official image.
   * 
   * @example
   * namespace_name
   */
  namespace?: string;
  /**
   * @remarks
   * The provider image ID. This parameter is required when referencing a DataWorks official image.
   * 
   * @example
   * System_shell_20251201
   */
  providerImageId?: string;
  /**
   * @remarks
   * The image repository name. Set this parameter to DataWorks Default when referencing a DataWorks official image.
   * 
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @remarks
   * The image sub-purpose.
   */
  supportedShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      acrAssociatedVpcId: 'AcrAssociatedVpcId',
      acrInstanceId: 'AcrInstanceId',
      buildConfigShrink: 'BuildConfig',
      description: 'Description',
      id: 'Id',
      imageUri: 'ImageUri',
      name: 'Name',
      namespace: 'Namespace',
      providerImageId: 'ProviderImageId',
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
      description: 'string',
      id: 'string',
      imageUri: 'string',
      name: 'string',
      namespace: 'string',
      providerImageId: 'string',
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

