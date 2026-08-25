// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigsRolesUserInfo extends $dara.Model {
  /**
   * @remarks
   * The temporary AccessKey ID used for credential injection.
   * 
   * @example
   * STS.N*********7
   */
  accessKeyId?: string;
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
   * The temporary security token used for credential injection.
   * 
   * @example
   * DFE32G*******
   */
  securityToken?: string;
  /**
   * @remarks
   * The user type. Valid values: customer (Alibaba Cloud account), sub (RAM user), and AssumedRoleUser (RAM role).
   * 
   * @example
   * sub
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
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

export class GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigsRoles extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the principal that owns the assumed role.
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
   * The ARN of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/DataWorksRole
   */
  roleArn?: string;
  /**
   * @remarks
   * The role assumption type. Valid values: service (assumed by a service) and user (assumed by a user).
   * 
   * @example
   * service
   */
  roleType?: string;
  /**
   * @remarks
   * The information of the proxied user.
   */
  userInfo?: GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigsRolesUserInfo;
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
      userInfo: GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigsRolesUserInfo,
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

export class GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigs extends $dara.Model {
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
  roles?: GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigsRoles[];
  /**
   * @remarks
   * The credential configuration type. Valid values: Role (single role assumption) and RoleChain (role chain assumption).
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
      roles: { 'type': 'array', 'itemType': GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigsRoles },
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

export class GetServerIdeInstanceResponseBodyInstanceCredentialConfig extends $dara.Model {
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
  configs?: GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigs[];
  /**
   * @remarks
   * Indicates whether credential injection is enabled.
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
      configs: { 'type': 'array', 'itemType': GetServerIdeInstanceResponseBodyInstanceCredentialConfigConfigs },
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

export class GetServerIdeInstanceResponseBodyInstanceDatasets extends $dara.Model {
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
   * Indicates whether the dataset is mounted in read-only mode.
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The URI of the storage service directory used for direct mounting.
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

export class GetServerIdeInstanceResponseBodyInstanceUserVpcForwardInfos extends $dara.Model {
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
   * Indicates whether this port forwarding configuration is enabled.
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
   * The target port inside the instance container.
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

export class GetServerIdeInstanceResponseBodyInstanceUserVpc extends $dara.Model {
  /**
   * @remarks
   * The list of port forwarding configurations.
   */
  forwardInfos?: GetServerIdeInstanceResponseBodyInstanceUserVpcForwardInfos[];
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
      forwardInfos: { 'type': 'array', 'itemType': GetServerIdeInstanceResponseBodyInstanceUserVpcForwardInfos },
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

export class GetServerIdeInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1756000000000
   */
  createTime?: number;
  /**
   * @remarks
   * The credential injection configuration of the instance. After this feature is enabled, you can use the default RAM role chain or specify a custom RAM role.
   */
  credentialConfig?: GetServerIdeInstanceResponseBodyInstanceCredentialConfig;
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
  datasets?: GetServerIdeInstanceResponseBodyInstanceDatasets[];
  /**
   * @remarks
   * The reason why the instance entered the failed state.
   * 
   * @example
   * ImagePullBackOff
   */
  failReason?: string;
  /**
   * @remarks
   * The ID of the image used by the instance.
   * 
   * @example
   * System_serveride_notebook_20240822
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * serveride_notebook
   */
  imageName?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/example/serveride:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The personal development environment instance ID.
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
   * The account ID of the user who owns the instance.
   * 
   * @example
   * 20933221576142****
   */
  ownerId?: string;
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
   * The DataWorks workspace name.
   * 
   * @example
   * example_project
   */
  projectName?: string;
  /**
   * @remarks
   * The internal numeric ID of the resource group.
   * 
   * @example
   * 9876543210
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * serverless_group
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The instance status. Valid values: Creating, Starting, Running, Stopping, Stopped, Updating, Deleting, DELETED, Failed, Arrearage, Saving, SaveFailed, and Saved.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the instance was last updated. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1756003600000
   */
  updateTime?: number;
  /**
   * @remarks
   * The VPC configuration used by the instance.
   */
  userVpc?: GetServerIdeInstanceResponseBodyInstanceUserVpc;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialConfig: 'CredentialConfig',
      cu: 'Cu',
      datasets: 'Datasets',
      failReason: 'FailReason',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      status: 'Status',
      updateTime: 'UpdateTime',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      credentialConfig: GetServerIdeInstanceResponseBodyInstanceCredentialConfig,
      cu: 'number',
      datasets: { 'type': 'array', 'itemType': GetServerIdeInstanceResponseBodyInstanceDatasets },
      failReason: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ownerId: 'string',
      projectId: 'number',
      projectName: 'string',
      resourceGroupId: 'number',
      resourceGroupName: 'string',
      status: 'string',
      updateTime: 'number',
      userVpc: GetServerIdeInstanceResponseBodyInstanceUserVpc,
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

export class GetServerIdeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the personal development environment instance.
   */
  instance?: GetServerIdeInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: GetServerIdeInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

