// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobSpec } from "./JobSpec";
import { JobSettings } from "./JobSettings";


export class CreateJobRequestCodeSource extends $dara.Model {
  /**
   * @remarks
   * The branch of the code repository referenced when this job runs. This is an optional parameter. By default, the branch configured in the code source is used.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The code source ID. <props="china">For information about how to obtain the code source ID, see [ListCodeSources](https://help.aliyun.com/document_detail/459922.html).
   * 
   * @example
   * code-20210111103721-xxxxxxx
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The commit ID of the code to download for this job. This is an optional parameter. By default, the CommitID configured in the code source is used.
   * 
   * @example
   * 44da109b5******
   */
  commit?: string;
  isSharedMountPath?: boolean;
  /**
   * @remarks
   * The mount path for this job. This is an optional parameter. By default, the mount path configured in the code source is used.
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
  key?: string;
  value?: string;
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
  accessPointId?: string;
  /**
   * @remarks
   * The ID of the data source. <props="china">For information about how to obtain the data source ID, see [ListDatasets](https://help.aliyun.com/document_detail/457222.html).
   * 
   * @example
   * d-cn9dl*******
   */
  dataSourceId?: string;
  dataSourceVersion?: string;
  enableCache?: boolean;
  mountAccess?: string;
  /**
   * @remarks
   * The mount path for this job. This is an optional parameter. By default, the mount path configured in the data source is used.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  /**
   * @remarks
   * Custom dataset mount properties. Currently, only OSS is supported.
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  roleChain?: string;
  /**
   * @remarks
   * The data source path.
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
   * - eth1: uses the user elastic network interfaces (ENIs) to access external networks through the private gateway. For the configuration method, see [Configure a DSW instance to access the Internet through a dedicated public gateway](https://help.aliyun.com/document_detail/2525343.html).
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * - If the vSwitch ID is empty, this parameter is optional. The system automatically retrieves all CIDR blocks under the VPC.
   * - If the vSwitch ID is specified, this parameter is required. Specify all CIDR blocks under the VPC.
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
   * The ID of the user vSwitch. This is an optional parameter.
   * - If the value is empty, the system automatically selects an appropriate vSwitch based on inventory availability.
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
   * - PUBLIC: visible to all members in this workspace.
   * - PRIVATE: visible only to you and administrators in this workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code source used by this job. Before the job nodes start, DLC automatically downloads the code configured in the code source and mounts it to a local directory in the container.
   */
  codeSource?: CreateJobRequestCodeSource;
  /**
   * @remarks
   * The access credential configuration.
   */
  credentialConfig?: CredentialConfig;
  customEnvs?: CreateJobRequestCustomEnvs[];
  /**
   * @remarks
   * The list of data sources used by the job.
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
  description?: string;
  /**
   * @remarks
   * The name of the job. The naming conventions are as follows:
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
   * The maximum running time of the job. Unit: minutes.
   * 
   * @example
   * 1024
   */
  jobMaxRunningTimeMinutes?: number;
  /**
   * @remarks
   * **JobSpecs** describes various configurations for job runtime, such as image address, startup command, node resource declarations, and replica count.
   * 
   * A DLC job consists of different types of nodes. Nodes of the same type share identical configurations, which is called a JobSpec. **JobSpecs** describes the configurations of all node types and is an array of JobSpec objects.
   * 
   * This parameter is required.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. This parameter is case-sensitive. Valid values:
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
   * The additional configuration for this node. You can use this parameter to adjust the behavior of mounted data sources. For example, if the node has an OSS-type data source mounted, you can set this parameter to `fs.oss.download.thread.concurrency=4,fs.oss.download.queue.size=16` to overwrite the default JindoFS parameter settings.
   * 
   * @example
   * key1=value1,key2=value2
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. This is an optional parameter. Default value: 1. Valid values: 1 to 9.
   * 
   * - 1: the lowest priority.
   * - 9: the highest priority.
   * 
   * @example
   * 8
   */
  priority?: number;
  /**
   * @remarks
   * The resource group ID. This is an optional parameter.
   * - If the value is empty, the job is submitted to the public resource group.
   * - If the current workspace has a resource quota attached, you can specify the corresponding resource quota ID. For details about how to query the resource quota ID, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * rs-xxx
   */
  resourceId?: string;
  /**
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
   * The success policy for distributed multi-node jobs. Currently, only TensorFlow multi-node jobs support this parameter.
   * - ChiefWorker: the entire job is considered successful as long as the Chief pod finishes successfully.
   * - AllWorkers (default): the entire job is considered successful only when all Workers finish successfully.
   * 
   * @example
   * AllWorkers
   */
  successPolicy?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * @example
   * tplabc1234567
   */
  templateId?: string;
  /**
   * @remarks
   * The job template version.
   * 
   * @example
   * 1
   */
  templateVersion?: number;
  /**
   * @remarks
   * The folder name where the third-party Python library (requirements.txt) file is located. Before running the specified UserCommand on each node, PAI-DLC retrieves the requirements.txt file from the specified folder and runs `pip install -r` to install the libraries.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The list of third-party Python libraries to install.
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
   * The user VPC configuration.
   */
  userVpc?: CreateJobRequestUserVpc;
  /**
   * @remarks
   * The workspace ID. <props="china">For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

