// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobSpec } from "./JobSpec";
import { JobSettings } from "./JobSettings";


export class CreateJobRequestCodeSource extends $dara.Model {
  /**
   * @remarks
   * The branch of the referenced code repository when the job runs. This parameter is optional. By default, the branch configured in the code source is used.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The ID of the code source. <props="china">For more information about how to obtain the code source ID, see [ListCodeSources](https://help.aliyun.com/document_detail/459922.html).
   * 
   * @example
   * code-20210111103721-xxxxxxx
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The commit ID of the code to be downloaded for the job. This parameter is optional. By default, the commit ID configured in the code source is used.
   * 
   * @example
   * 44da109b5******
   */
  commit?: string;
  /**
   * @remarks
   * Specifies whether the mount path configured in access code source is a shared cloud storage path. If this parameter is set to true, code clone optimization is enabled in the background. In multi-node job scenarios, the clone operation is performed on only one node, and other nodes can directly access access code through the shared cloud storage path.
   */
  isSharedMountPath?: boolean;
  /**
   * @remarks
   * The path to be mounted for the job. This parameter is optional. By default, the mount path configured in the code source is used.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      isSharedMountPath: 'IsSharedMountPath',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      isSharedMountPath: 'boolean',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestCustomEnvs extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PUB
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * keep
   */
  value?: string;
  /**
   * @remarks
   * The visibility of the environment variable. Valid values: public and private.
   * 
   * @example
   * public
   */
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      visible: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDataSources extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point. Currently, only access points of CPFS for AI are supported.
   */
  accessPointId?: string;
  /**
   * @remarks
   * The ID of the data source. <props="china">For more information about how to view the data source ID, see [ListDatasets](https://help.aliyun.com/document_detail/457222.html).
   * 
   * @example
   * d-cn9dl*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The version of the dataset.
   * 
   * @example
   * v1
   */
  dataSourceVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable the cache service for the data source. This parameter takes effect only when the cluster supports it and a resource group is configured.
   */
  enableCache?: boolean;
  /**
   * @remarks
   * The permissions when the dataset is mounted. Valid values:
   * - RO: read-only mount.
   * - RW: read-write mount.
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * The path to be mounted for the job. This parameter is optional. By default, the mount path in the data source is used.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount property of the custom dataset. Currently, only OSS is supported.
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The ARN of the data source role. This parameter is required when OSS and CPFS access point authentication are enabled.
   * 
   * @example
   * acs:ram::1872xxxxxxxxx:role/account-pai-prod
   */
  roleArn?: string;
  /**
   * @remarks
   * The role chain, which is a JSON-formatted string. Example: [{"roleType":"service","roleArn":"acs:ram::Cloud service resource account UID:role/xxxtodlcrole","assumeRoleFor":"Cloud service resource account UID"},{"roleType":"user","roleArn":"acs:ram::Cloud service account UID:role/roletoassumecustomerrole"},{"roleType":"service","roleArn":"acs:ram::End user UID:role/use-bmcpfs-access-ap-role","assumeRoleFor":"End user UID"}]
   * 
   * @example
   * [{"roleType":"service","roleArn":"acs:ram::Cloud service resource account UID:role/xxxtodlcrole","assumeRoleFor":"Cloud service resource account UID"},{"roleType":"user","roleArn":"acs:ram::Cloud service account UID:role/roletoassumecustomerrole"},{"roleType":"service","roleArn":"acs:ram::End user UID:role/use-bmcpfs-access-ap-role","assumeRoleFor":"End user UID"}]
   */
  roleChain?: string;
  /**
   * @remarks
   * The path of the data source.
   * 
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      enableCache: 'EnableCache',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      options: 'Options',
      roleArn: 'RoleArn',
      roleChain: 'RoleChain',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      enableCache: 'boolean',
      mountAccess: 'string',
      mountPath: 'string',
      options: 'string',
      roleArn: 'string',
      roleChain: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestUserVpc extends $dara.Model {
  /**
   * @remarks
   * The default routing. Valid values:
   * - eth0: uses the default network interface controller (NIC) to access external networks through the public gateway.
   * - eth1: uses the user elastic network interface (ENI) to access external networks through the private gateway. For more information about the configuration method, see [Configure a DSW instance to access the Internet through a dedicated public gateway](https://help.aliyun.com/document_detail/2525343.html).
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * - If the vSwitch ID is empty, this parameter is optional and the system automatically obtains all CIDR blocks under the VPC.
   * - If the vSwitch ID is not empty, this parameter is required. We recommend that you specify all CIDR blocks under the VPC.
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The ID of the user security group.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the user vSwitch. This parameter is optional.
   * - If this parameter is left empty, the system automatically selects an appropriate vSwitch based on inventory.
   * - You can also specify a vSwitch ID.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * The ID of the user VPC.
   * 
   * @example
   * vpc-abcdef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: Visible to all users in the workspace.
   * - PRIVATE: Visible only to you and administrators in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code source used by the job. Before the nodes of the job start, DLC automatically downloads the code configured in the code source and mounts it to the local directory of the container.
   */
  codeSource?: CreateJobRequestCodeSource;
  /**
   * @remarks
   * The access credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The list of custom environment variables.
   */
  customEnvs?: CreateJobRequestCustomEnvs[];
  /**
   * @remarks
   * The list of data sources used for running the job.
   */
  dataSources?: CreateJobRequestDataSources[];
  /**
   * @remarks
   * This parameter is not supported. Ignore this parameter.
   * 
   * @example
   * “”
   */
  debuggerConfigContent?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * This is a training job
   */
  description?: string;
  /**
   * @remarks
   * The name of the job. The name must meet the following requirements:
   * - The name cannot exceed 256 characters in length.
   * - The name can contain digits, letters, underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to enable dry run mode.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is not supported. Ignore this parameter.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * The environment variable configuration.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The maximum running duration of the job, in minutes.
   * 
   * @example
   * 1024
   */
  jobMaxRunningTimeMinutes?: number;
  /**
   * @remarks
   * **JobSpecs** describes various configurations for the job at runtime, such as the image address, startup command, node resource declaration, and number of replicas.
   * 
   * A DLC job consists of different types of nodes. Nodes of the same type have identical configurations, which are referred to as a JobSpec. **JobSpecs** describes the configurations for all types of nodes and is an array of JobSpec objects.
   * 
   * This parameter is required.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The type of the job. This parameter is case-sensitive. Valid values:
   * - TFJob
   * - PyTorchJob
   * - MPIJob
   * - XGBoostJob
   * - OneFlowJob
   * - ElasticBatchJob
   * - SlurmJob
   * - RayJob
   * - DataJuicerJob
   * 
   * This parameter is required.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The additional configuration for the job. You can use this parameter to adjust the behavior of mounted data sources. For example, if the job mounts an OSS data source, you can set this parameter to `fs.oss.download.thread.concurrency=4,fs.oss.download.queue.size=16` to overwrite the default parameter settings of JindoFS.
   * 
   * @example
   * key1=value1,key2=value2
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. This parameter is optional. Default value: 1. Valid values: 1 to 9.
   * - 1: the lowest priority.
   * - 9: the highest priority.
   * 
   * @example
   * 8
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group. This parameter is optional.
   * - If this parameter is left empty, the job is submitted to the public resource group.
   * - If the current workspace is attached to a resource quota, you can specify the corresponding resource quota ID here. For details about how to query the resource quota ID, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * rs-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The scheduling strategy.
   * 
   * @example
   * Auto
   */
  schedulingStrategy?: string;
  /**
   * @remarks
   * The additional parameter settings for the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The success policy for distributed multi-node jobs. Currently, only multi-node TensorFlow jobs are supported. Valid values:
   * - ChiefWorker: If this value is specified, the entire job is considered successful as long as the chief pod ends successfully.
   * - AllWorkers (default): The entire job is considered successful only when all worker pods end successfully.
   * 
   * @example
   * AllWorkers
   */
  successPolicy?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * tplabc1234567
   */
  templateId?: string;
  /**
   * @remarks
   * The version of the job template.
   * 
   * @example
   * 1
   */
  templateVersion?: number;
  /**
   * @remarks
   * The name of the folder where the Python third-party library file (requirements.txt) is located. Before each node runs the specified UserCommand, PAI-DLC retrieves the requirements.txt file from the specified folder and runs the `pip install -r` command to install the libraries.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The list of Python third-party libraries to be installed.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * The startup command for all nodes of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The VPC configuration of the user.
   */
  userVpc?: CreateJobRequestUserVpc;
  /**
   * @remarks
   * The ID of the workspace. <props="china">For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * ws-20210126170216-xxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeSource: 'CodeSource',
      credentialConfig: 'CredentialConfig',
      customEnvs: 'CustomEnvs',
      dataSources: 'DataSources',
      debuggerConfigContent: 'DebuggerConfigContent',
      description: 'Description',
      displayName: 'DisplayName',
      dryRun: 'DryRun',
      elasticSpec: 'ElasticSpec',
      envs: 'Envs',
      jobMaxRunningTimeMinutes: 'JobMaxRunningTimeMinutes',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      options: 'Options',
      priority: 'Priority',
      resourceId: 'ResourceId',
      schedulingStrategy: 'SchedulingStrategy',
      settings: 'Settings',
      successPolicy: 'SuccessPolicy',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeSource: CreateJobRequestCodeSource,
      credentialConfig: CredentialConfig,
      customEnvs: { 'type': 'array', 'itemType': CreateJobRequestCustomEnvs },
      dataSources: { 'type': 'array', 'itemType': CreateJobRequestDataSources },
      debuggerConfigContent: 'string',
      description: 'string',
      displayName: 'string',
      dryRun: 'boolean',
      elasticSpec: JobElasticSpec,
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobMaxRunningTimeMinutes: 'number',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      options: 'string',
      priority: 'number',
      resourceId: 'string',
      schedulingStrategy: 'string',
      settings: JobSettings,
      successPolicy: 'string',
      templateId: 'string',
      templateVersion: 'number',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userVpc: CreateJobRequestUserVpc,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.codeSource && typeof (this.codeSource as any).validate === 'function') {
      (this.codeSource as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.customEnvs)) {
      $dara.Model.validateArray(this.customEnvs);
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.elasticSpec && typeof (this.elasticSpec as any).validate === 'function') {
      (this.elasticSpec as any).validate();
    }
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.thirdpartyLibs)) {
      $dara.Model.validateArray(this.thirdpartyLibs);
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

