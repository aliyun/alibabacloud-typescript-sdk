// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobSpec } from "./JobSpec";
import { JobSettings } from "./JobSettings";


export class CreateJobRequestCodeSource extends $dara.Model {
  /**
   * @remarks
   * The branch of the referenced code repository. By default, the branch configured in the code source is used. This parameter is optional.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The ID of the code source.
   * 
   * @example
   * code-20210111103721-xxxxxxx
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The commit ID of the code to be downloaded. By default, the commit ID configured in the code source is used. This parameter is optional.
   * 
   * @example
   * 44da109b5******
   */
  commit?: string;
  /**
   * @remarks
   * The path to which the job is mounted. By default, the mount path configured in the data source is used. This parameter is optional.
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
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
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

export class CreateJobRequestDataSources extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
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
   * The path to which the job is mounted. By default, the mount path in the data source configuration is used. This parameter is optional.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount attribute of the custom dataset. Set the value to OSS.
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
   * The data source path.
   * 
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      enableCache: 'EnableCache',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      enableCache: 'boolean',
      mountAccess: 'string',
      mountPath: 'string',
      options: 'string',
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
   * The default route. Default value: false. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s elastic network interface (ENI) is used to access the Internet through the private gateway. For more information about the configuration method, see [Enable Internet access for a DSW instance by using a private Internet NAT gateway](https://help.aliyun.com/document_detail/2525343.html).
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block.
   * 
   * *   If you leave the SwitchId and ExtendedCIDRs parameters empty, the system automatically obtains all CIDR blocks in a VPC.
   * *   If you configure the SwitchId and ExtendedCIDRs parameters, we recommend that you specify all CIDR blocks in a VPC.
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is optional.
   * 
   * *   If you leave this parameter empty, the system automatically selects a vSwitch based on the inventory status.
   * *   You can also specify a vSwitch ID.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * The job visibility. Valid values:
   * 
   * *   PUBLIC: The job is visible to all members in the workspace.
   * *   PRIVATE: The job is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code source of the job. Before the node of the job runs, DLC automatically downloads the configured code from the code source and mounts the code to the local path of the container.
   */
  codeSource?: CreateJobRequestCodeSource;
  /**
   * @remarks
   * The access credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The data sources for job running.
   */
  dataSources?: CreateJobRequestDataSources[];
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * “”
   */
  debuggerConfigContent?: string;
  /**
   * @remarks
   * The job name. The name must be in the following format:
   * 
   * *   The name must be 1 to 256 characters in length.
   * *   The name can contain digits, letters, underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is not supported.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * The environment variables.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The maximum running duration of the job. Unit: minutes.
   * 
   * @example
   * 1024
   */
  jobMaxRunningTimeMinutes?: number;
  /**
   * @remarks
   * **JobSpecs** describes the configurations for job running, such as the image address, startup command, node resource declaration, and number of replicas.
   * 
   * A DLC job consists of different types of nodes. If nodes of the same type have exactly the same configuration, the configuration is called JobSpec. **JobSpecs** specifies the configurations of all types of nodes. The value is of the array type.
   * 
   * This parameter is required.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. The value is case-sensitive. The following job types are supported:
   * 
   * *   TFJob
   * *   PyTorchJob
   * *   MPIJob
   * *   XGBoostJob
   * *   OneFlowJob
   * *   ElasticBatchJob
   * *   SlurmJob
   * *   RayJob
   * 
   * Valid values and corresponding frameworks:
   * 
   * *   OneFlowJob: OneFlow.
   * *   PyTorchJob: PyTorch.
   * *   SlurmJob: Slurm.
   * *   XGBoostJob: XGBoost.
   * *   ElasticBatchJob: ElasticBatch.
   * *   MPIJob: MPIJob.
   * *   TFJob: Tensorflow.
   * *   RayJob: Ray.
   * 
   * This parameter is required.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The additional configuration of the job. You can use this parameter to adjust the behavior of the attached data source. For example, if the attached data source of the job is of the OSS type, you can use this parameter to add the following configurations to override the default parameters of JindoFS: `fs.oss.download.thread.concurrency=4,fs.oss.download.queue.size=16`.
   * 
   * @example
   * key1=value1,key2=value2
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. Default value: 1. Valid values: 1 to 9.
   * 
   * *   1 is the lowest priority.
   * *   9: the highest priority.
   * 
   * @example
   * 8
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group. This parameter is optional.
   * 
   * *   If you leave this parameter empty, the job is submitted to a public resource group.
   * *   If a resource quota is bound to the current workspace, you can specify the resource quota ID. For more information about how to query the resource quota ID, see [Manage resource quotas](https://help.aliyun.com/document_detail/2651299.html).
   * 
   * @example
   * rs-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The additional parameter configurations of the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The policy that is used to check whether a distributed multi-node job is successful. Only TensorFlow distributed multi-node jobs are supported.
   * 
   * *   ChiefWorker: If you use this policy, the job is considered successful when the pod on the chief node completes operations.
   * *   AllWorkers (default): If you use this policy, the job is considered successful when all worker nodes complete operations.
   * 
   * @example
   * AllWorkers
   */
  successPolicy?: string;
  /**
   * @remarks
   * The folder in which the third-party Python library file requirements.txt is stored. Before the startup command specified by the UserCommand parameter is run on each node, DLC fetches the requirements.txt file from the folder and runs `pip install -r` to install the required package and library.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The third-party Python libraries to be installed.
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
   * The VPC settings.
   */
  userVpc?: CreateJobRequestUserVpc;
  /**
   * @remarks
   * The workspace ID.
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
      dataSources: 'DataSources',
      debuggerConfigContent: 'DebuggerConfigContent',
      displayName: 'DisplayName',
      elasticSpec: 'ElasticSpec',
      envs: 'Envs',
      jobMaxRunningTimeMinutes: 'JobMaxRunningTimeMinutes',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      options: 'Options',
      priority: 'Priority',
      resourceId: 'ResourceId',
      settings: 'Settings',
      successPolicy: 'SuccessPolicy',
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
      dataSources: { 'type': 'array', 'itemType': CreateJobRequestDataSources },
      debuggerConfigContent: 'string',
      displayName: 'string',
      elasticSpec: JobElasticSpec,
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobMaxRunningTimeMinutes: 'number',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      options: 'string',
      priority: 'number',
      resourceId: 'string',
      settings: JobSettings,
      successPolicy: 'string',
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

