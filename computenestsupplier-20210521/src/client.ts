// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddServiceSharedAccountsRequestSharedAccounts extends $dara.Model {
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * This parameter is required.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      userAliUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The parameters that can be modified. The operation that is performed to modify the parameters does not cause a validation error.
   * 
   * >  This parameter is returned only if DryRun is set to true.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions. The new values of the parameters determine whether the operation that is performed to modify the parameters causes a validation error.
   * 
   * >  This parameter is returned only if DryRun is set to true.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified. The operation that is performed to modify the parameters causes a validation error.
   * 
   * >  This parameter is returned only if DryRun is set to true.
   */
  parametersNotAllowedToBeModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parametersAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersAllowedToBeModified);
    }
    if(Array.isArray(this.parametersConditionallyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersConditionallyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersNotAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersNotAllowedToBeModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestArtifactBuildPropertyBuildArgs extends $dara.Model {
  /**
   * @remarks
   * The name of a specific build argument.
   * 
   * @example
   * ENV
   */
  argumentName?: string;
  /**
   * @remarks
   * The value of a specific build argument.
   * 
   * @example
   * nginx:latest
   */
  argumentValue?: string;
  static names(): { [key: string]: string } {
    return {
      argumentName: 'ArgumentName',
      argumentValue: 'ArgumentValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argumentName: 'string',
      argumentValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestArtifactBuildPropertyCodeRepo extends $dara.Model {
  /**
   * @remarks
   * The name of the branch in the code repository.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The owner of the code repository.
   * 
   * >  This parameter is available only if the git repository is private.
   * 
   * @example
   * aliyun-computenest
   */
  owner?: string;
  /**
   * @remarks
   * The platform type. Valid values: 
   * 
   * - github
   * 
   * - gitee
   * 
   * @example
   * github
   */
  platform?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * aliyun-computenest/quickstart-Lobexxx
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      owner: 'Owner',
      platform: 'Platform',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      owner: 'string',
      platform: 'string',
      repoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestArtifactBuildProperty extends $dara.Model {
  /**
   * @remarks
   * The build arguments used during the image build process.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile type.
   */
  buildArgs?: CreateArtifactRequestArtifactBuildPropertyBuildArgs[];
  /**
   * @remarks
   * The address of the code repository.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile or Buildpacks type.
   */
  codeRepo?: CreateArtifactRequestArtifactBuildPropertyCodeRepo;
  /**
   * @remarks
   * The command content.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * echo "start run command"
   */
  commandContent?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances.
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances.
   * *   RunShellScript: shell command, applicable to Linux instances.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The relative path to the Dockerfile within the code repository.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile type.
   * 
   * @example
   * ./file/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @remarks
   * The region ID where the source mirror image is located.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The pull location of the source container image. This is used for the command docker pull ${SourceContainerImage}.
   * 
   * >  This parameter is available only if the ArtifactBuildType is ContainerImage type.
   * 
   * @example
   * pytorch/pytorch:2.5.1-cuda12.4-cudnn9-devel
   */
  sourceContainerImage?: string;
  /**
   * @remarks
   * The source image id. Supported Types:
   * 
   * - Image ID: Pass the Image ID of the Ecs image directly.
   * 
   * - OOS Common Parameter Name: Obtain the corresponding Image ID automatically by using the OOS common parameter name.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * Image ID：m-t4nhenrdc38pe4*****
   * ubuntu_22_04_x64_20G_alibase_20240926.vhd
   * OOS Common Parameter Name：aliyun/services/computenest/images/aliyun_3_2104_python_3_11
   */
  sourceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      codeRepo: 'CodeRepo',
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      dockerfilePath: 'DockerfilePath',
      regionId: 'RegionId',
      sourceContainerImage: 'SourceContainerImage',
      sourceImageId: 'SourceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': CreateArtifactRequestArtifactBuildPropertyBuildArgs },
      codeRepo: CreateArtifactRequestArtifactBuildPropertyCodeRepo,
      commandContent: 'string',
      commandType: 'string',
      dockerfilePath: 'string',
      regionId: 'string',
      sourceContainerImage: 'string',
      sourceImageId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(this.codeRepo && typeof (this.codeRepo as any).validate === 'function') {
      (this.codeRepo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestArtifactProperty extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity version of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * m-0xij191j9cuev6xxxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * crr-d8o1nponyc2t1gcg
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `Public`: a public repository.
   * *   `Private`: a private repository.
   * 
   * You can specify the RepoType or Summary parameter. The RepoType parameter is optional.
   * 
   * @example
   * Public
   */
  repoType?: string;
  /**
   * @remarks
   * The version tag of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The object URL of the deployment package.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      imageId: 'ImageId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
      tag: 'Tag',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      imageId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
      tag: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestComplianceMetadata extends $dara.Model {
  /**
   * @remarks
   * The compliance package selected.
   */
  compliancePacks?: string[];
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * Protocol name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Protocol url.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfoSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 5.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: CreateServiceRequestServiceInfoAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * TiDB Database
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * TiDB是A公司自主设计、研发的开源分布式关系型数据库。
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: CreateServiceRequestServiceInfoSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfoSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Web
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceShrinkRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * Protocol name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Protocol url.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceShrinkRequestServiceInfoSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 5.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceShrinkRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: CreateServiceShrinkRequestServiceInfoAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * TiDB Database
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * TiDB是A公司自主设计、研发的开源分布式关系型数据库。
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: CreateServiceShrinkRequestServiceInfoSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfoSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Web
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyDryRunResultRolePolicyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * The Actions.
   */
  action?: string[];
  /**
   * @remarks
   * Resource in ram policy.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The service name in ram policy.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyDryRunResultRolePolicy extends $dara.Model {
  /**
   * @remarks
   * The missing ram policy for deploying role.
   */
  missingPolicy?: CreateServiceResponseBodyDryRunResultRolePolicyMissingPolicy[];
  /**
   * @remarks
   * The required ram policy for deploying role.
   * 
   * @example
   * {
   * 	"Statement": [{
   * 		"Action": ["oos:CancelExecutions", "oos:DeleteExecutions", "oos:GetTemplate", "oos:ListExecutions", "oos:ListTemplates", "oos:NotifyExecution", "oos:StartExecution"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}, {
   * 		"Action": ["ram:PassRole"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}, {
   * 		"Action": ["ros:CreateStack", "ros:GetStack", "ros:UpdateStack", "ros:ListStackEvents", "ros:ListStackResources", "ros:ListStackResources", "ros:DeleteStack", "ram:GetRole"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}],
   * 	"Version": "1"
   * }
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': CreateServiceResponseBodyDryRunResultRolePolicyMissingPolicy },
      policy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The required ram policy for deploying role.
   */
  rolePolicy?: CreateServiceResponseBodyDryRunResultRolePolicy;
  static names(): { [key: string]: string } {
    return {
      rolePolicy: 'RolePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePolicy: CreateServiceResponseBodyDryRunResultRolePolicy,
    };
  }

  validate() {
    if(this.rolePolicy && typeof (this.rolePolicy as any).validate === 'function') {
      (this.rolePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponseBodyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * Operations on specific resources.
   */
  action?: string[];
  /**
   * @remarks
   * The specific objects authorized. An asterisk (*) denotes all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the deployment package.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the deployment package.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBodyAvailableResources extends $dara.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * "/xxx/"
   */
  path?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * oss-cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * computenest-artifacts-draft-cn-hangzhou
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      regionId: 'RegionId',
      repositoryName: 'RepositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      regionId: 'string',
      repositoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.xxx
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * eyJ0aW1lIjoiMTUyNjU0OTc5:0705733****
   */
  password?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token.
   * 
   * @example
   * xxx
   */
  securityToken?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      password: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * The mappings.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      mappings: 'Mappings',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.mappings) {
      $dara.Model.validateMap(this.mappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0048****-Frequency-1
   */
  entityId?: string;
  /**
   * @remarks
   * Name of a measurement indicator.
   * 
   * @example
   * AvgMemory
   */
  metricName?: string;
  /**
   * @remarks
   * Custom PromQL.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * Measurement indicators.
   * 
   * @example
   * ComputeNestPrometheus
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0015****-Frequency-1
   */
  entityIds?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * 按量付费套餐
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadata extends $dara.Model {
  /**
   * @remarks
   * The mapping information about the billing items.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  /**
   * @remarks
   * Metering item configuration information.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The binding relationship between package and measurement dimension.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut-2
   */
  entityId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * NetworkLantency
   */
  metricName?: string;
  /**
   * @remarks
   * The custom prometheus statement.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * The metric.
   * 
   * @example
   * AvgPod
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut-2
   */
  entityIds?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Pay-as-you-go Package
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The specification code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Pay-as-you-go
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $dara.Model {
  /**
   * @remarks
   * The configurations of the billable items.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The billable items that are associated with the package.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings[];
  /**
   * @remarks
   * The mappings between the service specifications and the template or package.
   */
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings },
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMeteringEntities extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the billable item.
   * 
   * @example
   * spring-boot-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommoditySpecifications extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00xxxx
   */
  code?: string;
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * specifications1
   */
  name?: string;
  /**
   * @remarks
   * The subscription duration. Unit: week or year.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodity extends $dara.Model {
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   **PREPAY** (default): subscription.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity modules.
   */
  components?: string[];
  /**
   * @remarks
   * The configuration metadata related to Lingxiao.
   */
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  /**
   * @remarks
   * The metadata of Alibaba Cloud Marketplace.
   */
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  /**
   * @remarks
   * The information about the billable item.
   */
  meteringEntities?: GetServiceResponseBodyCommodityMeteringEntities[];
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * { "Enabled":false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The specification details of the service in Alibaba Cloud Marketplace.
   */
  specifications?: GetServiceResponseBodyCommoditySpecifications[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      components: 'Components',
      cssMetadata: 'CssMetadata',
      marketplaceMetadata: 'MarketplaceMetadata',
      meteringEntities: 'MeteringEntities',
      saasBoostMetadata: 'SaasBoostMetadata',
      specifications: 'Specifications',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': 'string' },
      cssMetadata: GetServiceResponseBodyCommodityCssMetadata,
      marketplaceMetadata: GetServiceResponseBodyCommodityMarketplaceMetadata,
      meteringEntities: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMeteringEntities },
      saasBoostMetadata: 'string',
      specifications: { 'type': 'array', 'itemType': GetServiceResponseBodyCommoditySpecifications },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.cssMetadata && typeof (this.cssMetadata as any).validate === 'function') {
      (this.cssMetadata as any).validate();
    }
    if(this.marketplaceMetadata && typeof (this.marketplaceMetadata as any).validate === 'function') {
      (this.marketplaceMetadata as any).validate();
    }
    if(Array.isArray(this.meteringEntities)) {
      $dara.Model.validateArray(this.meteringEntities);
    }
    if(Array.isArray(this.specifications)) {
      $dara.Model.validateArray(this.specifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyComplianceMetadata extends $dara.Model {
  /**
   * @remarks
   * The compliance package is selected.
   */
  compliancePacks?: string[];
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceDocumentInfos extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to access the document.
   * 
   * @example
   * http://docurl
   */
  documentUrl?: string;
  /**
   * @remarks
   * The language of the return data. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Default Template.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      documentUrl: 'DocumentUrl',
      locale: 'Locale',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentUrl: 'string',
      locale: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosAgreements extends $dara.Model {
  /**
   * @remarks
   * The agreement name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The agreement URL.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the software
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 5.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The agreement information about the service.
   */
  agreements?: GetServiceResponseBodyServiceInfosAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * https://example.com
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WordPress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the information about the software in the service.
   */
  softwares?: GetServiceResponseBodyServiceInfosSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyStatistic extends $dara.Model {
  /**
   * @remarks
   * The total number of service instances that belong to the service. The service instances that are deleted are counted.
   * 
   * @example
   * 75
   */
  accumulativeInstanceCount?: number;
  /**
   * @remarks
   * The total amount consumed for trial service instances. Unit: CNY.
   * 
   * @example
   * 80.35
   */
  accumulativePocAmount?: number;
  /**
   * @remarks
   * The total number of users who use the service. The historical users are counted.
   * 
   * @example
   * 60
   */
  accumulativeUserCount?: number;
  /**
   * @remarks
   * The average amount consumed for trial service instances per instance. Unit: CNY.
   * 
   * @example
   * 40.17
   */
  averagePocAmount?: number;
  /**
   * @remarks
   * The average duration for which trial service instances are in use. Unit: Hour.
   * 
   * @example
   * 1
   */
  averagePocDuration?: number;
  /**
   * @remarks
   * The average amount consumed for trial service instances per a period of time. Unit: CNY.
   * 
   * @example
   * 167.9
   */
  averagePocUnitAmount?: number;
  /**
   * @remarks
   * The number of online service instances. It means the number of service instances that are successfully deployed.
   * 
   * @example
   * 20
   */
  deployedServiceInstanceCount?: number;
  /**
   * @remarks
   * The number of online users. It means the number of users who successfully deployed the service instances.
   * 
   * @example
   * 10
   */
  deployedUserCount?: number;
  /**
   * @remarks
   * The number of service applications that are in the Submitted state.
   * 
   * @example
   * 10
   */
  submittedUsageCount?: number;
  static names(): { [key: string]: string } {
    return {
      accumulativeInstanceCount: 'AccumulativeInstanceCount',
      accumulativePocAmount: 'AccumulativePocAmount',
      accumulativeUserCount: 'AccumulativeUserCount',
      averagePocAmount: 'AveragePocAmount',
      averagePocDuration: 'AveragePocDuration',
      averagePocUnitAmount: 'AveragePocUnitAmount',
      deployedServiceInstanceCount: 'DeployedServiceInstanceCount',
      deployedUserCount: 'DeployedUserCount',
      submittedUsageCount: 'SubmittedUsageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeInstanceCount: 'number',
      accumulativePocAmount: 'number',
      accumulativeUserCount: 'number',
      averagePocAmount: 'number',
      averagePocDuration: 'number',
      averagePocUnitAmount: 'number',
      deployedServiceInstanceCount: 'number',
      deployedUserCount: 'number',
      submittedUsageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Year
   * *   Month
   * *   Day
   * 
   * @example
   * Month
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit for the private connection established based on the private network interconnection mode of Compute Nest.
   * 
   * @example
   * 1536Mbps
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of the endpoints for private connections.
   */
  endpointIps?: string[];
  /**
   * @remarks
   * The status of the Ingress endpoint. Valid values:
   * 
   * *   Ready: The Ingress endpoint is connected.
   * *   Pending: The Ingress endpoint is being connected.
   * *   Failed: The Ingress endpoint fails to be connected.
   * *   Deleted: The Ingress endpoint is deleted.
   * *   Deleting: The Ingress endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  ingressEndpointStatus?: string;
  /**
   * @remarks
   * The status of the network service. Valid values:
   * 
   * *   Ready: The network service is connected.
   * *   Pending: The network service is being connected.
   * *   Failed: The network service fails to be connected.
   * *   Deleted: The network service is deleted.
   * *   Deleting: The network service is being deleted.
   * 
   * @example
   * Ready
   */
  networkServiceStatus?: string;
  /**
   * @remarks
   * The names of the security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The names of the vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectBandwidth: 'ConnectBandwidth',
      domainName: 'DomainName',
      endpointIps: 'EndpointIps',
      ingressEndpointStatus: 'IngressEndpointStatus',
      networkServiceStatus: 'NetworkServiceStatus',
      securityGroups: 'SecurityGroups',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectBandwidth: 'number',
      domainName: 'string',
      endpointIps: { 'type': 'array', 'itemType': 'string' },
      ingressEndpointStatus: 'string',
      networkServiceStatus: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointIps)) {
      $dara.Model.validateArray(this.endpointIps);
    }
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The network configurations, which are mainly used for the private connection.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the private connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateZoneName: 'PrivateZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      endpointServiceId: 'string',
      privateZoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionConfigs)) {
      $dara.Model.validateArray(this.connectionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the reverse private connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the reverse private connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The information about private connections.
   */
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  /**
   * @remarks
   * The information about the reverse private connection.
   */
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateVpcConnections: 'PrivateVpcConnections',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      reversePrivateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections },
    };
  }

  validate() {
    if(Array.isArray(this.privateVpcConnections)) {
      $dara.Model.validateArray(this.privateVpcConnections);
    }
    if(Array.isArray(this.reversePrivateVpcConnections)) {
      $dara.Model.validateArray(this.reversePrivateVpcConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service instance.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WordPress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceUpgradableServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The upgradable service version.
   * 
   * @example
   * 4
   */
  version?: string;
  /**
   * @remarks
   * The version name of an upgradable service version.
   * 
   * @example
   * Init version
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyService extends $dara.Model {
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The URL of the service documentation.
   * 
   * @example
   * http://example.com
   */
  serviceDocUrl?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-9c8a3522528b4fe8****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * Draft: The registration request of the service is pending to be submitted.
   * 
   * Submitted: The registration request of the service is submitted.
   * 
   * Approved: The registration request of the service is approved.
   * 
   * Online: The service is published.
   * 
   * Offline: The service is unpublished.
   * 
   * Deleted: The service is deleted.
   * 
   * Launching: The service is being published.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The upgradable service Info.
   */
  upgradableServiceInfos?: GetServiceInstanceResponseBodyServiceUpgradableServiceInfos[];
  /**
   * @remarks
   * The service versions that can be updated.
   */
  upgradableServiceVersions?: string[];
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 20231127020225
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceDocUrl: 'ServiceDocUrl',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      upgradableServiceInfos: 'UpgradableServiceInfos',
      upgradableServiceVersions: 'UpgradableServiceVersions',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      publishTime: 'string',
      serviceDocUrl: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      upgradableServiceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceUpgradableServiceInfos },
      upgradableServiceVersions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.upgradableServiceInfos)) {
      $dara.Model.validateArray(this.upgradableServiceInfos);
    }
    if(Array.isArray(this.upgradableServiceVersions)) {
      $dara.Model.validateArray(this.upgradableServiceVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * GetServiceProvisions
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the API operation belongs.
   * 
   * @example
   * ComputeNest
   */
  apiProductId?: string;
  /**
   * @remarks
   * The type of the API operation. Valid values:
   * 
   * *   Open: public
   * *   Inner: private
   * 
   * @example
   * Open
   */
  apiType?: string;
  /**
   * @remarks
   * The parameters of the API operation. ${Variable name} indicates a dynamic parameter.
   * 
   * @example
   * { "ServiceLinkedRole": "AliyunServiceRoleForRdsPgsqlOnEcs", "RegionId": "${RegionId}" }
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiProductId: 'ApiProductId',
      apiType: 'ApiType',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiProductId: 'string',
      apiType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles extends $dara.Model {
  /**
   * @remarks
   * The information about the API operation that is used to create the RAM role.
   */
  apiForCreation?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation;
  /**
   * @remarks
   * Indicates whether the RAM role is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The purpose for which the RAM role is used. Default value: Default. A value of Default indicates that the RAM role is the default role of the service.
   * 
   * @example
   * Default
   */
  function?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * AliyunServiceRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      apiForCreation: 'ApiForCreation',
      created: 'Created',
      function: 'Function',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiForCreation: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation,
      created: 'boolean',
      function: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(this.apiForCreation && typeof (this.apiForCreation as any).validate === 'function') {
      (this.apiForCreation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision extends $dara.Model {
  /**
   * @remarks
   * The authorization URL of the RAM role.
   * 
   * > This parameter is returned if Created is set to false.
   * 
   * @example
   * https://ram.console.aliyun.com/role/authorization?request={"Services":[{"Service":"CS","Roles":[{"RoleName":"AliyunCSManagedVKRole","TemplateId":"AliyunCSManagedVKRole"},{"RoleName":"AliyunCSDefaultRole","TemplateId":"Default"}]}],"ReturnUrl":"https://cs.console.aliyun.com/"}
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The RAM roles.
   */
  roles?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles[];
  static names(): { [key: string]: string } {
    return {
      authorizationURL: 'AuthorizationURL',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationURL: 'string',
      roles: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic activation for the service is defined in the template. Valid values:
   * 
   * *   true: Automatic activation for the service is defined in the template.
   * *   false: Manual activation for the service is defined in the template.
   * 
   * @example
   * true
   */
  autoEnableService?: boolean;
  /**
   * @remarks
   * The URL that points to the activation page of the service.
   * 
   * > This parameter is returned if Status is set to Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=sls
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the RAM roles of the cloud service. If this parameter is empty, no RAM roles is associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * db
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the cloud service. Valid values:
   * 
   * - Enabled: The cloud service is activated.
   * - EnabledByDefault: The cloud service is activated by default.
   * - Disabled: The cloud service is not activated.
   * - Unknown: The activation status of the cloud service is unknown.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The reason why the service is in the Disabled or Unknown state.
   * 
   * > This parameter is returned if Status is set to Disabled or Unknown.
   * 
   * @example
   * resource(Eip) import info missing
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      enableURL: 'EnableURL',
      roleProvision: 'RoleProvision',
      serviceName: 'ServiceName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoEnableService: 'boolean',
      enableURL: 'string',
      roleProvision: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision,
      serviceName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    if(this.roleProvision && typeof (this.roleProvision as any).validate === 'function') {
      (this.roleProvision as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * PayType
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * PostPaid
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * lnch_Source
   */
  propertyName?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * i-8vb0smn1lf6g77md****
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * serviceinstance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      propertyName: 'PropertyName',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      propertyName: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The names of the associated parameters.
   */
  associationParameterNames?: string[];
  /**
   * @remarks
   * The behavior of the parameter. Valid values:
   * 
   * *   NoLimit: The value of this parameter is not limited.
   * *   NotSupport: The value of this parameter cannot be queried.
   * *   QueryError: The query failed.
   * 
   * >  If AllowedValues is not returned, Behavior and BehaviorReason are returned.
   * 
   * @example
   * NoLimit
   */
  behavior?: string;
  /**
   * @remarks
   * The reason why the behavior of the parameter is returned.
   * 
   * @example
   * none
   */
  behaviorReason?: string;
  /**
   * @remarks
   * The original constraint information.
   */
  originalConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * PayType
   */
  parameterKey?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      originalConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    if(Array.isArray(this.associationParameterNames)) {
      $dara.Model.validateArray(this.associationParameterNames);
    }
    if(Array.isArray(this.originalConstraints)) {
      $dara.Model.validateArray(this.originalConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUCe19W1FKaHAYAhe********
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * 8LQGp59mY23pcXeTdcvSA1cUQZBeD92sFrXi********
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * service-info-private
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the AccessKey pair expires.
   * 
   * @example
   * 2023-05-18T12:27:59Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * 221514575922756034/cn-hangzhou/d57c62fbd508xxxxxxxx.json
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAISzQN1q6Ft5B2yfSjIr5b2LouNuu5n/KOjQ3/wjGUHYdlagYGdmzz2IH1Le3NrBO8esfgymGFU6v8dlo1dYLQeHhadQI5cs80HtFqLSNaE65LswPlZ2M2ISETPJzfV9pCK
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expireDate: 'ExpireDate',
      key: 'Key',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expireDate: 'string',
      key: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The image repo ID.
   * 
   * @example
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  /**
   * @remarks
   * The image repo name.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `Private`: a private repository
   * *   `Public`: a public repository
   * 
   * @example
   * Private
   */
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The image size. Unit: bytes.
   * 
   * @example
   * 188394616
   */
  imageSize?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 5.7.2
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageSize: 'ImageSize',
      modifiedTime: 'ModifiedTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageSize: 'string',
      modifiedTime: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * **Status**：The artifact status
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The type of the deployment package to be built.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2022-10-20T02:19:53Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The distribution result of the image.
   */
  imageDelivery?: { [key: string]: string };
  /**
   * @remarks
   * The distribution progress of the deployment package.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The result file of the security scan.
   * 
   * @example
   * https://compute-nest-security-audit-bucket-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/51416747xxxx/xxxx
   */
  resultFile?: string;
  /**
   * @remarks
   * The result of the security scan. Valid values:
   * 
   * *   Normal: No risks exist on the deployment package.
   * *   AtRisk: Risks exist on the deployment package.
   * *   Processing: The deployment package is being scanned.
   * 
   * @example
   * Normal
   */
  securityAuditResult?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * "/usr/local/share/aliyun-assist/work/script/t-hz04zm90y6og0sg.sh: line 1: pip: command not found"
   */
  statusDetail?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * [
   * 					"cn-beijing",
   * 					"cn-hangzhou",
   * 					"cn-shanghai"
   * 				]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageDelivery: 'ImageDelivery',
      progress: 'Progress',
      resultFile: 'ResultFile',
      securityAuditResult: 'SecurityAuditResult',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageDelivery: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      progress: 'string',
      resultFile: 'string',
      securityAuditResult: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.imageDelivery) {
      $dara.Model.validateMap(this.imageDelivery);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   *Name*: The name of the deployment package. Fuzzy match is used.
   * *   ArtifactId: The ID of the deployment package.
   * *   ArtifactType: The type of the deployment package.
   * 
   * @example
   * ArtifactType
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyArtifactsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * {\\"CodeRepo\\":{\\"Owner\\":\\"wenle\\",\\"Platform\\":\\"github\\",\\"Branch\\":\\"main\\",\\"RepoName\\":\\"aliyun-computenest/java-springboot-demo\\"}}
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 2
   */
  maxVersion?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25rexxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListArtifactsResponseBodyArtifactsTags[];
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactId: 'ArtifactId',
      artifactType: 'ArtifactType',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactId: 'string',
      artifactType: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'string',
      name: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifactsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Filter Value Names (Equivalent to SQL\\"s WHERE Clause)
   * 
   * Available Options:
   * 
   * - UserId
   * - ServiceId
   * - ServiceVersion
   * - ServiceInstanceId
   * - DeploySucceeded (Accepts True or False and case-insensitive)
   * - ErrorType
   * - ErrorCode
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * A value of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsResponseBodyDeployDetails extends $dara.Model {
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
   * 
   * @example
   * 4
   */
  count?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2024-04-10T01:58:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The period over which data is aggregated.
   * 
   * @example
   * Month
   */
  cycle?: string;
  /**
   * @remarks
   * The indicates whether the deployment was successful.
   * 
   * @example
   * False
   */
  deploySucceeded?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * StackValidationFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * {code: StackValidationFailed, message: \\"Failed to continue create ROS stack 89e724e2-84e6-4517-a372-30a545ab4145: Resource [LinuxInstanceRunCommand]: i-wz91nfbh1fxtmfb0try4 are not running. Command invocation only support running instances. ErrorCode: StackValidationFailed\\", requestId: null}
   */
  errorDetail?: string;
  /**
   * @remarks
   * The type of error that caused the deployment to fail.
   * 
   * @example
   * ValidationError
   */
  errorType?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c751ed91f2074af39779
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-273e8cee11d349e1803c
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The name of the service in Chinese.
   * 
   * @example
   * 测试服务(Test Service)
   */
  serviceNameChn?: string;
  /**
   * @remarks
   * The name of the service in English.
   * 
   * @example
   * Test Service
   */
  serviceNameEng?: string;
  /**
   * @remarks
   * The type of service. 
   * 
   * Possible values:
   * 
   * - private: Deployed under the user\\"s account.
   * - managed: Hosted under the service provider\\"s account.
   * - operation: Managed operation service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 42
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The timestamp when the response is returned.
   * 
   * @example
   * 1723946641994
   */
  timestamp?: string;
  /**
   * @remarks
   * The aliuid of user.
   * 
   * @example
   * 1591457835436382
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      createTime: 'CreateTime',
      cycle: 'Cycle',
      deploySucceeded: 'DeploySucceeded',
      errorCode: 'ErrorCode',
      errorDetail: 'ErrorDetail',
      errorType: 'ErrorType',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceNameChn: 'ServiceNameChn',
      serviceNameEng: 'ServiceNameEng',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      timestamp: 'Timestamp',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      createTime: 'string',
      cycle: 'string',
      deploySucceeded: 'string',
      errorCode: 'string',
      errorDetail: 'string',
      errorType: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceNameChn: 'string',
      serviceNameEng: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      timestamp: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   Name: The service name. If you want to perform a fuzzy match, specify the service name in the *xxx* format. For example, if the service name is My Service, you can set the filter value to *My* or *Service*.
   * *   ServiceInstanceId: The ID of the service instance.
   * *   ServiceId: The service ID.
   * *   UserId: The user ID.
   * *   Version: The service version.
   * *   Status: The status of the service instance.
   * *   DeployType: The deployment type of the service.
   * *   ServiceType: The service type.
   * *   OperationStartTimeBefore: The time before the hosted O\\&M starts.
   * *   OperationStartTimeAfter: The time after the hosted O\\&M starts.
   * *   OperationEndTimeBefore: The time before the hosted O\\&M ends.
   * *   OperationEndTimeAfter: The time after the hosted O\\&M ends.
   * *   OperatedServiceInstanceId: The ID of the hosted O\\&M instance that belongs to a private service.
   * *   OperationServiceInstanceId: The ID of the hosted O\\&M service instance that belongs to a hosted O\\&M service.
   * *   EnableInstanceOps: Whether the hosted O\\&M feature is enabled for service instances.
   * 
   * @example
   * ServiceInstanceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service instance.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WordPress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesService extends $dara.Model {
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether the private connection feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enablePrivateVpcConnection?: boolean;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the distribution source service provider.
   * 
   * @example
   * Company A
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 版本A
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      enablePrivateVpcConnection: 'boolean',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstances extends $dara.Model {
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * *   Normal: The service instance is normal.
   * *   Renewing: The service instance is being renewed.
   * *   RenewFailed: The service instance failed to be renewed.
   * *   Expired: The service instance expired.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the service instance that is used to implement hosted O\\&M.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The parameters of the service instance.
   * 
   * @example
   * {"param":"value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * si-d6ab3a63ccxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source from which the service instance is created.
   * 
   * @example
   * Supplier
   */
  source?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 1234567
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      isOperated: 'IsOperated',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      parameters: 'Parameters',
      payType: 'PayType',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      isOperated: 'boolean',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      parameters: 'string',
      payType: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   Name: the name of the service.
   * 
   * @example
   * UserAliUid
   */
  name?: string;
  /**
   * @remarks
   * The parameter value N of the filter. Valid values of N: 1 to 10.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponseBodyShareAccount extends $dara.Model {
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-12-28T02:47:46.000
   */
  createTime?: string;
  /**
   * @remarks
   * Service logo.
   * 
   * @example
   * logo
   */
  logo?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The time when the service was updated.
   * 
   * @example
   * 2023-02-13T02:16:03.756Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user aliUid.
   * 
   * @example
   * 127383705xxxxxx
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      logo: 'Logo',
      name: 'Name',
      permission: 'Permission',
      serviceId: 'ServiceId',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      logo: 'string',
      name: 'string',
      permission: 'string',
      serviceId: 'string',
      updateTime: 'string',
      userAliUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   ServiceName: the service name.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter value N of the filter. Valid values of N: 1 to 10.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBodyServiceUsages extends $dara.Model {
  /**
   * @remarks
   * The comment on the approval.
   * 
   * @example
   * Reject
   */
  comments?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c9f36ec6d19b4exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * ServiceTest
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the service application. Valid values:
   * 
   * *   Submitted: The application is submitted or is to be approved.
   * *   Approved: The application is approved.
   * *   Rejected: The application is rejected.
   * *   Canceled: The application is canceled.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * SupplierAAA
   */
  supplierName?: string;
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  /**
   * @remarks
   * The user information.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      supplierName: 'SupplierName',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createTime: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      supplierName: 'string',
      updateTime: 'string',
      userAliUid: 'number',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   Name: the name of the service.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesCommodity extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * { // Specifies whether to associate the service with the SaaS Boost commodity. Default value: false. "Enabled":true/false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The platform type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * *   SaasBoost: Saas Boost.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      saasBoostMetadata: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese.
   * *   en-US: English.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * SpringBoot-ECS容器版
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The approval type for applications for using the service. Valid values:
   * 
   * *   Manual: The applications are manual reviewed.
   * *   AutoPass: The applications are automatically approved.
   * 
   * @example
   * AutoPass
   */
  approvalType?: string;
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * artifact-21ca53ac16a643xxxxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The informathon for build service.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * OpenSource
   */
  categories?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: ListServicesResponseBodyServicesCommodity;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   spi: The service is deployed by calling the Service Provider Interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * *   container: The service is deployed by using a container.
   * *
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether the service has a beta version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasBeta?: boolean;
  /**
   * @remarks
   * Indicates whether the service has a draft version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * The latest version of the distribution source service.
   * 
   * @example
   * 1
   */
  latestResellSourceServiceVersion?: string;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The purpose of the artifact. Valid values:
   * 
   * *   ServiceDeployment: The artifact is used to create service instances.
   * *   ServiceUpgrade: The artifact is used to upgrade service instances.
   * 
   * @example
   * ServiceDeployment
   */
  relationType?: string;
  /**
   * @remarks
   * The state of distribution authorization of the service. Valid values:
   * 
   * *   CanApply: Distributors can apply for distribution permissions.
   * *   Applied: The application for distribution permissions is submitted.
   * *   Approved: The application for distribution permissions is approved.
   * 
   * @example
   * CanApply
   */
  resellApplyStatus?: string;
  /**
   * @remarks
   * The ID of the distribution service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  resellServiceId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz5b555xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the service is visible. Valid values:
   * 
   * *   INVISIBLE
   * *   DISCOVERABLE
   * 
   * @example
   * INVISIBLE
   */
  serviceDiscoverable?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a formal service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a formal service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a formal service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The source image.
   * 
   * @example
   * centos_7
   */
  sourceImage?: string;
  /**
   * @remarks
   * The ID of the distribution source service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The version of the distribution source service.
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The name of the distribution source service provider.
   * 
   * @example
   * SourceSupplier
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The state of the service. Valid values:
   * 
   * *   Draft: The service is a draft.
   * *   Submitted: The service is submitted for review. You cannot modify services in this state.
   * *   Approved: The service is approved. You cannot modify services in this state. You can publish services in this state.
   * *   Launching: The service is being published.
   * *   Online: The service is published.
   * *   Offline: The service is unpublished.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The service tags.
   */
  tags?: ListServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * The tenant type of the managed service. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The time when the service was modified.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * v2.0.0
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether the service is a virtual Internet service. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  virtualInternetService?: string;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      buildInfo: 'BuildInfo',
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      defaultVersion: 'DefaultVersion',
      deployType: 'DeployType',
      hasBeta: 'HasBeta',
      hasDraft: 'HasDraft',
      latestResellSourceServiceVersion: 'LatestResellSourceServiceVersion',
      publishTime: 'PublishTime',
      relationType: 'RelationType',
      resellApplyStatus: 'ResellApplyStatus',
      resellServiceId: 'ResellServiceId',
      resourceGroupId: 'ResourceGroupId',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceImage: 'SourceImage',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      artifactId: 'string',
      artifactVersion: 'string',
      buildInfo: 'string',
      categories: 'string',
      commodity: ListServicesResponseBodyServicesCommodity,
      commodityCode: 'string',
      createTime: 'string',
      defaultVersion: 'boolean',
      deployType: 'string',
      hasBeta: 'boolean',
      hasDraft: 'boolean',
      latestResellSourceServiceVersion: 'string',
      publishTime: 'string',
      relationType: 'string',
      resellApplyStatus: 'string',
      resellServiceId: 'string',
      resourceGroupId: 'string',
      serviceDiscoverable: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      serviceType: 'string',
      shareType: 'string',
      sourceImage: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesTags },
      tenantType: 'string',
      trialType: 'string',
      updateTime: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactBuildPropertyBuildArgs extends $dara.Model {
  /**
   * @remarks
   * The name of a specific build argument.
   * 
   * @example
   * ENV
   */
  argumentName?: string;
  /**
   * @remarks
   * The value of a specific build argument.
   * 
   * @example
   * nginx:latest
   */
  argumentValue?: string;
  static names(): { [key: string]: string } {
    return {
      argumentName: 'ArgumentName',
      argumentValue: 'ArgumentValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argumentName: 'string',
      argumentValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactBuildPropertyCodeRepo extends $dara.Model {
  /**
   * @remarks
   * The name of the branch in the code repository.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The owner of the code repository.
   * 
   * >  This parameter is available only if the git repository is private.
   * 
   * @example
   * aliyun-computenest
   */
  owner?: string;
  /**
   * @remarks
   * The platform where the code repository is hosted.
   * 
   * @example
   * github
   */
  platform?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * aliyun-computenest/quickstart-Lobexxx
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      owner: 'Owner',
      platform: 'Platform',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      owner: 'string',
      platform: 'string',
      repoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactBuildProperty extends $dara.Model {
  /**
   * @remarks
   * The build arguments used during the image build process.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile type.
   */
  buildArgs?: UpdateArtifactRequestArtifactBuildPropertyBuildArgs[];
  /**
   * @remarks
   * The address of the code repository.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile or Buildpacks type.
   */
  codeRepo?: UpdateArtifactRequestArtifactBuildPropertyCodeRepo;
  /**
   * @remarks
   * The command content.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * echo "start run command"
   */
  commandContent?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances.
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances.
   * *   RunShellScript: shell command, applicable to Linux instances.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The relative path to the Dockerfile within the code repository.
   * 
   * >  This parameter is available only if the ArtifactBuildType is Dockerfile type.
   * 
   * @example
   * ./file/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @remarks
   * The region ID where the source mirror image is located.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The pull location of the source container image. This is used for the command docker pull ${SourceContainerImage}.
   * 
   * >  This parameter is available only if the ArtifactBuildType is ContainerImage type.
   * 
   * @example
   * pytorch/pytorch:2.5.1-cuda12.4-cudnn9-devel
   */
  sourceContainerImage?: string;
  /**
   * @remarks
   * The source image id. Supported Types:
   * 
   * - Image ID: Pass the Image ID of the Ecs image directly.
   * 
   * - OOS Common Parameter Name: Obtain the corresponding Image ID automatically by using the OOS common parameter name.
   * 
   * >  This parameter is available only if the deployment package is a ecs image type.
   * 
   * @example
   * Image ID：m-t4nhenrdc38pe4*****
   * ubuntu_22_04_x64_20G_alibase_20240926.vhd
   * OOS Common Parameter Name：aliyun/services/computenest/images/aliyun_3_2104_python_3_11
   */
  sourceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      codeRepo: 'CodeRepo',
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      dockerfilePath: 'DockerfilePath',
      regionId: 'RegionId',
      sourceContainerImage: 'SourceContainerImage',
      sourceImageId: 'SourceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': UpdateArtifactRequestArtifactBuildPropertyBuildArgs },
      codeRepo: UpdateArtifactRequestArtifactBuildPropertyCodeRepo,
      commandContent: 'string',
      commandType: 'string',
      dockerfilePath: 'string',
      regionId: 'string',
      sourceContainerImage: 'string',
      sourceImageId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(this.codeRepo && typeof (this.codeRepo as any).validate === 'function') {
      (this.codeRepo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactProperty extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity version of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * m-0xij191j9cuev6ucxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Container Registry  repository.
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * crr-yy4g68uhi39ttkm8
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the Container Registry repository.
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * volcanosh/vc-webhook-manager
   */
  repoName?: string;
  /**
   * @remarks
   * The type of the repository.Valid values:
   * 
   * *   `Public`: a public repository.
   * *   `Private`: a private repository.
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * Public
   */
  repoType?: string;
  /**
   * @remarks
   * The version tag of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the deployment package object.
   * 
   * 
   * > Note This parameter is available only if the deployment package is an file.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      imageId: 'ImageId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
      tag: 'Tag',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      imageId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
      tag: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodityComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available to the public.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is not available to the public.
   * 
   * @example
   * This parameter is not available to the public.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      mappings: 'Mappings',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.mappings) {
      $dara.Model.validateMap(this.mappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodityMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * Metering entity ID.
   * 
   * @example
   * cmgj0006xxxx-Memory-1
   */
  entityId?: string;
  /**
   * @remarks
   * Metric name, required when type is ComputeNestBill or ComputeNestPrometheus.
   * 
   * @example
   * VirtualCpu/ecs.InstanceType
   */
  metricName?: string;
  /**
   * @remarks
   * Promql statement.
   * 
   * @example
   * avg_over_time(sum(rate(container_cpu_usage_seconds_total{namespace=~"ALIYUN::StackName"}[2m]))[1h:10s])
   */
  promql?: string;
  /**
   * @remarks
   * Type. Valid values:
   * 
   * - Custom
   * - ComputeNestBill
   * - ComputeNestPrometheus
   * - ComputeNestTime
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodityMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * Metering entity IDs.
   */
  entityIds?: string[];
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * This parameter is not publicly accessible.
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * The service ID.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: { 'type': 'array', 'itemType': 'string' },
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityIds)) {
      $dara.Model.validateArray(this.entityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommoditySpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * Specification code.
   * 
   * @example
   * yuncode5767800001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * Type, value：
   * 
   * * **Custom**
   * * **ComputeNestBill**
   * * **ComputeNestPrometheus**
   * * **ComputeNestTime**
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Product Specifications and Template/specification mapping Relationships (Cloud Marketplace - Subscription/Permanent Use)
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available to the public.
   */
  componentsMappings?: UpdateServiceRequestCommodityComponentsMappings[];
  /**
   * @remarks
   * Metering entity extra information.
   */
  meteringEntityExtraInfos?: UpdateServiceRequestCommodityMeteringEntityExtraInfos[];
  /**
   * @remarks
   * Binding relationship between templates/specifications and metering dimensions (marketplace - PayAsYouGo)
   */
  meteringEntityMappings?: UpdateServiceRequestCommodityMeteringEntityMappings[];
  /**
   * @remarks
   * SaaS Boost configuration.
   * 
   * @example
   * {}
   */
  saasBoostConfig?: string;
  /**
   * @remarks
   * Product specifications and template/package mappings (Used in marketplace - subscription scenario)
   */
  specificationMappings?: UpdateServiceRequestCommoditySpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      saasBoostConfig: 'SaasBoostConfig',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityMeteringEntityMappings },
      saasBoostConfig: 'string',
      specificationMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommoditySpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestComplianceMetadata extends $dara.Model {
  /**
   * @remarks
   * The compliance pack.
   */
  compliancePacks?: string[];
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * Protocol name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Protocol url.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfoSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 5.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: UpdateServiceRequestServiceInfoAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Metric Name, filled in when Type is ComputeNestBill or ComputeNestPrometheus
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * The URL of the detailed description of the service.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: UpdateServiceRequestServiceInfoSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfoSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestUpdateOption extends $dara.Model {
  /**
   * @remarks
   * Whether to update artifact.
   * 
   * @example
   * true
   */
  updateArtifact?: boolean;
  /**
   * @remarks
   * Update from. Valid values:
   * 
   * - CODE
   * - PARAMETERS
   * 
   * @example
   * PARAMETERS
   */
  updateFrom?: string;
  static names(): { [key: string]: string } {
    return {
      updateArtifact: 'UpdateArtifact',
      updateFrom: 'UpdateFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateArtifact: 'boolean',
      updateFrom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * Protocol name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Protocol url.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfoSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 5.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: UpdateServiceShrinkRequestServiceInfoAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Metric Name, filled in when Type is ComputeNestBill or ComputeNestPrometheus
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * The URL of the detailed description of the service.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: UpdateServiceShrinkRequestServiceInfoSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfoSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * The Actions.
   */
  action?: string[];
  /**
   * @remarks
   * The responses.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBodyDryRunResultRolePolicy extends $dara.Model {
  /**
   * @remarks
   * The missing  ram policy for deploying role.
   */
  missingPolicy?: UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy[];
  /**
   * @remarks
   * The required ram policy for deploying role.
   * 
   * @example
   * {
   * 	"Statement": [{
   * 		"Action": ["oos:CancelExecutions", "oos:DeleteExecutions", "oos:GetTemplate", "oos:ListExecutions", "oos:ListTemplates", "oos:NotifyExecution", "oos:StartExecution"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}, {
   * 		"Action": ["ram:PassRole"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}, {
   * 		"Action": ["ros:CreateStack", "ros:GetStack", "ros:UpdateStack", "ros:ListStackEvents", "ros:ListStackResources", "ros:ListStackResources", "ros:DeleteStack", "ram:GetRole"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}],
   * 	"Version": "1"
   * }
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy },
      policy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The required ram policy for deploying role.
   */
  rolePolicy?: UpdateServiceResponseBodyDryRunResultRolePolicy;
  static names(): { [key: string]: string } {
    return {
      rolePolicy: 'RolePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePolicy: UpdateServiceResponseBodyDryRunResultRolePolicy,
    };
  }

  validate() {
    if(this.rolePolicy && typeof (this.rolePolicy as any).validate === 'function') {
      (this.rolePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequestLicenseData extends $dara.Model {
  /**
   * @remarks
   * The Custom Data
   * 
   * @example
   * {"Test"}
   */
  customData?: string;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-63b8a060e9d54cxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The shared account and permissions of the service.
   * 
   * This parameter is required.
   */
  sharedAccounts?: AddServiceSharedAccountsRequestSharedAccounts[];
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sharedAccounts: 'SharedAccounts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      sharedAccounts: { 'type': 'array', 'itemType': AddServiceSharedAccountsRequestSharedAccounts },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedAccounts)) {
      $dara.Model.validateArray(this.sharedAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2815213-EA4F-5759-8EA1-56DD051BB3FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddServiceSharedAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddServiceSharedAccountsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Approval comments.
   * 
   * @example
   * Welcome to TuGraph. Your application has been approved. Should you have any questions, please feel free to email us at tugraph@service.alipay.com or call our contact number 400-903-0809. Contact person: Yuansu.
   */
  comments?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * ServiceSharedAccountType，
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * User ali uid.
   * 
   * This parameter is required.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      comments: 'Comments',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'number',
      userAliUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveServiceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveServiceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: string;
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
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      parameters: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: ContinueDeployServiceInstanceResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82DF27ED-E538-5AC0-A11C-39334A873189
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: ContinueDeployServiceInstanceResponseBodyDryRunResult,
      requestId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueDeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContinueDeployServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildProperty?: CreateArtifactRequestArtifactBuildProperty;
  /**
   * @remarks
   * The type of the artifact build task. Valid values:
   * 
   * - EcsImage: Build ECS (Elastic Container Service) image.
   * 
   * - Dockerfile: Build container image based on Dockerfile.
   * 
   * - Buildpacks: Build container image based on Buildpacks.
   * 
   * - ContainerImage: Rebuild container image by renaming an existing container image.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment object.
   */
  artifactProperty?: CreateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   EcsImage: Elastic Compute Service (ECS) image.
   * *   AcrImage: container image.
   * *   File: Object Storage Service (OSS) object.
   * *   Script: script.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The supported regions.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactRequestTag[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: CreateArtifactRequestArtifactBuildProperty,
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: CreateArtifactRequestArtifactProperty,
      artifactType: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactRequestTag },
      versionName: 'string',
    };
  }

  validate() {
    if(this.artifactBuildProperty && typeof (this.artifactBuildProperty as any).validate === 'function') {
      (this.artifactBuildProperty as any).validate();
    }
    if(this.artifactProperty && typeof (this.artifactProperty as any).validate === 'function') {
      (this.artifactProperty as any).validate();
    }
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
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

export class CreateArtifactShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildPropertyShrink?: string;
  /**
   * @remarks
   * The type of the artifact build task. Valid values:
   * 
   * - EcsImage: Build ECS (Elastic Container Service) image.
   * 
   * - Dockerfile: Build container image based on Dockerfile.
   * 
   * - Buildpacks: Build container image based on Buildpacks.
   * 
   * - ContainerImage: Rebuild container image by renaming an existing container image.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment object.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   EcsImage: Elastic Compute Service (ECS) image.
   * *   AcrImage: container image.
   * *   File: Object Storage Service (OSS) object.
   * *   Script: script.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The supported regions.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactShrinkRequestTag[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildPropertyShrink: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildPropertyShrink: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      artifactType: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactShrinkRequestTag },
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
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

export class CreateArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The type of the deployment package to be built.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment object.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-11-11T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 1
   */
  maxVersion?: number;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The status of the deployment package.
   * 
   * @example
   * "/usr/local/share/aliyun-assist/work/script/t-hz04zm90y6og0sg.sh: line 1: pip: command not found"
   */
  statusDetail?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * [
   * 			"cn-beijing",
   * 			"cn-hangzhou",
   * 			"cn-shanghai"
   * 		]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      requestId: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArtifactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {
   *   "TemplateUrl": "http://template.file.url",
   *   // 应用分组级别告警元数据
   *   "ApplicationGroups": [
   *     {
   *       "Name": "applicationGroup1",
   *       "TemplateUrl": "url1"
   *     },
   *     {
   *       "Name": "applicationGroup2",
   *       "TemplateUrl": "url2"
   *     }
   *   ]
   * }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application. Valid values:
   * 
   * *   Manual: The application is manually approved.
   * *   AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The parameters for building the service
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadata?: CreateServiceRequestComplianceMetadata;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"TemplateConfigs\\":[{\\"Name\\":\\"模板1\\",\\"Url\\":\\"oss://computenest-test/template" 
   *             + ".json?RegionId=cn-beijing\\",\\"PredefinedParameters\\":[{\\"Name\\":\\"低配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":40}},{\\"Name\\":\\"高配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":200}}]}]}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * This parameter is required.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service.
   * *   false: performs a dry run for the request, and create a service if the request passes the dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable the hosted O\\&M feature for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is required if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {\\"RetentionDays\\":3}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * { "Logstores": [ { "LogstoreName": "access-log", "LogPath": "/home/admin/app/logs", # This parameter is not required for containers. Configure the parameter in the YAML file. "FilePattern": "access.log\\*" # This parameter is not required for containers. Configure the parameter in the YAML file. } ] }
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
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
   * Whether resell is supported.
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25refu7r3opq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: CreateServiceRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The source service ID for resell。
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The source service version for resell。
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceRequestTag[];
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * Draft
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildParameters: 'BuildParameters',
      clientToken: 'ClientToken',
      complianceMetadata: 'ComplianceMetadata',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      dryRun: 'DryRun',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      tag: 'Tag',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildParameters: 'string',
      clientToken: 'string',
      complianceMetadata: CreateServiceRequestComplianceMetadata,
      deployMetadata: 'string',
      deployType: 'string',
      dryRun: 'boolean',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfo },
      serviceType: 'string',
      shareType: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceRequestTag },
      tenantType: 'string',
      trialDuration: 'number',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.complianceMetadata && typeof (this.complianceMetadata as any).validate === 'function') {
      (this.complianceMetadata as any).validate();
    }
    if(Array.isArray(this.serviceInfo)) {
      $dara.Model.validateArray(this.serviceInfo);
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

export class CreateServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {
   *   "TemplateUrl": "http://template.file.url",
   *   // 应用分组级别告警元数据
   *   "ApplicationGroups": [
   *     {
   *       "Name": "applicationGroup1",
   *       "TemplateUrl": "url1"
   *     },
   *     {
   *       "Name": "applicationGroup2",
   *       "TemplateUrl": "url2"
   *     }
   *   ]
   * }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application. Valid values:
   * 
   * *   Manual: The application is manually approved.
   * *   AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The parameters for building the service
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadataShrink?: string;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"TemplateConfigs\\":[{\\"Name\\":\\"模板1\\",\\"Url\\":\\"oss://computenest-test/template" 
   *             + ".json?RegionId=cn-beijing\\",\\"PredefinedParameters\\":[{\\"Name\\":\\"低配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":40}},{\\"Name\\":\\"高配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":200}}]}]}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * This parameter is required.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service.
   * *   false: performs a dry run for the request, and create a service if the request passes the dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable the hosted O\\&M feature for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is required if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {\\"RetentionDays\\":3}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * { "Logstores": [ { "LogstoreName": "access-log", "LogPath": "/home/admin/app/logs", # This parameter is not required for containers. Configure the parameter in the YAML file. "FilePattern": "access.log\\*" # This parameter is not required for containers. Configure the parameter in the YAML file. } ] }
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
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
   * Whether resell is supported.
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25refu7r3opq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: CreateServiceShrinkRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The source service ID for resell。
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The source service version for resell。
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceShrinkRequestTag[];
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * Draft
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildParameters: 'BuildParameters',
      clientToken: 'ClientToken',
      complianceMetadataShrink: 'ComplianceMetadata',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      dryRun: 'DryRun',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      tag: 'Tag',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildParameters: 'string',
      clientToken: 'string',
      complianceMetadataShrink: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      dryRun: 'boolean',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfo },
      serviceType: 'string',
      shareType: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceShrinkRequestTag },
      tenantType: 'string',
      trialDuration: 'number',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfo)) {
      $dara.Model.validateArray(this.serviceInfo);
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

export class CreateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: CreateServiceResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: CreateServiceResponseBodyDryRunResult,
      requestId: 'string',
      serviceId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the service instance was released.
   * 
   * >  This parameter is available only for the service instances that are managed by service providers.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-12T03:13:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are specified for service instance deployment.
   * 
   * >  If you want to specify the region in which the service instance is deployed, you must specify the information in Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   ap-southeast-1: Singapore
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
   * rg-aekzuqyxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceRequestTag[];
  /**
   * @remarks
   * The template name. You must specify a template name if the service supports multiple templates.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
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

export class CreateServiceInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the service instance was released.
   * 
   * >  This parameter is available only for the service instances that are managed by service providers.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-12T03:13:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are specified for service instance deployment.
   * 
   * >  If you want to specify the region in which the service instance is deployed, you must specify the information in Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   ap-southeast-1: Singapore
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
   * rg-aekzuqyxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The template name. You must specify a template name if the service supports multiple templates.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-c2d118c9193e49xxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactVersion: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteArtifactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The IDs of the service instances.
   * 
   * This parameter is required.
   */
  serviceInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstanceId)) {
      $dara.Model.validateArray(this.serviceInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB140E67-D75F-5585-946E-41D8DC8F4E00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8A6AEA6-0D8F-589A-A7FF-B44FD842456E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of operation N for which you want to generate the policy information.
   */
  operationTypes?: string[];
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-6c20f0f8085645xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      operationTypes: 'OperationTypes',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies that are missing.
   */
  missingPolicy?: GenerateServicePolicyResponseBodyMissingPolicy[];
  /**
   * @remarks
   * The RAM policy.
   * 
   * @example
   * {Statement": [{ "Action": ["oos:*"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:DescribeInstances"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:RunInstance"], "Effect": "Allow", "Resource": "*"}], "Version": "1"}
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5040BE9E-8DA2-5C9D-9B70-0EE6027A14BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': GenerateServicePolicyResponseBodyMissingPolicy },
      policy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateServicePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateServicePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * gpu-test
   */
  artifactName?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 1
   */
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactName: 'ArtifactName',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactName: 'string',
      artifactVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The type of the deployment package to be built.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 2
   */
  maxVersion?: number;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Permission fields are applicable to container image artifact and Helm Chart artifact They can only change from Automatic to Public. Options:
   * - Public
   * - Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The distribution progress of the deployment package.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * "/usr/local/share/aliyun-assist/work/script/t-hz04zm90y6og0sg.sh: line 1: pip: command not found"
   */
  statusDetail?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * ["cn-hangzhou","cn-beijing"]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The tags of the deployment package.
   */
  tags?: GetArtifactResponseBodyTags[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      permissionType: 'PermissionType',
      progress: 'Progress',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportRegionIds: 'SupportRegionIds',
      tags: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      permissionType: 'string',
      progress: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      tags: { 'type': 'array', 'itemType': GetArtifactResponseBodyTags },
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   File: Object Storage Service (OSS) object.
   * *   AcrImage: container image.
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      deployRegionId: 'DeployRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      deployRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resources that can be uploaded.
   */
  availableResources?: GetArtifactRepositoryCredentialsResponseBodyAvailableResources[];
  /**
   * @remarks
   * The credentials.
   */
  credentials?: GetArtifactRepositoryCredentialsResponseBodyCredentials;
  /**
   * @remarks
   * The time when the credentials expired.
   * 
   * @example
   * 1526549792000
   */
  expireDate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E89857-B994-44B6-9C4F-DBD200E9XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      credentials: 'Credentials',
      expireDate: 'ExpireDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': GetArtifactRepositoryCredentialsResponseBodyAvailableResources },
      credentials: GetArtifactRepositoryCredentialsResponseBodyCredentials,
      expireDate: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableResources)) {
      $dara.Model.validateArray(this.availableResources);
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactRepositoryCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactRepositoryCredentialsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter information based on Alibaba Cloud account IDs.
   * 
   * @example
   * false
   */
  filterAliUid?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-4ee86df83fd948******
   */
  serviceId?: string;
  /**
   * @remarks
   * The Service Instance Id.
   * 
   * @example
   * si-85b1exxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The Service Name.
   * 
   * @example
   * Wordpress社区版
   */
  serviceName?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Resell: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  sharedAccountType?: string;
  /**
   * @remarks
   * The information that you want to query.
   */
  showDetail?: string[];
  static names(): { [key: string]: string } {
    return {
      filterAliUid: 'FilterAliUid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      sharedAccountType: 'SharedAccountType',
      showDetail: 'ShowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterAliUid: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      sharedAccountType: 'string',
      showDetail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.showDetail)) {
      $dara.Model.validateArray(this.showDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {
   *   "TemplateUrl": "http://template.file.url",
   *   // 应用分组级别告警元数据
   *   "ApplicationGroups": [
   *     {
   *       "Name": "applicationGroup1",
   *       "TemplateUrl": "url1"
   *     },
   *     {
   *       "Name": "applicationGroup2",
   *       "TemplateUrl": "url2"
   *     }
   *   ]
   * }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application. Valid values:
   * 
   * *   Manual: The application is manually approved.
   * *   AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The information of build service information.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * DevOps
   */
  categories?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: GetServiceResponseBodyCommodity;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadata?: GetServiceResponseBodyComplianceMetadata;
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The binding configurations of the commodity module.
   * 
   * @example
   * componesConfigs
   */
  crossRegionConnectionStatus?: string;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"TemplateConfigs\\":[{\\"Name\\":\\"模板1\\",\\"Url\\":\\"oss://computenest-test/template" 
   *             + ".json?RegionId=cn-beijing\\",\\"PredefinedParameters\\":[{\\"Name\\":\\"低配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":40}},{\\"Name\\":\\"高配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":200}}]}]}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * *   container: The service is deployed by using a container.
   * *   pkg: The service is deployed by using a package.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  /**
   * @remarks
   * The report source.
   */
  entitySource?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is returned if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {"renewType":"MONTHLY"}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * { "Logstores": [ { "LogstoreName": "access-log", "LogPath": "/home/admin/app/logs", # This parameter is not required for containers. Configure the parameter in the YAML file. "FilePattern": "access.log\\*" # This parameter is not required for containers. Configure the parameter in the YAML file. } ] }
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The source for which fees are generated. Valid values:
   * 
   * *   None: No fees are generated.
   * *   Marketplace: Fees are generated for Alibaba Cloud Marketplace.
   * *   Custom: The custom fees.
   * 
   * @example
   * None
   */
  payFromType?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * sr-04056c2ab4b94bxxxxxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the distribution is supported. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzuqyxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The URL of the service audit file.
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/1690707531xxxxxx/service-document/be3382cd-xxxx-xxxx-xxxx-f8707ec12879.docx
   */
  serviceAuditDocumentUrl?: string;
  /**
   * @remarks
   * Indicates whether the service is visible. Valid values:
   * 
   * *   INVISIBLE
   * *   DISCOVERABLE
   * 
   * @example
   * DISCOVERABLE
   */
  serviceDiscoverable?: string;
  /**
   * @remarks
   * Service document information.
   */
  serviceDocumentInfos?: GetServiceResponseBodyServiceDocumentInfos[];
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceResponseBodyServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * http://example2.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The share status of the instance.
   * 
   * > This parameter is discontinued.
   * 
   * @example
   * This parameter is discontinued.
   */
  shareTypeStatus?: string;
  /**
   * @remarks
   * The ID of the distribution source service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The version of the distribution source service.
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The name of the distribution source service provider.
   * 
   * @example
   * SourceSupplier
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The statistics.
   */
  statistic?: GetServiceResponseBodyStatistic;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Draft: The service is a draft.
   * *   Submitted: The service is submitted for review. You cannot modify services in this state.
   * *   Approved: The service is approved. You cannot modify services in this state. You can publish services in this state.
   * *   Launching: The service is being published.
   * *   Online: The service is published.
   * *   Offline: The service is unpublished.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The description of the service status.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The service tags.
   */
  tags?: GetServiceResponseBodyTags[];
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The status of the test. Valid values:
   * 
   * *   `CONFIG_IS_NULL`: No test configurations exist.
   * *   `SERVICE_TEST_SUCCEED`: The service passed the test.
   * *   `SERVICE_TSET_DOING`: The service does not pass the test.
   * 
   * @example
   * SERVICE_TEST_SUCCEED
   */
  testStatus?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The time when the service was updated.
   * 
   * @example
   * 2021-05-22T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether the service is a virtual Internet service. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  virtualInternetService?: string;
  /**
   * @remarks
   * The ID of the virtual Internet service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  virtualInternetServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildInfo: 'BuildInfo',
      categories: 'Categories',
      commodity: 'Commodity',
      complianceMetadata: 'ComplianceMetadata',
      createTime: 'CreateTime',
      crossRegionConnectionStatus: 'CrossRegionConnectionStatus',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      entitySource: 'EntitySource',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      payFromType: 'PayFromType',
      permission: 'Permission',
      policyNames: 'PolicyNames',
      progress: 'Progress',
      publishTime: 'PublishTime',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      resellable: 'Resellable',
      resourceGroupId: 'ResourceGroupId',
      serviceAuditDocumentUrl: 'ServiceAuditDocumentUrl',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceDocumentInfos: 'ServiceDocumentInfos',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      shareTypeStatus: 'ShareTypeStatus',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      statistic: 'Statistic',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      testStatus: 'TestStatus',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      upgradeMetadata: 'UpgradeMetadata',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
      virtualInternetServiceId: 'VirtualInternetServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildInfo: 'string',
      categories: 'string',
      commodity: GetServiceResponseBodyCommodity,
      complianceMetadata: GetServiceResponseBodyComplianceMetadata,
      createTime: 'string',
      crossRegionConnectionStatus: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      entitySource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      payFromType: 'string',
      permission: 'string',
      policyNames: 'string',
      progress: 'number',
      publishTime: 'string',
      registrationId: 'string',
      requestId: 'string',
      resellable: 'boolean',
      resourceGroupId: 'string',
      serviceAuditDocumentUrl: 'string',
      serviceDiscoverable: 'string',
      serviceDocumentInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceDocumentInfos },
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      shareType: 'string',
      shareTypeStatus: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      statistic: GetServiceResponseBodyStatistic,
      status: 'string',
      statusDetail: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': GetServiceResponseBodyTags },
      tenantType: 'string',
      testStatus: 'string',
      trialDuration: 'number',
      trialType: 'string',
      updateTime: 'string',
      upgradeMetadata: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
      virtualInternetServiceId: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.complianceMetadata && typeof (this.complianceMetadata as any).validate === 'function') {
      (this.complianceMetadata as any).validate();
    }
    if(this.entitySource) {
      $dara.Model.validateMap(this.entitySource);
    }
    if(Array.isArray(this.serviceDocumentInfos)) {
      $dara.Model.validateArray(this.serviceDocumentInfos);
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(this.statistic && typeof (this.statistic as any).validate === 'function') {
      (this.statistic as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   */
  commodity?: GetServiceEstimateCostRequestCommodity;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"PayType\\":\\"PostPaid\\",\\"InstancePassword\\":\\"xxxxxxxxxx\\",\\"EcsInstanceType\\":\\"ecs.g6.large\\",\\"VSwitchId\\":\\"vsw-0jlueyydpuekoxxxxxxxx\\",\\"VpcId\\":\\"vpc-0jlps6mjbgvpqxxxxxxxx\\",\\"ZoneId\\":\\"cn-wulanchabu-a\\",\\"Enable\\":false,\\"RegionId\\":\\"cn-wulanchabu\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-16fbd358d75e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Custom_Image_Ecs
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: GetServiceEstimateCostRequestCommodity,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   */
  commodityShrink?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"PayType\\":\\"PostPaid\\",\\"InstancePassword\\":\\"xxxxxxxxxx\\",\\"EcsInstanceType\\":\\"ecs.g6.large\\",\\"VSwitchId\\":\\"vsw-0jlueyydpuekoxxxxxxxx\\",\\"VpcId\\":\\"vpc-0jlps6mjbgvpqxxxxxxxx\\",\\"ZoneId\\":\\"cn-wulanchabu-a\\",\\"Enable\\":false,\\"RegionId\\":\\"cn-wulanchabu\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-16fbd358d75e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Custom_Image_Ecs
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityShrink: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   * 
   * @example
   * {\\"PayPeriodUnit\\":Month,\\"PayPeriod\\":1}
   */
  commodity?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * @example
   * {
   *       "ECSInstances":{
   *         "Type":"ALIYUN::ECS::InstanceGroup",
   *         "Success":true,
   *         "Result":{
   *           "Order":{
   *             "Currency":"CNY",
   *             "RuleIds":[
   *               1752723
   *             ],
   *             "DetailInfos":{
   *               "ResourcePriceModel":[
   *                 {
   *                   "Resource":"bandwidth",
   *                   "TradeAmount":0.0,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.0,
   *                   "DiscountAmount":0.0
   *                 },
   *                 {
   *                   "Resource":"image",
   *                   "TradeAmount":0.0,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.0,
   *                   "DiscountAmount":0.0
   *                 },
   *                 {
   *                   "Resource":"instanceType",
   *                   "TradeAmount":0.006966,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.45,
   *                   "DiscountAmount":0.443034
   *                 },
   *                 {
   *                   "Resource":"systemDisk",
   *                   "TradeAmount":0.000867,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.056,
   *                   "DiscountAmount":0.055133
   *                 },
   *                 {
   *                   "Resource":"dataDisk",
   *                   "TradeAmount":0.002167,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.14,
   *                   "DiscountAmount":0.137833
   *                 }
   *               ]
   *             }
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.commodity) {
      $dara.Model.validateMap(this.commodity);
    }
    if(this.resources) {
      $dara.Model.validateMap(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceEstimateCostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceEstimateCostResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceRequest extends $dara.Model {
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
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * *   Normal: The service instance is normal.
   * *   Renewing: The service instance is being renewed.
   * *   RenewFailed: The service instance failed to be renewed.
   * *   Expired: The service instance expired.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Indicates whether the Prometheus monitoring feature is enabled on the user side.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * https://g.xxxxxx.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxxxx-quickstart-and-dashboard?orgId=355401&refresh=10s
   */
  grafanaDashBoardUrl?: string;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {"renewType":"MONTHLY"}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The network configurations.
   * 
   * >  This parameter is discontinued.
   */
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  /**
   * @remarks
   * The ID of the service instance that is used to implement hosted O\\&M.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * Operate extra info
   * 
   * @example
   * 6cc5ce3590ed7f5529e85fec
   */
  operationExtraInfo?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The outputs returned from creating the service instance.
   * 
   * *   If the service is deployed by using a ROS template, all output fields of the template are returned.
   * *   If the service is deployed by calling an SPI operation, the output fields of the service provider and for the Compute Nest additional features are returned.
   * 
   * @example
   * {
   *       "InstanceIds": [
   *             "i-hp38ofxl0dsyfi7z****"
   *       ]
   * }
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  predefinedParameterName?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The logon URL for the accounts in the resource directory corresponding to the service instance.
   * 
   * @example
   * https://signin.aliyun.com/switchRole.htm?parentAlias=1307782318217247.onaliyun.com&roleName=ResourceDirectoryAccountAccessRole
   */
  rdAccountLoginUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * @example
   * [
   *       {
   *             "StackId": "stack-xxx"
   *       }
   * ]
   */
  resources?: string;
  /**
   * @remarks
   * The information about the service to which the service instance belongs.
   */
  service?: GetServiceInstanceResponseBodyService;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source of the service instance. Valid values:
   * 
   * *   User: Compute Nest customer
   * *   Market: Alibaba Cloud Marketplace
   * *   Supplier: Compute Nest service provider
   * 
   * @example
   * User
   */
  source?: string;
  /**
   * @remarks
   * The deployment state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment state of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 1964460391538545
   */
  supplierUid?: number;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: GetServiceInstanceResponseBodyTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 1234567
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      isOperated: 'IsOperated',
      licenseMetadata: 'LicenseMetadata',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationExtraInfo: 'OperationExtraInfo',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
      rdAccountLoginUrl: 'RdAccountLoginUrl',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierUid: 'SupplierUid',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      isOperated: 'boolean',
      licenseMetadata: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationExtraInfo: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
      rdAccountLoginUrl: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supplierUid: 'number',
      tags: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"RegionId\\":\\"cn-hangzhou\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-20b8a396048346xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"RegionId\\":\\"cn-hangzhou\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-20b8a396048346xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB1FA13E-1087-5654-84D5-58A0ACAD1B18
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the cloud services.
   */
  serviceProvisions?: GetServiceProvisionsResponseBodyServiceProvisions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceProvisions: 'ServiceProvisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisions },
    };
  }

  validate() {
    if(Array.isArray(this.serviceProvisions)) {
      $dara.Model.validateArray(this.serviceProvisions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceProvisionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceProvisionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the region in which the service instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  deployRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the private connection feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enablePrivateVpcConnection?: boolean;
  /**
   * @remarks
   * The parameters in the template.
   */
  parameters?: GetServiceTemplateParameterConstraintsRequestParameters[];
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-1c11f365190c44xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deployRegionId: 'DeployRegionId',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deployRegionId: 'string',
      enablePrivateVpcConnection: 'boolean',
      parameters: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsRequestParameters },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The constraint families.
   */
  familyConstraints?: string[];
  /**
   * @remarks
   * The parameters in the template.
   */
  parameterConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C81C0732-DEBC-559C-B563-7EB2BEB21088
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      familyConstraints: 'FamilyConstraints',
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyConstraints: { 'type': 'array', 'itemType': 'string' },
      parameterConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.familyConstraints)) {
      $dara.Model.validateArray(this.familyConstraints);
    }
    if(Array.isArray(this.parameterConstraints)) {
      $dara.Model.validateArray(this.parameterConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceTemplateParameterConstraintsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceTemplateParameterConstraintsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The file name to upload.
   * 
   * This parameter is required.
   * 
   * @example
   * template.yaml
   */
  fileName?: string;
  /**
   * @remarks
   * Specifies whether the file is publicly accessible. Valid values: **public** or **private**. The default value is **private**.
   * 
   * @example
   * public
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetUploadCredentialsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCC3321E-D518-1BC4-861E-588E9D4DAFB7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates the request was successful. A value of false indicates the request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUploadCredentialsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadCredentialsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The categories of the service.
   */
  categories?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Whether to set the recommended service publishing to the service directory.
   */
  recommend?: boolean;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      clientToken: 'ClientToken',
      recommend: 'Recommend',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      recommend: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The mode of the service online. Valid Type
   * 
   * - PublishNewVersion: Launch new version
   * - PublishOfflineVersion:  The offline version is online again.
   * - UpdateLatestVersion: Update the latest version online
   * 
   * @example
   * PublishNewVersion
   */
  serviceLaunchResultType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceLaunchResultType: 'ServiceLaunchResultType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceLaunchResultType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LaunchServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LaunchServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact. Default value: AcrImage. Valid values:
   * 
   * *   HelmChart: Helm chart image.
   * *   AcrImage: container image.
   * 
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The images.
   */
  repositories?: ListAcrImageRepositoriesResponseBodyRepositories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4A145D8-6F6C-532A-9001-9730CDA27578
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      repositories: { 'type': 'array', 'itemType': ListAcrImageRepositoriesResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.repositories)) {
      $dara.Model.validateArray(this.repositories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcrImageRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAcrImageRepositoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the deployment package. Default value: AcrImage. Valid values:
   * 
   * *   HelmChart: Helm chart image.
   * *   AcrImage: container image.
   * 
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of images.
   */
  images?: ListAcrImageTagsResponseBodyImages[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ey14..
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEF343B9-1A15-5789-BE88-7B36190F5BF6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListAcrImageTagsResponseBodyImages },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcrImageTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAcrImageTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The filter.
   */
  filters?: ListArtifactVersionsRequestFilters[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      filters: { 'type': 'array', 'itemType': ListArtifactVersionsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The filter.
   */
  filtersShrink?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      filtersShrink: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      filtersShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version information about the deployment package.
   */
  artifacts?: ListArtifactVersionsResponseBodyArtifacts[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactVersionsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListArtifactsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25yfxxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListArtifactsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListArtifactsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListArtifactsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

export class ListArtifactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about deployment packages.
   */
  artifacts?: ListArtifactsResponseBodyArtifacts[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The time zone.
   * 
   * Reference Format: "+08:00"
   * 
   * Valid Range: "-12:59" to "+13:00"
   * 
   * @example
   * +08:00
   */
  cycleTimeZone?: string;
  /**
   * @remarks
   * Determines the time period over which data is aggregated. If no aggregation dimension is specified, the query defaults to providing detailed, unaggregated results.
   * 
   * Optional Values:
   * 
   * - Year
   * - Month
   * - Day
   * - All
   * 
   * @example
   * Month
   */
  cycleType?: string;
  /**
   * @remarks
   * The dimension names. (Equivalent to SQL\\"s GROUP BY Clause)
   * Optional Values:
   * 
   * - UserId
   * - ServiceId
   * - ServiceVersion
   * - ServiceInstanceId
   * - DeploySucceeded
   * - ErrorType
   * - ErrorCode
   */
  dimension?: string[];
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2024-12-31T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstanceDeployDetailsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAZbOYA+x9UgM6xrgcMqFUjk=
   */
  nextToken?: string;
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
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2024-08-25T02:23:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cycleTimeZone: 'CycleTimeZone',
      cycleType: 'CycleType',
      dimension: 'Dimension',
      endTime: 'EndTime',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleTimeZone: 'string',
      cycleType: 'string',
      dimension: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      filter: { 'type': 'array', 'itemType': ListServiceInstanceDeployDetailsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimension)) {
      $dara.Model.validateArray(this.dimension);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the service instance deployment.
   */
  deployDetails?: ListServiceInstanceDeployDetailsResponseBodyDeployDetails[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0036D82E-0624-5B37-B797-C460F4B02026
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployDetails: 'DeployDetails',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployDetails: { 'type': 'array', 'itemType': ListServiceInstanceDeployDetailsResponseBodyDeployDetails },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployDetails)) {
      $dara.Model.validateArray(this.deployDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstanceDeployDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstanceDeployDetailsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstancesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
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
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to display the information that the service instance is deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  showDeleted?: boolean;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showDeleted: 'ShowDeleted',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showDeleted: 'boolean',
      tag: { 'type': 'array', 'itemType': ListServiceInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

export class ListServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50287CB-AABF-4877-92C0-289B339A1546
   */
  requestId?: string;
  /**
   * @remarks
   * The information about service instances.
   */
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstances: 'ServiceInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstances)) {
      $dara.Model.validateArray(this.serviceInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceSharedAccountsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAR130adlM4fHHVSWpTca/t4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permission: 'Permission',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceSharedAccountsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      permission: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA3AE512-6D30-549A-B52D-B9042CA8D515
   */
  requestId?: string;
  /**
   * @remarks
   * Service shared account information.
   */
  shareAccount?: ListServiceSharedAccountsResponseBodyShareAccount[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      shareAccount: 'ShareAccount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      shareAccount: { 'type': 'array', 'itemType': ListServiceSharedAccountsResponseBodyShareAccount },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shareAccount)) {
      $dara.Model.validateArray(this.shareAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceSharedAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceSharedAccountsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceUsagesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The role of the service provider.
   * 
   * @example
   * Supplier
   */
  supplierRole?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      supplierRole: 'SupplierRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceUsagesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      supplierRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18AD0960-A9FE-1AC8-ADF8-22131Fxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The service applications.
   */
  serviceUsages?: ListServiceUsagesResponseBodyServiceUsages[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceUsages: 'ServiceUsages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceUsages: { 'type': 'array', 'itemType': ListServiceUsagesResponseBodyServiceUsages },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceUsages)) {
      $dara.Model.validateArray(this.serviceUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceUsagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceUsagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return all versions of a service. Default value: false, which specifies that only the default version of a service is returned.
   * 
   * @example
   * false
   */
  allVersions?: boolean;
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServicesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServicesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      allVersions: 'AllVersions',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allVersions: 'boolean',
      filter: { 'type': 'array', 'itemType': ListServicesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListServicesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
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
   * The type of the resource. Valid values:
   * 
   * - service
   * - serviceinstance
   * - artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag keys.
   */
  keys?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8872ACE6-0297-54A4-8AAD-3A8623EC6C5D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  key?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfmTH5rcd4YFfob4P0uDAAc=
   */
  nextToken?: string;
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
   * The type of the resource. Valid values: 
   * - service
   * - service instance
   * - artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0631D623-D917-1C2D-ACD6-5B3B19XXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tag values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagValuesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The imported resources.
   * 
   * @example
   * {
   *   "RegionId": "cn-hangzhou",
   *   "Type": "ResourceIds",
   *   "ResourceIds": {
   *     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],
   *     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],
   *     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],
   *     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]
   *   }
   * }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d8a0cc2a1ee04dce****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of operation performed on the service instance resource. Valid values:
   * 
   * *   Import: The resource is imported.
   * *   UnImport: The resource import is canceled.
   * 
   * @example
   * Import
   */
  serviceInstanceResourcesAction?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourcesAction: 'ServiceInstanceResourcesAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      serviceInstanceId: 'string',
      serviceInstanceResourcesAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyServiceInstanceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyServiceInstanceResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreLaunchServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-f7024a22ea5149xxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreLaunchServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreLaunchServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreLaunchServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PreLaunchServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataRequest extends $dara.Model {
  /**
   * @remarks
   * The metering data. Parameters in the example value:
   * 
   * *   InstanceId: the ID of an instance in Alibaba Cloud Marketplace. Parameter type: STRING.
   * 
   * *   StartTime: the time when the metering operation started. Set the parameter to a UNIX timestamp. Unit: seconds. Parameter type: LONG.
   * 
   * *   EndTime: the time when the metering operation ended. Set the parameter to a UNIX timestamp. Unit: seconds. Parameter type: LONG.
   * 
   * *   Entities: the metering entities. Parameter type: LIST.
   * 
   *     *   Key: the name of the metering item. Parameter type: STRING.
   * 
   *         *   Frequency: the number of times the instance was used.
   *         *   Period: the usage duration of the instance. Unit: seconds.
   * 
   *     Note: The metering unit is second, whereas the billing unit is hour. Therefore, when bills are generated, seconds are converted to hours. For example, the usage metered from 19:00 to 20:00 is 1800 seconds and the price is USD 1 per hour. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 1800/3600 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.
   * 
   *           - Storage: The used storage space. Unit: bytes.   
   *            Note: The metering unit is byte, whereas the billing unit is MB. Therefore, when bills are generated, bytes are converted to megabytes. For example, the usage metered from 19:00 to 20:00 is 524,288 bytes and the price is USD 1 per MB. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 524288/1024/1024 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.  - NetworkOut: the upstream traffic consumed. Unit: bit.  
   *            Note: The metering unit is bit, whereas the billing unit is Mbit. Therefore, when bills are generated, bits are converted to megabits. For example, the usage metered from 19:00 to 20:00 is 524,288 bits and the price is USD 1 per Mbit. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 524288/1024/1024 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.  - NetworkIn: the downstream traffic consumed. Unit: bit.  
   *            Note: The metering unit is bit, whereas the billing unit is Mbit. Therefore, when bills are generated, bits are converted to megabits. For example, the usage metered from 19:00 to 20:00 is 524,288 bits and the price is USD 1 per Mbit. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 524288/1024/1024 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.  - Character: the number of characters.
   *           - DailyActiveUser: the number of daily active users (DAU).
   *           - PeriodMin: the usage duration of the instance. Unit: minutes.  - VirtualCpu: the number of virtual CPU cores.
   * 
   *     *   Value: the value of the metering item. The value is equal to or greater than 0. Parameter type: INTEGER.
   * 
   * **Note**:
   * 
   * *   If bills are generated for the commodity in real time, the difference between the values of StartTime and EndTime is not limited. However, the time specified by EndTime must be later than that specified by StartTime.
   * *   If bills are generated for the commodity by billing cycle, such as by hour, by day, or by month, the difference between the values of StartTime and EndTime must be greater than 5 minutes.
   * *   In a request for pushing multiple metering data records, the values of InstanceId must indicate instances of the same commodity. You cannot push metering data of instances of multiple commodities at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"StartTime\\":1681264800,\\"EndTime\\":1681268400,\\"Entities\\":[{\\"Key\\":\\"Unit\\",\\"Value\\":\\"0\\"}]}]
   */
  metering?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      metering: 'Metering',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metering: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E89857-B994-44B6-9C4F-DBD200E9XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMeteringDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushMeteringDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-f7024a22ea5149xxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * sr-72dd5071e90c40xxxxxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-2713-52C8-AFFC-C26E5180456E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Reject comments.
   * 
   * @example
   * Thanks for your application, please add your industry information.
   */
  comments?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-2117508c874c41xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * User ali uid.
   * 
   * This parameter is required.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      comments: 'Comments',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
      serviceId: 'string',
      type: 'number',
      userAliUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectServiceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RejectServiceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-9feded91880e4c78xxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * artifact-9feded91880e4c78xxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The content of the artifact.
   * 
   * @example
   * "{\\"Url\\":\\"https://computenest-artifacts-draft-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/130920852836xxxx/cn-hangzhou/service-8072a04e5a134382xxxx/165095355xxxx/changes.txt\\",\\"ConfigurationMetadata\\":\\"{\\\\\\"WorkDir\\\\\\":\\\\\\"/root\\\\\\",\\\\\\"Platform\\\\\\":\\\\\\"Linux\\\\\\",\\\\\\"CommandType\\\\\\":\\\\\\"RunShellScript\\\\\\",\\\\\\"UpgradeScript\\\\\\":\\\\\\"cd /root\\\\\\\\ncp changes.txt cpchanges.txt\\\\\\\\nmv changes.txt mvchangge.txt\\\\\\"}\\"}"
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the artifact.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the artifact.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the artifact was modified.
   * 
   * @example
   * 1650954178000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3818BA7D-3F50-1A44-9FF3-04A52A59XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the artifact. Valid values:
   * 
   * *   Created: The artifact is created.
   * *   Scanning: The artifact is being scanned.
   * *   ScanFailed: The artifact failed to be scanned.
   * *   Delivering: The artifact is being distributed.
   * *   Available: The artifact is available.
   * *   Deleted: The artifact is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The version name of the artifact.
   * 
   * @example
   * V1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseArtifactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  /**
   * @remarks
   * Whitelist accounts for service sharing.
   * 
   * This parameter is required.
   */
  userAliUids?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUids: 'UserAliUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'string',
      userAliUids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userAliUids)) {
      $dara.Model.validateArray(this.userAliUids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServiceSharedAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServiceSharedAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveServiceSharedAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveServiceSharedAccountsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a value from your client to ensure it is unique across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * You can obtain the service instance ID by calling [ListServiceInstances - Query Service Instance List](https://help.aliyun.com/document_detail/396200.html).
   * 
   * @example
   * si-3a8f9a75da074f52b969
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE9EF87D-46F8-5AF6-9A65-6B034E204136
   */
  requestId?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * @example
   * si-5289e1d6d0c14397881d
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The deployment status of the service instance. Possible values:
   * 
   * - Created: Created
   * 
   * - Deploying: Deploying
   * 
   * - DeployedFailed: Deployment Failed
   * 
   * - Deployed: Deployed
   * 
   * - Upgrading: Upgrading
   * 
   * - UpgradeRollbacking: Rolling Back
   * 
   * - Deleting: Deleting
   * 
   * - Deleted: Deleted
   * 
   * - DeletedFailed: Deletion Failed
   * 
   * @example
   * UpgradeRollbacking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2E91D771-0183-52CE-86CB-882D99B2CB77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region id where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-c39ed4779cec449f****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49A369EF-A302-5006-B0CE-94CED47C38CF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
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
   * The resource IDs. You can specify at most 50 resource IDs in each call.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid value:
   * - service
   * - serviceinstance
   * - artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you specify both the All and TagKey.N parameters, the All parameter does not take effect.
   * 
   * @example
   * false
   */
  all?: boolean;
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
   * The resource IDs. You can specify at most 50 resource IDs in each call.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. valid value:
   * 
   * - service
   * - serviceinstance
   * - artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify 1 to 20 tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildProperty?: UpdateArtifactRequestArtifactBuildProperty;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   */
  artifactProperty?: UpdateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Permission fields are applicable to container image artifact and Helm Chart artifact. They can only change from Automatic to Public. Options:
   * 
   * Public
   * 
   * Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The IDs of the regions that support the deployment package.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      clientToken: 'ClientToken',
      description: 'Description',
      permissionType: 'PermissionType',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: UpdateArtifactRequestArtifactBuildProperty,
      artifactId: 'string',
      artifactProperty: UpdateArtifactRequestArtifactProperty,
      clientToken: 'string',
      description: 'string',
      permissionType: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  validate() {
    if(this.artifactBuildProperty && typeof (this.artifactBuildProperty as any).validate === 'function') {
      (this.artifactBuildProperty as any).validate();
    }
    if(this.artifactProperty && typeof (this.artifactProperty as any).validate === 'function') {
      (this.artifactProperty as any).validate();
    }
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   */
  artifactBuildPropertyShrink?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Permission fields are applicable to container image artifact and Helm Chart artifact. They can only change from Automatic to Public. Options:
   * 
   * Public
   * 
   * Automatic
   * 
   * @example
   * Public
   */
  permissionType?: string;
  /**
   * @remarks
   * The IDs of the regions that support the deployment package.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildPropertyShrink: 'ArtifactBuildProperty',
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      clientToken: 'ClientToken',
      description: 'Description',
      permissionType: 'PermissionType',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildPropertyShrink: 'string',
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      clientToken: 'string',
      description: 'string',
      permissionType: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportRegionIds)) {
      $dara.Model.validateArray(this.supportRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build properties of the artifact, utilized for hosting and building the deployment package.
   * 
   * @example
   * "{\\"RegionId\\":\\"xxx\\", \\"SourceImageId\\":\\"xxx\\", \\"\\":\\"xxx\\", \\"CommandType\\":\\"xxx\\", \\"CommandContent\\":\\"xxx\\"}"
   */
  artifactBuildProperty?: string;
  /**
   * @remarks
   * The type of the deployment package to be built.
   * 
   * @example
   * Dockerfile
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The status of the deployment package.
   * 
   * @example
   * "/usr/local/share/aliyun-assist/work/script/t-hz04zm90y6og0sg.sh: line 1: pip: command not found"
   */
  statusDetail?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * [
   * 			"cn-beijing",
   * 			"cn-hangzhou",
   * 			"cn-shanghai"
   * 		]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildProperty: 'ArtifactBuildProperty',
      artifactBuildType: 'ArtifactBuildType',
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildProperty: 'string',
      artifactBuildType: 'string',
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      statusDetail: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateArtifactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {\\"CmsTemplateId\\":1162921,\\"TemplateUrl\\":\\"https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1760465342xxxxxx/template/c072ef50-6c03-4d9c-8f0e-d1c440xxxxxx.json\\"}
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application. Valid values:
   * 
   * *   Manual: The application is manually approved.
   * *   AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: UpdateServiceRequestCommodity;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadata?: UpdateServiceRequestComplianceMetadata;
  /**
   * @remarks
   * The deployment configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"EstimateTime\\":null,\\"SupplierDeployMetadata\\":{\\"DeployTimeout\\":7200},\\"EnableVnc\\":false}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * ros: The service is deployed by using Resource Orchestration Service (ROS).
   * terraform: The service is deployed by using Terraform.
   * ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * spi: The service is deployed by calling a service provider interface (SPI).
   * operation: The service is deployed by using a hosted O&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not update a service.
   * *   false: performs a dry run for the request, and update a service if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable the hosted O\\&M feature for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is required if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * Metering Item Configuration Information (Cloud Marketplace - Pay-As-You-Go Use)
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * Specifies whether to support distribution. Valid values:
   * 
   * *   false
   * *   true
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"Custom_Image_Ecs\\":{\\"EnablePrometheus\\":false}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Whether resell is supported.
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-1dda29c3eca648xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: UpdateServiceRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The update option.
   */
  updateOption?: UpdateServiceRequestUpdateOption;
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * Draft
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      complianceMetadata: 'ComplianceMetadata',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      dryRun: 'DryRun',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      shareType: 'ShareType',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      updateOption: 'UpdateOption',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      clientToken: 'string',
      commodity: UpdateServiceRequestCommodity,
      complianceMetadata: UpdateServiceRequestComplianceMetadata,
      deployMetadata: 'string',
      deployType: 'string',
      dryRun: 'boolean',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfo },
      serviceType: 'string',
      serviceVersion: 'string',
      shareType: 'string',
      tenantType: 'string',
      trialDuration: 'number',
      updateOption: UpdateServiceRequestUpdateOption,
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.complianceMetadata && typeof (this.complianceMetadata as any).validate === 'function') {
      (this.complianceMetadata as any).validate();
    }
    if(Array.isArray(this.serviceInfo)) {
      $dara.Model.validateArray(this.serviceInfo);
    }
    if(this.updateOption && typeof (this.updateOption as any).validate === 'function') {
      (this.updateOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {\\"CmsTemplateId\\":1162921,\\"TemplateUrl\\":\\"https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1760465342xxxxxx/template/c072ef50-6c03-4d9c-8f0e-d1c440xxxxxx.json\\"}
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application. Valid values:
   * 
   * *   Manual: The application is manually approved.
   * *   AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodityShrink?: string;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadataShrink?: string;
  /**
   * @remarks
   * The deployment configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"EstimateTime\\":null,\\"SupplierDeployMetadata\\":{\\"DeployTimeout\\":7200},\\"EnableVnc\\":false}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * ros: The service is deployed by using Resource Orchestration Service (ROS).
   * terraform: The service is deployed by using Terraform.
   * ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * spi: The service is deployed by calling a service provider interface (SPI).
   * operation: The service is deployed by using a hosted O&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not update a service.
   * *   false: performs a dry run for the request, and update a service if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable the hosted O\\&M feature for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is required if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * Metering Item Configuration Information (Cloud Marketplace - Pay-As-You-Go Use)
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * Specifies whether to support distribution. Valid values:
   * 
   * *   false
   * *   true
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"Custom_Image_Ecs\\":{\\"EnablePrometheus\\":false}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Whether resell is supported.
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-1dda29c3eca648xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: UpdateServiceShrinkRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The update option.
   */
  updateOptionShrink?: string;
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * Draft
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      complianceMetadataShrink: 'ComplianceMetadata',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      dryRun: 'DryRun',
      duration: 'Duration',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      shareType: 'ShareType',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      updateOptionShrink: 'UpdateOption',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      clientToken: 'string',
      commodityShrink: 'string',
      complianceMetadataShrink: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      dryRun: 'boolean',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfo },
      serviceType: 'string',
      serviceVersion: 'string',
      shareType: 'string',
      tenantType: 'string',
      trialDuration: 'number',
      updateOptionShrink: 'string',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfo)) {
      $dara.Model.validateArray(this.serviceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: UpdateServiceResponseBodyDryRunResult;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: UpdateServiceResponseBodyDryRunResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-25T02:28:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The License Data
   */
  licenseData?: UpdateServiceInstanceAttributeRequestLicenseData;
  /**
   * @remarks
   * Application reason, currently used for trial application extension.
   * 
   * @example
   * \\"\\"
   */
  reason?: string;
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
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-3df88e962cdexxxxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      licenseData: 'LicenseData',
      reason: 'Reason',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      licenseData: UpdateServiceInstanceAttributeRequestLicenseData,
      reason: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.licenseData && typeof (this.licenseData as any).validate === 'function') {
      (this.licenseData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-25T02:28:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The License Data
   */
  licenseDataShrink?: string;
  /**
   * @remarks
   * Application reason, currently used for trial application extension.
   * 
   * @example
   * \\"\\"
   */
  reason?: string;
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
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-3df88e962cdexxxxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      licenseDataShrink: 'LicenseData',
      reason: 'Reason',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      licenseDataShrink: 'string',
      reason: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CB2E0A9-B4DF-5C16-86AD-C511C483144B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable Prometheus on the customer side. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration update operation.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {\\"EcsInstanceParameter\\":\\"4vCPU 8GiB\\",\\"ZoneId\\":\\"cn-heyuan-a\\",\\"SystemDiskSize\\":50,\\"DataDiskSize\\":150,\\"InternetMaxBandwidthOut\\":2,\\"RegionId\\":\\"cn-heyuan\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * package one
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parameters: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable Prometheus on the customer side. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration update operation.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {\\"EcsInstanceParameter\\":\\"4vCPU 8GiB\\",\\"ZoneId\\":\\"cn-heyuan-a\\",\\"SystemDiskSize\\":50,\\"DataDiskSize\\":150,\\"InternetMaxBandwidthOut\\":2,\\"RegionId\\":\\"cn-heyuan\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * package one
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parametersShrink: 'string',
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2306175xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceSpecResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F224E002-AB0E-5FD9-A87E-54AEE56F6CAE
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The deployment state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The parameters required for the upgrade.
   */
  upgradeRequiredParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
      upgradeRequiredParameters: 'UpgradeRequiredParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
      upgradeRequiredParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeRequiredParameters)) {
      $dara.Model.validateArray(this.upgradeRequiredParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("computenestsupplier", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds a shared account of a service.
   * 
   * @param request - AddServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccountsWithOptions(request: AddServiceSharedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<AddServiceSharedAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.sharedAccounts)) {
      query["SharedAccounts"] = request.sharedAccounts;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new AddServiceSharedAccountsResponse({}));
    } else {
      return $dara.cast<AddServiceSharedAccountsResponse>(await this.execute(params, req, runtime), new AddServiceSharedAccountsResponse({}));
    }

  }

  /**
   * Adds a shared account of a service.
   * 
   * @param request - AddServiceSharedAccountsRequest
   * @returns AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccounts(request: AddServiceSharedAccountsRequest): Promise<AddServiceSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * 商家通过服务使用请求
   * 
   * @param request - ApproveServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveServiceUsageResponse
   */
  async approveServiceUsageWithOptions(request: ApproveServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<ApproveServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApproveServiceUsageResponse>(await this.callApi(params, req, runtime), new ApproveServiceUsageResponse({}));
    } else {
      return $dara.cast<ApproveServiceUsageResponse>(await this.execute(params, req, runtime), new ApproveServiceUsageResponse({}));
    }

  }

  /**
   * 商家通过服务使用请求
   * 
   * @param request - ApproveServiceUsageRequest
   * @returns ApproveServiceUsageResponse
   */
  async approveServiceUsage(request: ApproveServiceUsageRequest): Promise<ApproveServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveServiceUsageWithOptions(request, runtime);
  }

  /**
   * Redeploys a service instance after the service instance failed to be deployed.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstanceWithOptions(request: ContinueDeployServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ContinueDeployServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueDeployServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ContinueDeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new ContinueDeployServiceInstanceResponse({}));
    } else {
      return $dara.cast<ContinueDeployServiceInstanceResponse>(await this.execute(params, req, runtime), new ContinueDeployServiceInstanceResponse({}));
    }

  }

  /**
   * Redeploys a service instance after the service instance failed to be deployed.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a deployment package.
   * 
   * @param tmpReq - CreateArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactResponse
   */
  async createArtifactWithOptions(tmpReq: CreateArtifactRequest, runtime: $dara.RuntimeOptions): Promise<CreateArtifactResponse> {
    tmpReq.validate();
    let request = new CreateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.artifactBuildProperty)) {
      request.artifactBuildPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactBuildProperty, "ArtifactBuildProperty", "json");
    }

    if (!$dara.isNull(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactBuildPropertyShrink)) {
      query["ArtifactBuildProperty"] = request.artifactBuildPropertyShrink;
    }

    if (!$dara.isNull(request.artifactBuildType)) {
      query["ArtifactBuildType"] = request.artifactBuildType;
    }

    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateArtifactResponse>(await this.callApi(params, req, runtime), new CreateArtifactResponse({}));
    } else {
      return $dara.cast<CreateArtifactResponse>(await this.execute(params, req, runtime), new CreateArtifactResponse({}));
    }

  }

  /**
   * Creates a deployment package.
   * 
   * @param request - CreateArtifactRequest
   * @returns CreateArtifactResponse
   */
  async createArtifact(request: CreateArtifactRequest): Promise<CreateArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactWithOptions(request, runtime);
  }

  /**
   * Creates a service.
   * 
   * @param tmpReq - CreateServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(tmpReq: CreateServiceRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceResponse> {
    tmpReq.validate();
    let request = new CreateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.complianceMetadata)) {
      request.complianceMetadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.complianceMetadata, "ComplianceMetadata", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!$dara.isNull(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!$dara.isNull(request.buildParameters)) {
      query["BuildParameters"] = request.buildParameters;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.complianceMetadataShrink)) {
      query["ComplianceMetadata"] = request.complianceMetadataShrink;
    }

    if (!$dara.isNull(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!$dara.isNull(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!$dara.isNull(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!$dara.isNull(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sourceServiceId)) {
      query["SourceServiceId"] = request.sourceServiceId;
    }

    if (!$dara.isNull(request.sourceServiceVersion)) {
      query["SourceServiceVersion"] = request.sourceServiceVersion;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!$dara.isNull(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!$dara.isNull(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
    } else {
      return $dara.cast<CreateServiceResponse>(await this.execute(params, req, runtime), new CreateServiceResponse({}));
    }

  }

  /**
   * Creates a service.
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  /**
   * Creates and deploys a service instance.
   * 
   * @param tmpReq - CreateServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstanceWithOptions(tmpReq: CreateServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceInstanceResponse> {
    tmpReq.validate();
    let request = new CreateServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceInstanceResponse>(await this.callApi(params, req, runtime), new CreateServiceInstanceResponse({}));
    } else {
      return $dara.cast<CreateServiceInstanceResponse>(await this.execute(params, req, runtime), new CreateServiceInstanceResponse({}));
    }

  }

  /**
   * Creates and deploys a service instance.
   * 
   * @param request - CreateServiceInstanceRequest
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstance(request: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Create  Service resell application.
   * 
   * @param request - CreateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsageWithOptions(request: CreateServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceUsageResponse>(await this.callApi(params, req, runtime), new CreateServiceUsageResponse({}));
    } else {
      return $dara.cast<CreateServiceUsageResponse>(await this.execute(params, req, runtime), new CreateServiceUsageResponse({}));
    }

  }

  /**
   * Create  Service resell application.
   * 
   * @param request - CreateServiceUsageRequest
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsage(request: CreateServiceUsageRequest): Promise<CreateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceUsageWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact.
   * 
   * @param request - DeleteArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactResponse
   */
  async deleteArtifactWithOptions(request: DeleteArtifactRequest, runtime: $dara.RuntimeOptions): Promise<DeleteArtifactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteArtifactResponse>(await this.callApi(params, req, runtime), new DeleteArtifactResponse({}));
    } else {
      return $dara.cast<DeleteArtifactResponse>(await this.execute(params, req, runtime), new DeleteArtifactResponse({}));
    }

  }

  /**
   * Deletes an artifact.
   * 
   * @param request - DeleteArtifactRequest
   * @returns DeleteArtifactResponse
   */
  async deleteArtifact(request: DeleteArtifactRequest): Promise<DeleteArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteArtifactWithOptions(request, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param request - DeleteServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
    } else {
      return $dara.cast<DeleteServiceResponse>(await this.execute(params, req, runtime), new DeleteServiceResponse({}));
    }

  }

  /**
   * Deletes a service.
   * 
   * @param request - DeleteServiceRequest
   * @returns DeleteServiceResponse
   */
  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a service instance.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(request: DeleteServiceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceInstances",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
    } else {
      return $dara.cast<DeleteServiceInstancesResponse>(await this.execute(params, req, runtime), new DeleteServiceInstancesResponse({}));
    }

  }

  /**
   * Deletes a service instance.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Deploys a service instance.
   * 
   * @param request - DeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstanceWithOptions(request: DeployServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeployServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new DeployServiceInstanceResponse({}));
    } else {
      return $dara.cast<DeployServiceInstanceResponse>(await this.execute(params, req, runtime), new DeployServiceInstanceResponse({}));
    }

  }

  /**
   * Deploys a service instance.
   * 
   * @param request - DeployServiceInstanceRequest
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstance(request: DeployServiceInstanceRequest): Promise<DeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * 生成并校验服务创建stack所需要
   * 
   * @param request - GenerateServicePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicyWithOptions(request: GenerateServicePolicyRequest, runtime: $dara.RuntimeOptions): Promise<GenerateServicePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationTypes)) {
      query["OperationTypes"] = request.operationTypes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateServicePolicy",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateServicePolicyResponse>(await this.callApi(params, req, runtime), new GenerateServicePolicyResponse({}));
    } else {
      return $dara.cast<GenerateServicePolicyResponse>(await this.execute(params, req, runtime), new GenerateServicePolicyResponse({}));
    }

  }

  /**
   * 生成并校验服务创建stack所需要
   * 
   * @param request - GenerateServicePolicyRequest
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicy(request: GenerateServicePolicyRequest): Promise<GenerateServicePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateServicePolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactResponse
   */
  async getArtifactWithOptions(request: GetArtifactRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactName)) {
      query["ArtifactName"] = request.artifactName;
    }

    if (!$dara.isNull(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactResponse>(await this.callApi(params, req, runtime), new GetArtifactResponse({}));
    } else {
      return $dara.cast<GetArtifactResponse>(await this.execute(params, req, runtime), new GetArtifactResponse({}));
    }

  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetArtifactRequest
   * @returns GetArtifactResponse
   */
  async getArtifact(request: GetArtifactRequest): Promise<GetArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactWithOptions(request, runtime);
  }

  /**
   * Queries the credentials that are required to upload a deployment package.
   * 
   * @param request - GetArtifactRepositoryCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentialsWithOptions(request: GetArtifactRepositoryCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactRepositoryCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactRepositoryCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactRepositoryCredentialsResponse>(await this.callApi(params, req, runtime), new GetArtifactRepositoryCredentialsResponse({}));
    } else {
      return $dara.cast<GetArtifactRepositoryCredentialsResponse>(await this.execute(params, req, runtime), new GetArtifactRepositoryCredentialsResponse({}));
    }

  }

  /**
   * Queries the credentials that are required to upload a deployment package.
   * 
   * @param request - GetArtifactRepositoryCredentialsRequest
   * @returns GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentials(request: GetArtifactRepositoryCredentialsRequest): Promise<GetArtifactRepositoryCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactRepositoryCredentialsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(request: GetServiceRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterAliUid)) {
      query["FilterAliUid"] = request.filterAliUid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.sharedAccountType)) {
      query["SharedAccountType"] = request.sharedAccountType;
    }

    if (!$dara.isNull(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
    } else {
      return $dara.cast<GetServiceResponse>(await this.execute(params, req, runtime), new GetServiceResponse({}));
    }

  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  /**
   * Queries the estimated price for creating a service instance.
   * 
   * @param tmpReq - GetServiceEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCostWithOptions(tmpReq: GetServiceEstimateCostRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceEstimateCostResponse> {
    tmpReq.validate();
    let request = new GetServiceEstimateCostShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceEstimateCost",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceEstimateCostResponse>(await this.callApi(params, req, runtime), new GetServiceEstimateCostResponse({}));
    } else {
      return $dara.cast<GetServiceEstimateCostResponse>(await this.execute(params, req, runtime), new GetServiceEstimateCostResponse({}));
    }

  }

  /**
   * Queries the estimated price for creating a service instance.
   * 
   * @param request - GetServiceEstimateCostRequest
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCost(request: GetServiceEstimateCostRequest): Promise<GetServiceEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service instance.
   * 
   * @param request - GetServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceInstanceResponse>(await this.callApi(params, req, runtime), new GetServiceInstanceResponse({}));
    } else {
      return $dara.cast<GetServiceInstanceResponse>(await this.execute(params, req, runtime), new GetServiceInstanceResponse({}));
    }

  }

  /**
   * Queries the information about a service instance.
   * 
   * @param request - GetServiceInstanceRequest
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * 计算巢查询服务是否开通
   * 
   * @param tmpReq - GetServiceProvisionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisionsWithOptions(tmpReq: GetServiceProvisionsRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceProvisionsResponse> {
    tmpReq.validate();
    let request = new GetServiceProvisionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceProvisions",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceProvisionsResponse>(await this.callApi(params, req, runtime), new GetServiceProvisionsResponse({}));
    } else {
      return $dara.cast<GetServiceProvisionsResponse>(await this.execute(params, req, runtime), new GetServiceProvisionsResponse({}));
    }

  }

  /**
   * 计算巢查询服务是否开通
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: GetServiceProvisionsRequest): Promise<GetServiceProvisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Queries the valid values of parameters in a Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraintsWithOptions(request: GetServiceTemplateParameterConstraintsRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceTemplateParameterConstraintsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!$dara.isNull(request.enablePrivateVpcConnection)) {
      query["EnablePrivateVpcConnection"] = request.enablePrivateVpcConnection;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new GetServiceTemplateParameterConstraintsResponse({}));
    } else {
      return $dara.cast<GetServiceTemplateParameterConstraintsResponse>(await this.execute(params, req, runtime), new GetServiceTemplateParameterConstraintsResponse({}));
    }

  }

  /**
   * Queries the valid values of parameters in a Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Obtain the AccessKey pair of uploaded files.
   * 
   * @param request - GetUploadCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadCredentialsResponse
   */
  async getUploadCredentialsWithOptions(request: GetUploadCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<GetUploadCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUploadCredentialsResponse>(await this.callApi(params, req, runtime), new GetUploadCredentialsResponse({}));
    } else {
      return $dara.cast<GetUploadCredentialsResponse>(await this.execute(params, req, runtime), new GetUploadCredentialsResponse({}));
    }

  }

  /**
   * Obtain the AccessKey pair of uploaded files.
   * 
   * @param request - GetUploadCredentialsRequest
   * @returns GetUploadCredentialsResponse
   */
  async getUploadCredentials(request: GetUploadCredentialsRequest): Promise<GetUploadCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadCredentialsWithOptions(request, runtime);
  }

  /**
   * 上线服务
   * 
   * @param request - LaunchServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchServiceResponse
   */
  async launchServiceWithOptions(request: LaunchServiceRequest, runtime: $dara.RuntimeOptions): Promise<LaunchServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categories)) {
      query["Categories"] = request.categories;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recommend)) {
      query["Recommend"] = request.recommend;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LaunchService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<LaunchServiceResponse>(await this.callApi(params, req, runtime), new LaunchServiceResponse({}));
    } else {
      return $dara.cast<LaunchServiceResponse>(await this.execute(params, req, runtime), new LaunchServiceResponse({}));
    }

  }

  /**
   * 上线服务
   * 
   * @param request - LaunchServiceRequest
   * @returns LaunchServiceResponse
   */
  async launchService(request: LaunchServiceRequest): Promise<LaunchServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.launchServiceWithOptions(request, runtime);
  }

  /**
   * Queries a list of images uploaded to Container Registry.
   * 
   * @param request - ListAcrImageRepositoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositoriesWithOptions(request: ListAcrImageRepositoriesRequest, runtime: $dara.RuntimeOptions): Promise<ListAcrImageRepositoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAcrImageRepositories",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAcrImageRepositoriesResponse>(await this.callApi(params, req, runtime), new ListAcrImageRepositoriesResponse({}));
    } else {
      return $dara.cast<ListAcrImageRepositoriesResponse>(await this.execute(params, req, runtime), new ListAcrImageRepositoriesResponse({}));
    }

  }

  /**
   * Queries a list of images uploaded to Container Registry.
   * 
   * @param request - ListAcrImageRepositoriesRequest
   * @returns ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositories(request: ListAcrImageRepositoriesRequest): Promise<ListAcrImageRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAcrImageRepositoriesWithOptions(request, runtime);
  }

  /**
   * Queries the versions of images that are uploaded to the image repository.
   * 
   * @param request - ListAcrImageTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcrImageTagsResponse
   */
  async listAcrImageTagsWithOptions(request: ListAcrImageTagsRequest, runtime: $dara.RuntimeOptions): Promise<ListAcrImageTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAcrImageTags",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAcrImageTagsResponse>(await this.callApi(params, req, runtime), new ListAcrImageTagsResponse({}));
    } else {
      return $dara.cast<ListAcrImageTagsResponse>(await this.execute(params, req, runtime), new ListAcrImageTagsResponse({}));
    }

  }

  /**
   * Queries the versions of images that are uploaded to the image repository.
   * 
   * @param request - ListAcrImageTagsRequest
   * @returns ListAcrImageTagsResponse
   */
  async listAcrImageTags(request: ListAcrImageTagsRequest): Promise<ListAcrImageTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAcrImageTagsWithOptions(request, runtime);
  }

  /**
   * Queries the version information about a deployment package.
   * 
   * @param tmpReq - ListArtifactVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactVersionsResponse
   */
  async listArtifactVersionsWithOptions(tmpReq: ListArtifactVersionsRequest, runtime: $dara.RuntimeOptions): Promise<ListArtifactVersionsResponse> {
    tmpReq.validate();
    let request = new ListArtifactVersionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactVersions",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListArtifactVersionsResponse>(await this.callApi(params, req, runtime), new ListArtifactVersionsResponse({}));
    } else {
      return $dara.cast<ListArtifactVersionsResponse>(await this.execute(params, req, runtime), new ListArtifactVersionsResponse({}));
    }

  }

  /**
   * Queries the version information about a deployment package.
   * 
   * @param request - ListArtifactVersionsRequest
   * @returns ListArtifactVersionsResponse
   */
  async listArtifactVersions(request: ListArtifactVersionsRequest): Promise<ListArtifactVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of deployment packages.
   * 
   * @param request - ListArtifactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactsResponse
   */
  async listArtifactsWithOptions(request: ListArtifactsRequest, runtime: $dara.RuntimeOptions): Promise<ListArtifactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifacts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListArtifactsResponse>(await this.callApi(params, req, runtime), new ListArtifactsResponse({}));
    } else {
      return $dara.cast<ListArtifactsResponse>(await this.execute(params, req, runtime), new ListArtifactsResponse({}));
    }

  }

  /**
   * Queries a list of deployment packages.
   * 
   * @param request - ListArtifactsRequest
   * @returns ListArtifactsResponse
   */
  async listArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactsWithOptions(request, runtime);
  }

  /**
   * 查询服务实例部署详情
   * 
   * @param request - ListServiceInstanceDeployDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceDeployDetailsResponse
   */
  async listServiceInstanceDeployDetailsWithOptions(request: ListServiceInstanceDeployDetailsRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceInstanceDeployDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cycleTimeZone)) {
      query["CycleTimeZone"] = request.cycleTimeZone;
    }

    if (!$dara.isNull(request.cycleType)) {
      query["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceDeployDetails",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceInstanceDeployDetailsResponse>(await this.callApi(params, req, runtime), new ListServiceInstanceDeployDetailsResponse({}));
    } else {
      return $dara.cast<ListServiceInstanceDeployDetailsResponse>(await this.execute(params, req, runtime), new ListServiceInstanceDeployDetailsResponse({}));
    }

  }

  /**
   * 查询服务实例部署详情
   * 
   * @param request - ListServiceInstanceDeployDetailsRequest
   * @returns ListServiceInstanceDeployDetailsResponse
   */
  async listServiceInstanceDeployDetails(request: ListServiceInstanceDeployDetailsRequest): Promise<ListServiceInstanceDeployDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceDeployDetailsWithOptions(request, runtime);
  }

  /**
   * Queries a list of service instances.
   * 
   * @param request - ListServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(request: ListServiceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.showDeleted)) {
      query["ShowDeleted"] = request.showDeleted;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstances",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
    } else {
      return $dara.cast<ListServiceInstancesResponse>(await this.execute(params, req, runtime), new ListServiceInstancesResponse({}));
    }

  }

  /**
   * Queries a list of service instances.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  /**
   * 调用ListServiceSharedAccounts查看服务共享账号列表。
   * 
   * @param request - ListServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceSharedAccountsResponse
   */
  async listServiceSharedAccountsWithOptions(request: ListServiceSharedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceSharedAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new ListServiceSharedAccountsResponse({}));
    } else {
      return $dara.cast<ListServiceSharedAccountsResponse>(await this.execute(params, req, runtime), new ListServiceSharedAccountsResponse({}));
    }

  }

  /**
   * 调用ListServiceSharedAccounts查看服务共享账号列表。
   * 
   * @param request - ListServiceSharedAccountsRequest
   * @returns ListServiceSharedAccountsResponse
   */
  async listServiceSharedAccounts(request: ListServiceSharedAccountsRequest): Promise<ListServiceSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsagesWithOptions(request: ListServiceUsagesRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceUsagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.supplierRole)) {
      query["SupplierRole"] = request.supplierRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceUsages",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceUsagesResponse>(await this.callApi(params, req, runtime), new ListServiceUsagesResponse({}));
    } else {
      return $dara.cast<ListServiceUsagesResponse>(await this.execute(params, req, runtime), new ListServiceUsagesResponse({}));
    }

  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsages(request: ListServiceUsagesRequest): Promise<ListServiceUsagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceUsagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: ListServicesRequest, runtime: $dara.RuntimeOptions): Promise<ListServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allVersions)) {
      query["AllVersions"] = request.allVersions;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
    } else {
      return $dara.cast<ListServicesResponse>(await this.execute(params, req, runtime), new ListServicesResponse({}));
    }

  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * 查询标签键列表
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
    } else {
      return $dara.cast<ListTagKeysResponse>(await this.execute(params, req, runtime), new ListTagKeysResponse({}));
    }

  }

  /**
   * 查询标签键列表
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * 查询标签值列表
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
    } else {
      return $dara.cast<ListTagValuesResponse>(await this.execute(params, req, runtime), new ListTagValuesResponse({}));
    }

  }

  /**
   * 查询标签值列表
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Modifies the resource information about a service instance.
   * 
   * @param request - ModifyServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResourcesWithOptions(request: ModifyServiceInstanceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ModifyServiceInstanceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceInstanceResourcesAction)) {
      query["ServiceInstanceResourcesAction"] = request.serviceInstanceResourcesAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyServiceInstanceResources",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ModifyServiceInstanceResourcesResponse({}));
    } else {
      return $dara.cast<ModifyServiceInstanceResourcesResponse>(await this.execute(params, req, runtime), new ModifyServiceInstanceResourcesResponse({}));
    }

  }

  /**
   * Modifies the resource information about a service instance.
   * 
   * @param request - ModifyServiceInstanceResourcesRequest
   * @returns ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResources(request: ModifyServiceInstanceResourcesRequest): Promise<ModifyServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * 预发布服务
   * 
   * @param request - PreLaunchServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreLaunchServiceResponse
   */
  async preLaunchServiceWithOptions(request: PreLaunchServiceRequest, runtime: $dara.RuntimeOptions): Promise<PreLaunchServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreLaunchService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PreLaunchServiceResponse>(await this.callApi(params, req, runtime), new PreLaunchServiceResponse({}));
    } else {
      return $dara.cast<PreLaunchServiceResponse>(await this.execute(params, req, runtime), new PreLaunchServiceResponse({}));
    }

  }

  /**
   * 预发布服务
   * 
   * @param request - PreLaunchServiceRequest
   * @returns PreLaunchServiceResponse
   */
  async preLaunchService(request: PreLaunchServiceRequest): Promise<PreLaunchServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preLaunchServiceWithOptions(request, runtime);
  }

  /**
   * Pushes metering data of an Alibaba Cloud Marketplace commodity.
   * 
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: PushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<PushMeteringDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metering)) {
      query["Metering"] = request.metering;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMeteringData",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushMeteringDataResponse>(await this.callApi(params, req, runtime), new PushMeteringDataResponse({}));
    } else {
      return $dara.cast<PushMeteringDataResponse>(await this.execute(params, req, runtime), new PushMeteringDataResponse({}));
    }

  }

  /**
   * Pushes metering data of an Alibaba Cloud Marketplace commodity.
   * 
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: PushMeteringDataRequest): Promise<PushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  /**
   * Registers an artifact.
   * 
   * @param request - RegisterServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterServiceResponse
   */
  async registerServiceWithOptions(request: RegisterServiceRequest, runtime: $dara.RuntimeOptions): Promise<RegisterServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterServiceResponse>(await this.callApi(params, req, runtime), new RegisterServiceResponse({}));
    } else {
      return $dara.cast<RegisterServiceResponse>(await this.execute(params, req, runtime), new RegisterServiceResponse({}));
    }

  }

  /**
   * Registers an artifact.
   * 
   * @param request - RegisterServiceRequest
   * @returns RegisterServiceResponse
   */
  async registerService(request: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerServiceWithOptions(request, runtime);
  }

  /**
   * Reject service usage.
   * 
   * @param request - RejectServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectServiceUsageResponse
   */
  async rejectServiceUsageWithOptions(request: RejectServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<RejectServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RejectServiceUsageResponse>(await this.callApi(params, req, runtime), new RejectServiceUsageResponse({}));
    } else {
      return $dara.cast<RejectServiceUsageResponse>(await this.execute(params, req, runtime), new RejectServiceUsageResponse({}));
    }

  }

  /**
   * Reject service usage.
   * 
   * @param request - RejectServiceUsageRequest
   * @returns RejectServiceUsageResponse
   */
  async rejectServiceUsage(request: RejectServiceUsageRequest): Promise<RejectServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectServiceUsageWithOptions(request, runtime);
  }

  /**
   * Publishes an artifact.
   * 
   * @param request - ReleaseArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseArtifactResponse
   */
  async releaseArtifactWithOptions(request: ReleaseArtifactRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseArtifactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseArtifactResponse>(await this.callApi(params, req, runtime), new ReleaseArtifactResponse({}));
    } else {
      return $dara.cast<ReleaseArtifactResponse>(await this.execute(params, req, runtime), new ReleaseArtifactResponse({}));
    }

  }

  /**
   * Publishes an artifact.
   * 
   * @param request - ReleaseArtifactRequest
   * @returns ReleaseArtifactResponse
   */
  async releaseArtifact(request: ReleaseArtifactRequest): Promise<ReleaseArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseArtifactWithOptions(request, runtime);
  }

  /**
   * Remove  service shared account.
   * 
   * @param request - RemoveServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveServiceSharedAccountsResponse
   */
  async removeServiceSharedAccountsWithOptions(request: RemoveServiceSharedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<RemoveServiceSharedAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUids)) {
      query["UserAliUids"] = request.userAliUids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new RemoveServiceSharedAccountsResponse({}));
    } else {
      return $dara.cast<RemoveServiceSharedAccountsResponse>(await this.execute(params, req, runtime), new RemoveServiceSharedAccountsResponse({}));
    }

  }

  /**
   * Remove  service shared account.
   * 
   * @param request - RemoveServiceSharedAccountsRequest
   * @returns RemoveServiceSharedAccountsResponse
   */
  async removeServiceSharedAccounts(request: RemoveServiceSharedAccountsRequest): Promise<RemoveServiceSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstanceWithOptions(request: RestartServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RestartServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartServiceInstanceResponse>(await this.callApi(params, req, runtime), new RestartServiceInstanceResponse({}));
    } else {
      return $dara.cast<RestartServiceInstanceResponse>(await this.execute(params, req, runtime), new RestartServiceInstanceResponse({}));
    }

  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstance(request: RestartServiceInstanceRequest): Promise<RestartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Rollback Service Instance
   * 
   * @param request - RollbackServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstanceWithOptions(request: RollbackServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RollbackServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RollbackServiceInstanceResponse>(await this.callApi(params, req, runtime), new RollbackServiceInstanceResponse({}));
    } else {
      return $dara.cast<RollbackServiceInstanceResponse>(await this.execute(params, req, runtime), new RollbackServiceInstanceResponse({}));
    }

  }

  /**
   * Rollback Service Instance
   * 
   * @param request - RollbackServiceInstanceRequest
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstance(request: RollbackServiceInstanceRequest): Promise<RollbackServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstanceWithOptions(request: StartServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StartServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartServiceInstanceResponse>(await this.callApi(params, req, runtime), new StartServiceInstanceResponse({}));
    } else {
      return $dara.cast<StartServiceInstanceResponse>(await this.execute(params, req, runtime), new StartServiceInstanceResponse({}));
    }

  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstance(request: StartServiceInstanceRequest): Promise<StartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstanceWithOptions(request: StopServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StopServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopServiceInstanceResponse>(await this.callApi(params, req, runtime), new StopServiceInstanceResponse({}));
    } else {
      return $dara.cast<StopServiceInstanceResponse>(await this.execute(params, req, runtime), new StopServiceInstanceResponse({}));
    }

  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstance(request: StopServiceInstanceRequest): Promise<StopServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopServiceInstanceWithOptions(request, runtime);
  }

  /**
   * 给资源打标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * 给资源打标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 资源解绑标签
   * 
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UnTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
    } else {
      return $dara.cast<UnTagResourcesResponse>(await this.execute(params, req, runtime), new UnTagResourcesResponse({}));
    }

  }

  /**
   * 资源解绑标签
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a deployment package.
   * 
   * @param tmpReq - UpdateArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactResponse
   */
  async updateArtifactWithOptions(tmpReq: UpdateArtifactRequest, runtime: $dara.RuntimeOptions): Promise<UpdateArtifactResponse> {
    tmpReq.validate();
    let request = new UpdateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.artifactBuildProperty)) {
      request.artifactBuildPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactBuildProperty, "ArtifactBuildProperty", "json");
    }

    if (!$dara.isNull(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactBuildPropertyShrink)) {
      query["ArtifactBuildProperty"] = request.artifactBuildPropertyShrink;
    }

    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!$dara.isNull(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateArtifactResponse>(await this.callApi(params, req, runtime), new UpdateArtifactResponse({}));
    } else {
      return $dara.cast<UpdateArtifactResponse>(await this.execute(params, req, runtime), new UpdateArtifactResponse({}));
    }

  }

  /**
   * Updates a deployment package.
   * 
   * @param request - UpdateArtifactRequest
   * @returns UpdateArtifactResponse
   */
  async updateArtifact(request: UpdateArtifactRequest): Promise<UpdateArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateArtifactWithOptions(request, runtime);
  }

  /**
   * Update a service.
   * 
   * @param tmpReq - UpdateServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(tmpReq: UpdateServiceRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceResponse> {
    tmpReq.validate();
    let request = new UpdateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!$dara.isNull(tmpReq.complianceMetadata)) {
      request.complianceMetadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.complianceMetadata, "ComplianceMetadata", "json");
    }

    if (!$dara.isNull(tmpReq.updateOption)) {
      request.updateOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateOption, "UpdateOption", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!$dara.isNull(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!$dara.isNull(request.complianceMetadataShrink)) {
      query["ComplianceMetadata"] = request.complianceMetadataShrink;
    }

    if (!$dara.isNull(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!$dara.isNull(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!$dara.isNull(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!$dara.isNull(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!$dara.isNull(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!$dara.isNull(request.updateOptionShrink)) {
      query["UpdateOption"] = request.updateOptionShrink;
    }

    if (!$dara.isNull(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
    } else {
      return $dara.cast<UpdateServiceResponse>(await this.execute(params, req, runtime), new UpdateServiceResponse({}));
    }

  }

  /**
   * Update a service.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceWithOptions(request, runtime);
  }

  /**
   * Updates the properties of a service instance.
   * 
   * @param tmpReq - UpdateServiceInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttributeWithOptions(tmpReq: UpdateServiceInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceInstanceAttributeResponse> {
    tmpReq.validate();
    let request = new UpdateServiceInstanceAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.licenseData)) {
      request.licenseDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.licenseData, "LicenseData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.licenseDataShrink)) {
      query["LicenseData"] = request.licenseDataShrink;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstanceAttribute",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceAttributeResponse({}));
    } else {
      return $dara.cast<UpdateServiceInstanceAttributeResponse>(await this.execute(params, req, runtime), new UpdateServiceInstanceAttributeResponse({}));
    }

  }

  /**
   * Updates the properties of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributeRequest
   * @returns UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttribute(request: UpdateServiceInstanceAttributeRequest): Promise<UpdateServiceInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a service instance.
   * 
   * @param tmpReq - UpdateServiceInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpecWithOptions(tmpReq: UpdateServiceInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceInstanceSpecResponse> {
    tmpReq.validate();
    let request = new UpdateServiceInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.predefinedParametersName)) {
      query["PredefinedParametersName"] = request.predefinedParametersName;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstanceSpec",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceInstanceSpecResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceSpecResponse({}));
    } else {
      return $dara.cast<UpdateServiceInstanceSpecResponse>(await this.execute(params, req, runtime), new UpdateServiceInstanceSpecResponse({}));
    }

  }

  /**
   * Updates the configurations of a service instance.
   * 
   * @param request - UpdateServiceInstanceSpecRequest
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Upgrades a service instance.
   * 
   * @param tmpReq - UpgradeServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstanceWithOptions(tmpReq: UpgradeServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeServiceInstanceResponse> {
    tmpReq.validate();
    let request = new UpgradeServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeServiceInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeServiceInstanceResponse({}));
    } else {
      return $dara.cast<UpgradeServiceInstanceResponse>(await this.execute(params, req, runtime), new UpgradeServiceInstanceResponse({}));
    }

  }

  /**
   * Upgrades a service instance.
   * 
   * @param request - UpgradeServiceInstanceRequest
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: UpgradeServiceInstanceRequest): Promise<UpgradeServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

}
