// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerIdeInstanceShrinkRequest extends $dara.Model {
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
   * The image ID. You can call ListServerIdeImages to obtain the image ID.
   * 
   * @example
   * System_serveride_notebook_20240822
   */
  imageId?: string;
  /**
   * @remarks
   * The image URL. This parameter is required when you use a non-official DataWorks image.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/example/serveride:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The name of the personal development environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * notebook_dev
   */
  instanceName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who owns the instance. If this parameter is not specified, the current caller is used by default.
   * 
   * @example
   * 20933221576142****
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The DataWorks resource group identifier. You can specify the numeric ID of the resource group or the full identifier in the Serverless_res_group_{tenantId}_{resgId} format.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_123456789012345_9876543210****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The user command configuration to be executed when the instance starts.
   */
  userCommandShrink?: string;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) configuration used by the instance.
   */
  userVpcShrink?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      cu: 'Cu',
      datasetsShrink: 'Datasets',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
      userCommandShrink: 'UserCommand',
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
      instanceName: 'string',
      owner: 'string',
      projectId: 'number',
      resourceGroupId: 'string',
      userCommandShrink: 'string',
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

