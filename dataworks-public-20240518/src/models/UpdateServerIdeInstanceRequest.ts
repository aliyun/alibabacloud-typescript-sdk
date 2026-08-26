// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerIdeInstanceRequestCredentialConfigConfigsRolesUserInfo extends $dara.Model {
  /**
   * @remarks
   * The account ID of the delegated user.
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

export class UpdateServerIdeInstanceRequestCredentialConfigConfigsRoles extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the principal that assumes the role.
   * 
   * @example
   * 123456789012****
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * The policy used to further restrict the role permissions.
   * 
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
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
   * The information of the delegated user.
   */
  userInfo?: UpdateServerIdeInstanceRequestCredentialConfigConfigsRolesUserInfo;
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
      userInfo: UpdateServerIdeInstanceRequestCredentialConfigConfigsRolesUserInfo,
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

export class UpdateServerIdeInstanceRequestCredentialConfigConfigs extends $dara.Model {
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
  roles?: UpdateServerIdeInstanceRequestCredentialConfigConfigsRoles[];
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
      roles: { 'type': 'array', 'itemType': UpdateServerIdeInstanceRequestCredentialConfigConfigsRoles },
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

export class UpdateServerIdeInstanceRequestCredentialConfig extends $dara.Model {
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
  configs?: UpdateServerIdeInstanceRequestCredentialConfigConfigs[];
  /**
   * @remarks
   * Specifies whether to enable credential injection.
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
      configs: { 'type': 'array', 'itemType': UpdateServerIdeInstanceRequestCredentialConfigConfigs },
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

export class UpdateServerIdeInstanceRequestDatasets extends $dara.Model {
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
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The storage service directory URI for direct mounting.
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

export class UpdateServerIdeInstanceRequestUserVpcForwardInfos extends $dara.Model {
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
   * The instance ID of the public EIP.
   * 
   * @example
   * eip-bp1****
   */
  eipAllocationId?: string;
  /**
   * @remarks
   * Specifies whether to enable the port forwarding configuration.
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

export class UpdateServerIdeInstanceRequestUserVpc extends $dara.Model {
  /**
   * @remarks
   * The list of port forwarding configurations.
   */
  forwardInfos?: UpdateServerIdeInstanceRequestUserVpcForwardInfos[];
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
      forwardInfos: { 'type': 'array', 'itemType': UpdateServerIdeInstanceRequestUserVpcForwardInfos },
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

export class UpdateServerIdeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The credential injection configuration for the instance. After this feature is enabled, you can use the default RAM role chain or specify a custom RAM role.
   */
  credentialConfig?: UpdateServerIdeInstanceRequestCredentialConfig;
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
  datasets?: UpdateServerIdeInstanceRequestDatasets[];
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
  userVpc?: UpdateServerIdeInstanceRequestUserVpc;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      cu: 'Cu',
      datasets: 'Datasets',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      projectId: 'ProjectId',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: UpdateServerIdeInstanceRequestCredentialConfig,
      cu: 'number',
      datasets: { 'type': 'array', 'itemType': UpdateServerIdeInstanceRequestDatasets },
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      projectId: 'number',
      userVpc: UpdateServerIdeInstanceRequestUserVpc,
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
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

