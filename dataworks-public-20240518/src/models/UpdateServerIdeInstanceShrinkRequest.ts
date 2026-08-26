// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerIdeInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The credential injection configuration for the instance. After this feature is enabled, you can use the default RAM role chain or specify a custom RAM role.
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The number of CUs used by the instance.
   * 
   * @example
   * 10
   */
  cu?: number;
  /**
   * @remarks
   * The list of datasets mounted to the instance.
   */
  datasetsShrink?: string;
  /**
   * @remarks
   * The image ID. You can call ListServerIdeImages to obtain the ID.
   * 
   * @example
   * System_serveride_notebook_20240822
   */
  imageId?: string;
  /**
   * @remarks
   * The image URL. This parameter is required when you use a non-DataWorks official image.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/example/serveride:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The personal development environment instance ID. You can call ListServerIdeInstances to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 699573
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the personal development environment instance.
   * 
   * @example
   * notebook_dev
   */
  instanceName?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The VPC configuration used by the instance.
   */
  userVpcShrink?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      cu: 'Cu',
      datasetsShrink: 'Datasets',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      projectId: 'ProjectId',
      userVpcShrink: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      cu: 'number',
      datasetsShrink: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      projectId: 'number',
      userVpcShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

