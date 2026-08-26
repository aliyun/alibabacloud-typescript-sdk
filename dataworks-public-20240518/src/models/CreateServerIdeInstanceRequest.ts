// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerIdeInstanceRequestCredentialConfigConfigsRolesUserInfo extends $dara.Model {
  /**
   * @remarks
   * The account ID of the proxied user.
   * 
   * @example
   * 20933221576142****
   */
  id?: string;
  /**
   * @remarks
   * The user type. Valid values:
   * - customer: Alibaba Cloud account.
   * - sub: RAM user.
   * - AssumedRoleUser: RAM role.
   * 
   * @example
   * sub
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class CreateServerIdeInstanceRequestCredentialConfigConfigsRoles extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the principal that owns the role to be assumed.
   * 
   * @example
   * 123456789012****
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * The policy used to further restrict the permissions of the role.
   * 
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/DataWorksRole
   */
  roleArn?: string;
  /**
   * @remarks
   * The role assumption type. Valid values:
   * - service: assumed by a service.
   * - user: assumed by a user.
   * 
   * @example
   * service
   */
  roleType?: string;
  /**
   * @remarks
   * The information about the proxied user.
   */
  userInfo?: CreateServerIdeInstanceRequestCredentialConfigConfigsRolesUserInfo;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      policy: 'string',
      roleArn: 'string',
      roleType: 'string',
      userInfo: CreateServerIdeInstanceRequestCredentialConfigConfigsRolesUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequestCredentialConfigConfigs extends $dara.Model {
  /**
   * @remarks
   * The identifier key of the credential configuration.
   * 
   * @example
   * 0
   */
  key?: string;
  /**
   * @remarks
   * The list of roles in the credential configuration.
   */
  roles?: CreateServerIdeInstanceRequestCredentialConfigConfigsRoles[];
  /**
   * @remarks
   * The credential configuration type. Valid values:
   * - Role: single role assumption.
   * - RoleChain: role chain assumption.
   * 
   * @example
   * RoleChain
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': CreateServerIdeInstanceRequestCredentialConfigConfigsRoles },
      type: 'string',
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

export class CreateServerIdeInstanceRequestCredentialConfig extends $dara.Model {
  /**
   * @remarks
   * The environment variable role key.
   * 
   * @example
   * 0
   */
  aliyunEnvRoleKey?: string;
  /**
   * @remarks
   * The list of credential configurations.
   */
  configs?: CreateServerIdeInstanceRequestCredentialConfigConfigs[];
  /**
   * @remarks
   * Specifies whether to enable credential injection.
   * 
   * @example
   * True
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      configs: 'Configs',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      configs: { 'type': 'array', 'itemType': CreateServerIdeInstanceRequestCredentialConfigConfigs },
      enable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequestDatasets extends $dara.Model {
  /**
   * @remarks
   * The custom mount properties of the dataset. The content is passed as mount options.
   * 
   * @example
   * {"fs.oss.download.thread.concurrency":"10"}
   */
  extOptions?: string;
  /**
   * @remarks
   * The dataset identifier.
   * 
   * @example
   * d-vsqjvs****rp5l206u
   */
  identifier?: string;
  /**
   * @remarks
   * The mount path of the dataset in the instance.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * Specifies whether to mount the dataset in read-only mode.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The URI of the storage service directory for direct mounting.
   * 
   * @example
   * oss://example-bucket/data/
   */
  uri?: string;
  /**
   * @remarks
   * The dataset version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      extOptions: 'ExtOptions',
      identifier: 'Identifier',
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      uri: 'Uri',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extOptions: 'string',
      identifier: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
      uri: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequestUserCommandOnStart extends $dara.Model {
  /**
   * @remarks
   * The command content to be executed after the instance starts. The maximum length is 1024 characters.
   * 
   * @example
   * echo "serveride ready"
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequestUserCommand extends $dara.Model {
  /**
   * @remarks
   * The command configuration to be executed after the instance starts.
   */
  onStart?: CreateServerIdeInstanceRequestUserCommandOnStart;
  static names(): { [key: string]: string } {
    return {
      onStart: 'OnStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onStart: CreateServerIdeInstanceRequestUserCommandOnStart,
    };
  }

  validate() {
    if(this.onStart && typeof (this.onStart as any).validate === 'function') {
      (this.onStart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequestUserVpcForwardInfos extends $dara.Model {
  /**
   * @remarks
   * The list of access types.
   */
  accessType?: string[];
  /**
   * @remarks
   * The name of the target container.
   * 
   * @example
   * dsw-notebook
   */
  containerName?: string;
  /**
   * @remarks
   * The instance ID of the public Elastic IP Address (EIP).
   * 
   * @example
   * eip-bp1****
   */
  eipAllocationId?: string;
  /**
   * @remarks
   * Specifies whether to enable this port forwarding configuration.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The mapped public port.
   * 
   * @example
   * 1024
   */
  externalPort?: string;
  /**
   * @remarks
   * The target port in the instance container.
   * 
   * @example
   * 22
   */
  forwardPort?: string;
  /**
   * @remarks
   * The name of the port forwarding configuration.
   * 
   * @example
   * ssh
   */
  name?: string;
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * @example
   * ngw-bp1****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The public key used for SSH access.
   * 
   * @example
   * ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ****
   */
  SSHPublicKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      containerName: 'ContainerName',
      eipAllocationId: 'EipAllocationId',
      enable: 'Enable',
      externalPort: 'ExternalPort',
      forwardPort: 'ForwardPort',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      SSHPublicKey: 'SSHPublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: { 'type': 'array', 'itemType': 'string' },
      containerName: 'string',
      eipAllocationId: 'string',
      enable: 'boolean',
      externalPort: 'string',
      forwardPort: 'string',
      name: 'string',
      natGatewayId: 'string',
      SSHPublicKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessType)) {
      $dara.Model.validateArray(this.accessType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequestUserVpc extends $dara.Model {
  /**
   * @remarks
   * The list of port forwarding configurations.
   */
  forwardInfos?: CreateServerIdeInstanceRequestUserVpcForwardInfos[];
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardInfos: 'ForwardInfos',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardInfos: { 'type': 'array', 'itemType': CreateServerIdeInstanceRequestUserVpcForwardInfos },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardInfos)) {
      $dara.Model.validateArray(this.forwardInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerIdeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The credential injection configuration for the instance. After this feature is enabled, you can use the default RAM role chain or specify a custom RAM role.
   */
  credentialConfig?: CreateServerIdeInstanceRequestCredentialConfig;
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
  datasets?: CreateServerIdeInstanceRequestDatasets[];
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
  userCommand?: CreateServerIdeInstanceRequestUserCommand;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) configuration used by the instance.
   */
  userVpc?: CreateServerIdeInstanceRequestUserVpc;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      cu: 'Cu',
      datasets: 'Datasets',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
      userCommand: 'UserCommand',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CreateServerIdeInstanceRequestCredentialConfig,
      cu: 'number',
      datasets: { 'type': 'array', 'itemType': CreateServerIdeInstanceRequestDatasets },
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      owner: 'string',
      projectId: 'number',
      resourceGroupId: 'string',
      userCommand: CreateServerIdeInstanceRequestUserCommand,
      userVpc: CreateServerIdeInstanceRequestUserVpc,
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    if(this.userCommand && typeof (this.userCommand as any).validate === 'function') {
      (this.userCommand as any).validate();
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

