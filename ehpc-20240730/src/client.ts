// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddonNodeTemplateDataDisks extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      level: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonNodeTemplateSystemDisk extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTemplateDataDisks extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * /data1
   */
  mountDir?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  /**
   * @example
   * s-bp1ei2b44ripxuo46hym
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
      level: 'Level',
      mountDir: 'MountDir',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
      level: 'string',
      mountDir: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTemplateSystemDisk extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesRequestSharedStorages extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system to be attached.
   * 
   * This parameter is required.
   * 
   * @example
   * 0bd504b0**
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The storage location of the file system to be attached. Valid values:
   * 
   * *   OnPremise: The file system is deployed on a hybrid cloud.
   * *   PublicCloud: The file system is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The local mount directory of the file system that you want to attach.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  /**
   * @remarks
   * The attaching options of the file system to be attached. Valid values:
   * 
   * *   \\-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * *   \\-t nfs -o vers=4.0,noresvport
   * 
   * Default value:-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * 
   * >  The v3 version is recommended for higher performance if multiple Elastic Compute Service (ECS) instances do not edit the same file at the same time.
   * 
   * @example
   * -t nfs -o vers=3,nolock,proto=tcp,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * The address of the mount point of the file system to be attached.
   * 
   * This parameter is required.
   * 
   * @example
   * 0bd504b***-ngq26.cn-hangzhou.nas.aliyuncs.com
   */
  mountTarget?: string;
  /**
   * @remarks
   * The protocol type of the file system to be attached. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage directory of the file system. You can mount any directory in the file system to the specified cluster directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /testehpc
   */
  storageDirectory?: string;
  /**
   * @remarks
   * The type of the file system to be attached. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * This parameter is required.
   * 
   * @example
   * nas
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      location: 'Location',
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTarget: 'MountTarget',
      protocolType: 'ProtocolType',
      storageDirectory: 'StorageDirectory',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      location: 'string',
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTarget: 'string',
      protocolType: 'string',
      storageDirectory: 'string',
      volumeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The name of the software that you want to install in the cluster.
   * 
   * @example
   * mpich
   */
  name?: string;
  /**
   * @remarks
   * The version of the software that you want to install in the cluster.
   * 
   * @example
   * 4.0.3
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

export class CreateClusterRequestAddons extends $dara.Model {
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   * 
   * @example
   * "{\\\\"EipResource\\\\": {\\\\"AutoCreate\\\\": true}, \\\\"EcsResources\\\\": [{\\\\"InstanceType\\\\": \\\\"ecs.c7.xlarge\\\\", \\\\"ImageId\\\\": \\\\"centos_7_6_x64_20G_alibase_20211130.vhd\\\\", \\\\"SystemDisk\\\\": {\\\\"Category\\\\": \\\\"cloud_essd\\\\", \\\\"Size\\\\": 40, \\\\"Level\\\\": \\\\"PL0\\\\"}, \\\\"EnableHT\\\\": true, \\\\"InstanceChargeType\\\\": \\\\"PostPaid\\\\", \\\\"SpotStrategy\\\\": \\\\"NoSpot\\\\"}]}"
   */
  resourcesSpec?: string;
  /**
   * @remarks
   * The service configurations of the addon.
   * 
   * @example
   * "[{\\\\"ServiceName\\\\": \\\\"SSH\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 22, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"VNC\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12016, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"CLIENT\\\\", \\\\"ServiceAccessType\\\\": \\\\"URL\\\\", \\\\"ServiceAccessUrl\\\\": \\\\"\\\\", \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12011, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}]"
   */
  servicesSpec?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourcesSpec: 'string',
      servicesSpec: 'string',
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

export class CreateClusterRequestClusterCredentials extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain digits, letters, colons (:), underscores (_), and hyphens (-).
   * 
   * >  For more information, see [Create a key pair](https://help.aliyun.com/document_detail/51793.html).
   * 
   * @example
   * ali0824
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password for the root user to log on to the node. The password must be 8 to 20 characters in length, and must contain at least 3 of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: `() ~ ! @ # $ % ^ & * - = + { } [ ] : ; \\" < > , . ? /`
   * 
   * >  We recommend that you use HTTPS to call the API operation to prevent password leakage.
   * 
   * @example
   * **********
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The runtime parameters of the script after the cluster is created.
   * 
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the post-processing script.
   * 
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The domain name resolution type.
   * 
   * Valid values:
   * 
   * *   NIS: NIS.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain name resolution service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class CreateClusterRequestManagerDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The type of the domain account.
   * 
   * Valid values:
   * 
   * *   NIS: NIS.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain account service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class CreateClusterRequestManagerScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler type. Valid values:
   * 
   * *   SLURM
   * *   PBS
   * *   OPENGRIDSCHEDULER
   * *   LSF_PLUGIN
   * *   PBS_PLUGIN
   * 
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @remarks
   * The scheduler version.
   * 
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class CreateClusterRequestManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: CreateClusterRequestManagerDNS;
  /**
   * @remarks
   * The configurations of the directory service.
   */
  directoryService?: CreateClusterRequestManagerDirectoryService;
  /**
   * @remarks
   * The hardware configurations of the management node.
   */
  managerNode?: NodeTemplate;
  /**
   * @remarks
   * The configurations of the scheduler service.
   */
  scheduler?: CreateClusterRequestManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      managerNode: 'ManagerNode',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: CreateClusterRequestManagerDNS,
      directoryService: CreateClusterRequestManagerDirectoryService,
      managerNode: NodeTemplate,
      scheduler: CreateClusterRequestManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.managerNode && typeof (this.managerNode as any).validate === 'function') {
      (this.managerNode as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * ClusterId
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * ehpc-hz-******
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

export class CreateJobRequestJobSpecResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs to be allocated to each compute node.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of GPUs to be allocated to each compute node.
   * 
   * @example
   * 1
   */
  gpus?: number;
  /**
   * @remarks
   * The memory size to be allocated to each compute node. The memory size is in string format. Unit: MB or GB.
   * 
   * @example
   * 4gb
   */
  memory?: string;
  /**
   * @remarks
   * The number of compute nodes to be allocated to the job.
   * 
   * @example
   * 2
   */
  nodes?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      gpus: 'number',
      memory: 'string',
      nodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestJobSpec extends $dara.Model {
  /**
   * @remarks
   * The jobs in the queue.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The command or script that is used to run the job. If you want to use a command, you must specify the full path of the command, for example, /bin/ping.
   * 
   * If you want to use a script, you must make sure that you have the execution permissions on it. By default, the user root directory ~/ is used as the default script path on the cluster side. If your script is not in that directory, you must specify the full path in this parameter, such as /home/xxx/job.sh Note that in this mode, if requirements on resources such as CPU and memory are specified in the script, the job will be run based on the resource requirements specified in the script. In this case, do not specify resource requirements in the Resource parameter. Otherwise, the job may fail to run.
   * 
   * If you want to run the job directly by using the CLI, you must specify the absolute path of the command and add two hyphens and a space (-- ) before the path, such as -- /bin/ping -c 10 localhost.
   * 
   * This parameter is required.
   * 
   * @example
   * /home/xxx/test.job
   */
  commandLine?: string;
  /**
   * @remarks
   * The queue to which the job belongs.
   * 
   * @example
   * comp
   */
  jobQueue?: string;
  /**
   * @remarks
   * The post-processing command of the job.
   * 
   * @example
   * /bin/sleep 10
   */
  postCmdLine?: string;
  /**
   * @remarks
   * The job priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The resource configurations of the job.
   */
  resources?: CreateJobRequestJobSpecResources;
  /**
   * @remarks
   * The cluster-side user as which you want to submit the job.
   * 
   * @example
   * testuser
   */
  runasUser?: string;
  /**
   * @remarks
   * The password of the user specified by the RunasUser parameter.
   * 
   * @example
   * xxx
   */
  runasUserPassword?: string;
  /**
   * @remarks
   * The path of the standard error output file of the job. You need to specify the full path.
   * 
   * @example
   * /home/xxx/job.err
   */
  stderrPath?: string;
  /**
   * @remarks
   * The path of the standard output file of the job. You need to specify the full path.
   * 
   * @example
   * /home/xxx/job.out
   */
  stdoutPath?: string;
  /**
   * @remarks
   * The environment variables of the job. The value is a string in the JSON array format. Each array member is a JSON object that contains two members: Name and Value. Name indicates the name of the environment variable, and Value indicates the value of the environment variable.
   * 
   * @example
   * [{"Name":"x", "Value":"y"}]
   */
  variables?: string;
  /**
   * @remarks
   * The maximum duration for which the job can be run. Format: `hour: minute: second`. For example, `01:00:00` indicates 1 hour.
   * 
   * @example
   * 360:48:50
   */
  wallTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      jobQueue: 'JobQueue',
      postCmdLine: 'PostCmdLine',
      priority: 'Priority',
      resources: 'Resources',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      stderrPath: 'StderrPath',
      stdoutPath: 'StdoutPath',
      variables: 'Variables',
      wallTime: 'WallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      commandLine: 'string',
      jobQueue: 'string',
      postCmdLine: 'string',
      priority: 'string',
      resources: CreateJobRequestJobSpecResources,
      runasUser: 'string',
      runasUserPassword: 'string',
      stderrPath: 'string',
      stdoutPath: 'string',
      variables: 'string',
      wallTime: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The public key of the user.
   * 
   * You can add up to 20 users in a call.
   * 
   * Specify one of the Password and AuthKey parameters. The AuthKey parameter takes effect only when the cluster authentication method is set to Key. Key authentication is not recommended.
   * 
   * @example
   * Abc****
   */
  authKey?: string;
  /**
   * @remarks
   * The permission group to which the user belongs. Valid values:
   * 
   * users: ordinary permissions, which are suitable for ordinary users that need only to submit and debug jobs. wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes. You can add up to 20 users in a call.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The password of the user. The password must be 6 to 30 characters in length and must contain three of the following character types:
   * 
   * *   Uppercase letters
   * *   Lowercase letters
   * *   Digits
   * *   Special characters ()~!@#$%^&\\*-_+=|{}[]:;\\"/<>,.?/
   * 
   * You can add up to 20 users in a call.
   * 
   * Specify one of the Password and AuthKey parameters. The Password parameter takes effect only when the cluster authentication method is set to Password. Password authentication is recommended.
   * 
   * @example
   * 1@a2****
   */
  password?: string;
  /**
   * @remarks
   * The username. The username must be 1 to 30 characters in length. It must start with a letter and can contain digits, letters, and periods (.).
   * 
   * You can add up to 20 users in a call.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      group: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The name of user N that you want to delete.
   * 
   * Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the EIP is automatically created.
   * 
   * @example
   * True
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp1jwtsuoiif2qf90****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * Default value: PostPaid
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   PayByBandwidth: pay by bandwidth.
   * *   PayByTraffic: pay by data transfer.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipInstanceId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) resource configurations of the addon.
   */
  ecsResources?: AddonNodeTemplate[];
  /**
   * @remarks
   * The Elastic IP Address (EIP) configurations of the service.
   */
  eipResource?: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource,
    };
  }

  validate() {
    if(Array.isArray(this.ecsResources)) {
      $dara.Model.validateArray(this.ecsResources);
    }
    if(this.eipResource && typeof (this.eipResource as any).validate === 'function') {
      (this.eipResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams extends $dara.Model {
  /**
   * @remarks
   * The help information of the parameter.
   */
  helpText?: string;
  /**
   * @remarks
   * The parameter label.
   */
  label?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL_HOME
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * usr/local/mysql
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      helpText: 'HelpText',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpText: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
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

export class DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **TCP**: forwards TCP packets.
   * *   **UDP**: forwards UDP packets.
   * *   **Any**: forwards all packets.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      port: 'Port',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      port: 'number',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The parameter configurations of the service.
   */
  inputParams?: DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams[];
  /**
   * @remarks
   * The security group configurations of the service.
   */
  networkACL?: DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL[];
  /**
   * @remarks
   * The service access type.
   * 
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The service access URL.
   * 
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      networkACL: 'NetworkACL',
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL },
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputParams)) {
      $dara.Model.validateArray(this.inputParams);
    }
    if(Array.isArray(this.networkACL)) {
      $dara.Model.validateArray(this.networkACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddon extends $dara.Model {
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon icon.
   * 
   * @example
   * /assets/icons/your_icon.svg
   */
  icon?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The date when the addon template was last updated.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  lastUpdate?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   */
  resourcesSpec?: DescribeAddonTemplateResponseBodyAddonResourcesSpec;
  /**
   * @remarks
   * The addon configurations.
   */
  servicesSpec?: DescribeAddonTemplateResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      icon: 'Icon',
      label: 'Label',
      lastUpdate: 'LastUpdate',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      label: 'string',
      lastUpdate: 'string',
      name: 'string',
      resourcesSpec: DescribeAddonTemplateResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpec },
      version: 'string',
    };
  }

  validate() {
    if(this.resourcesSpec && typeof (this.resourcesSpec as any).validate === 'function') {
      (this.resourcesSpec as any).validate();
    }
    if(Array.isArray(this.servicesSpec)) {
      $dara.Model.validateArray(this.servicesSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesRequestSharedStorages extends $dara.Model {
  /**
   * @remarks
   * The local mount directory of the mounted file system.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      mountDirectory: 'MountDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonResourcesSpecEipResource extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the EIP is automatically created.
   * 
   * @example
   * True
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 39.108.xx.xx
   */
  eipAddress?: string;
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The billing method of the EIP.
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   PayByBandwidth: pay by bandwidth.
   * *   PayByTraffic: pay by data transfer.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      eipAddress: 'EipAddress',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipAddress: 'string',
      eipInstanceId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) resource configurations of the addon.
   */
  ecsResources?: AddonNodeTemplate[];
  /**
   * @remarks
   * The Elastic IP Address (EIP) configurations.
   */
  eipResource?: GetAddonResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: GetAddonResponseBodyAddonResourcesSpecEipResource,
    };
  }

  validate() {
    if(Array.isArray(this.ecsResources)) {
      $dara.Model.validateArray(this.ecsResources);
    }
    if(this.eipResource && typeof (this.eipResource as any).validate === 'function') {
      (this.eipResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonServicesSpecInputParams extends $dara.Model {
  /**
   * @remarks
   * The help information of the parameter.
   */
  helpText?: string;
  /**
   * @remarks
   * The parameter label.
   */
  label?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL_HOME
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * usr/local/mysql
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      helpText: 'HelpText',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpText: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
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

export class GetAddonResponseBodyAddonServicesSpecNetworkACL extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * TCP: forwards TCP packets.
   * 
   * UDP: forwards UDP packets.
   * 
   * Any: forwards all packets.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      port: 'Port',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      port: 'number',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The parameter configurations of the service.
   */
  inputParams?: GetAddonResponseBodyAddonServicesSpecInputParams[];
  /**
   * @remarks
   * The security group configurations of the service.
   */
  networkACL?: GetAddonResponseBodyAddonServicesSpecNetworkACL[];
  /**
   * @remarks
   * The service access type.
   * 
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The service access URL.
   * 
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      networkACL: 'NetworkACL',
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpecNetworkACL },
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputParams)) {
      $dara.Model.validateArray(this.inputParams);
    }
    if(Array.isArray(this.networkACL)) {
      $dara.Model.validateArray(this.networkACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddon extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon icon.
   * 
   * @example
   * /assets/icons/your_icon.svg
   */
  icon?: string;
  /**
   * @remarks
   * The time when the addon was installed.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   */
  resourcesSpec?: GetAddonResponseBodyAddonResourcesSpec;
  /**
   * @remarks
   * The service configurations of the addon.
   */
  servicesSpec?: GetAddonResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * The addon status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      icon: 'Icon',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      icon: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: GetAddonResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpec },
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.resourcesSpec && typeof (this.resourcesSpec as any).validate === 'function') {
      (this.resourcesSpec as any).validate();
    }
    if(Array.isArray(this.servicesSpec)) {
      $dara.Model.validateArray(this.servicesSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The arguments that are used to run the script after the scrip is installed.
   * 
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the post-processing script.
   * 
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The state of the domain name resolution service. Valid values:
   * 
   * *   uninit: The service is being installed.
   * *   initing: The service is being initialized.
   * *   running: The service is running.
   * *   exception: The service has run into an exception.
   * *   releasing: The service is being released.
   * *   stopped: The service is stopped.
   * *   pending: The service is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The version of the resolution service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
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

export class GetClusterResponseBodyManagerDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The state of the domain account service. Valid values:
   * 
   * *   uninit: The service is being installed.
   * *   initing: The service is being initialized.
   * *   running: The service is running.
   * *   exception: The service has run into an exception.
   * *   releasing: The service is being released.
   * *   stopped: The service is stopped.
   * *   pending: The service is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The type of the domain account.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain account service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
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

export class GetClusterResponseBodyManagerManagerNode extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the management node.
   * 
   * @example
   * 2099-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The instance billing method of the management node. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the management node.
   * 
   * @example
   * i-bp1a170jgea1vl******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the management node.
   * 
   * @example
   * ecs.g6.4xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler state. Valid values:
   * 
   * *   uninit: The scheduler is being installed.
   * *   initing: The scheduler is being initialized.
   * *   running: The scheduler is running.
   * *   exception: The scheduler has run into an exception.
   * *   releasing: The scheduler is being released.
   * *   stopped: The scheduler is stopped.
   * *   pending: The scheduler is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The scheduler type. Valid values:
   * 
   * *   SLURM
   * *   PBS
   * *   OPENGRIDSCHEDULER
   * *   LSF_PLUGIN
   * *   PBS_PLUGIN
   * 
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @remarks
   * The scheduler version.
   * 
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
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

export class GetClusterResponseBodyManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: GetClusterResponseBodyManagerDNS;
  /**
   * @remarks
   * The information about the domain account service.
   */
  directoryService?: GetClusterResponseBodyManagerDirectoryService;
  /**
   * @remarks
   * The configurations of the management node.
   */
  managerNode?: GetClusterResponseBodyManagerManagerNode;
  /**
   * @remarks
   * The information about the scheduler.
   */
  scheduler?: GetClusterResponseBodyManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      managerNode: 'ManagerNode',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: GetClusterResponseBodyManagerDNS,
      directoryService: GetClusterResponseBodyManagerDirectoryService,
      managerNode: GetClusterResponseBodyManagerManagerNode,
      scheduler: GetClusterResponseBodyManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.managerNode && typeof (this.managerNode as any).validate === 'function') {
      (this.managerNode as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyMonitorSpec extends $dara.Model {
  enableComputeLoadMonitor?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableComputeLoadMonitor: 'EnableComputeLoadMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableComputeLoadMonitor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodySchedulerSpec extends $dara.Model {
  enableTopologyAwareness?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableTopologyAwareness: 'EnableTopologyAwareness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTopologyAwareness: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponseBodyLogDetailStages extends $dara.Model {
  /**
   * @remarks
   * The log level.
   * 
   * Valid values:
   * 
   * *   ERROR
   * *   INFO
   * *   WARN
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  /**
   * @remarks
   * The output message of the log.
   * 
   * @example
   * Successfully created security group sg-bcd***
   */
  message?: string;
  /**
   * @remarks
   * The method involved in the log.
   * 
   * @example
   * CreateSecurityGroup
   */
  method?: string;
  /**
   * @remarks
   * The request ID associated with the log.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The action state involved in the log. Valid values:
   * 
   * *   InProgress: The action is being performed.
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The resource involved in the log.
   * 
   * @example
   * sg-bcd***
   */
  target?: string;
  /**
   * @remarks
   * The time when the log was generated.
   * 
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      logLevel: 'LogLevel',
      message: 'Message',
      method: 'Method',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logLevel: 'string',
      message: 'string',
      method: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponseBodyLogDetail extends $dara.Model {
  /**
   * @remarks
   * The stage name of the log.
   * 
   * @example
   * ConfigNetwork
   */
  stageName?: string;
  /**
   * @remarks
   * The information about the log stages.
   */
  stages?: GetCommonLogDetailResponseBodyLogDetailStages[];
  static names(): { [key: string]: string } {
    return {
      stageName: 'StageName',
      stages: 'Stages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageName: 'string',
      stages: { 'type': 'array', 'itemType': GetCommonLogDetailResponseBodyLogDetailStages },
    };
  }

  validate() {
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs used by the job on each node.
   * 
   * @example
   * 2
   */
  cores?: string;
  /**
   * @remarks
   * The number of GPUs used by the job on each node.
   * 
   * @example
   * 1
   */
  gpus?: string;
  /**
   * @remarks
   * The memory size used by the job on each node.
   * 
   * @example
   * 1gb
   */
  memory?: string;
  /**
   * @remarks
   * The number of nodes that are used to run the job.
   * 
   * @example
   * 1
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      gpus: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoResourcesUsed extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs used by the job on each node.
   * 
   * @example
   * 2
   */
  cores?: string;
  /**
   * @remarks
   * The memory size used by the job on each node.
   * 
   * @example
   * 512mb
   */
  memory?: string;
  /**
   * @remarks
   * The number of nodes that are used to run the job.
   * 
   * @example
   * 2
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * ProxyIP
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * 10.x.x.x
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetJobResponseBodyJobInfo extends $dara.Model {
  /**
   * @remarks
   * The parent job ID. If the return value is a non-empty string, the job is an array job.
   * 
   * @example
   * 1
   */
  arrayJobId?: string;
  /**
   * @remarks
   * The sub-job ID. This parameter is valid when the ArrayJobId parameter is a non-empty string.
   * 
   * @example
   * 3
   */
  arrayJobSubId?: string;
  /**
   * @remarks
   * The job queue. If the job is not in a queue, the output is empty.
   * 
   * The format is X-Y:Z. X indicates the first index, Y indicates the final index, and Z indicates the step size. For example, 2-7:2 indicates three sub-jobs numbered 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The command that is used to run the job.
   * 
   * @example
   * /home/huangsf/ehpc/job_meta.pbs
   */
  commandLine?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2024-08-16T10:52:48
   */
  createTime?: string;
  /**
   * @remarks
   * The error log file of the job.
   * 
   * @example
   * /home/xxx/STDIN.e1
   */
  errorLog?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The queue to which the job belongs.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2024-08-16T10:52:48
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The compute nodes that are used to run the job.
   * 
   * @example
   * compute000
   */
  nodeList?: string;
  /**
   * @remarks
   * The standard output log file of the job.
   * 
   * @example
   * /home/xxx/STDIN.o1
   */
  outputLog?: string;
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The resources that were requested when the job was submitted.
   */
  resources?: GetJobResponseBodyJobInfoResources;
  /**
   * @remarks
   * The resources that are actually used by the job.
   */
  resourcesUsed?: GetJobResponseBodyJobInfoResourcesUsed;
  /**
   * @remarks
   * The user to which the job belongs or that is used to submit the job. This user is a cluster-side user.
   * 
   * @example
   * testuser
   */
  runasUser?: string;
  /**
   * @remarks
   * The time when the job was started.
   * 
   * @example
   * 2024-08-16T10:52:48
   */
  startTime?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The variables of the job.
   */
  variables?: GetJobResponseBodyJobInfoVariables[];
  static names(): { [key: string]: string } {
    return {
      arrayJobId: 'ArrayJobId',
      arrayJobSubId: 'ArrayJobSubId',
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      createTime: 'CreateTime',
      errorLog: 'ErrorLog',
      extraInfo: 'ExtraInfo',
      jobId: 'JobId',
      jobName: 'JobName',
      jobQueue: 'JobQueue',
      lastModifyTime: 'LastModifyTime',
      nodeList: 'NodeList',
      outputLog: 'OutputLog',
      priority: 'Priority',
      resources: 'Resources',
      resourcesUsed: 'ResourcesUsed',
      runasUser: 'RunasUser',
      startTime: 'StartTime',
      state: 'State',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayJobId: 'string',
      arrayJobSubId: 'string',
      arrayRequest: 'string',
      commandLine: 'string',
      createTime: 'string',
      errorLog: 'string',
      extraInfo: 'string',
      jobId: 'string',
      jobName: 'string',
      jobQueue: 'string',
      lastModifyTime: 'string',
      nodeList: 'string',
      outputLog: 'string',
      priority: 'string',
      resources: GetJobResponseBodyJobInfoResources,
      resourcesUsed: GetJobResponseBodyJobInfoResourcesUsed,
      runasUser: 'string',
      startTime: 'string',
      state: 'string',
      variables: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoVariables },
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.resourcesUsed && typeof (this.resourcesUsed as any).validate === 'function') {
      (this.resourcesUsed as any).validate();
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponseBodyQueue extends $dara.Model {
  /**
   * @remarks
   * The auto scale-out policy of the queue.
   * 
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes in the queue.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @remarks
   * Indicates whether auto scale-in is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The hostname prefix of the compute nodes in the queue.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the compute nodes in the queue.
   * 
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * The initial number of nodes in the queue.
   * 
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @remarks
   * The type of the network between compute nodes in the queue. Valid values:
   * 
   * *   vpc
   * *   eRDMA
   * 
   * @example
   * erdma
   */
  interConnect?: string;
  /**
   * @remarks
   * The nodes for which deletion protection is enabled in the queue.
   */
  keepAliveNodes?: string[];
  /**
   * @remarks
   * The maximum number of compute nodes that the queue can contain.
   * 
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @remarks
   * The minimum number of nodes that are delivered to the queue in each scale-out cycle.
   * 
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that the queue must contain.
   * 
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role that is assumed by compute nodes in the queue.
   * 
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The available vSwitches for compute nodes in the queue. Valid values of N: 1 to 5.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.computeNodes)) {
      $dara.Model.validateArray(this.computeNodes);
    }
    if(Array.isArray(this.keepAliveNodes)) {
      $dara.Model.validateArray(this.keepAliveNodes);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
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

export class ListAddonTemplatesResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon label
   */
  label?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
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

export class ListAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the addon was installed.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The addon state.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      status: 'string',
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

export class ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList extends $dara.Model {
  /**
   * @remarks
   * The address of the mount target.
   * 
   * @example
   * c0967****.cn-hangzhou.cpfs.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid values: Valid values:
   * 
   * *   vpc
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The state of the mount target. Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being mounted.
   * *   Deleting: The mount target is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze0c41hwu7lc29ris***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-8vbvb34rtyh6xb3zrehs1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBodyFileSystemList extends $dara.Model {
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2024-7-29 15:43:53
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 2fa0248***
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system. Valid values:
   * 
   * *   standard: general-purpose network-attached storage (NAS) file system
   * *   extreme: extreme NAS file system
   * 
   * @example
   * cpfs
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The mount targets of the file system.
   */
  mountTargetList?: ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList[];
  /**
   * @remarks
   * The protocol type of the file system. Valid values:
   * 
   * *   nfs
   * *   smb
   * *   cpfs
   * 
   * @example
   * cpfs
   */
  protocolType?: string;
  /**
   * @remarks
   * The state of the file system. Valid values:
   * 
   * *   Pending: The file system is processing a task.
   * *   Running: The file system is available. You can perform subsequent operations, such as creating a mount target, only when the file system is in the Running state.
   * *   Stopped: The file system is unavailable.
   * *   Extending: The file system is being scaled out.
   * *   Stopping: The file system is being stopped.
   * *   Deleting: The file system is being deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage type of the file system.
   * 
   * *   Valid values if FileSystemType is set to standard: Capacity and Performance.
   * *   Valid values if FileSystemType is set to extreme: standard and advance.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp132kgui8n0targb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      mountTargetList: 'MountTargetList',
      protocolType: 'ProtocolType',
      status: 'Status',
      storageType: 'StorageType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      mountTargetList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList },
      protocolType: 'string',
      status: 'string',
      storageType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mountTargetList)) {
      $dara.Model.validateArray(this.mountTargetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesRequestDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The type of the domain account.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain account service.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ListAvailableImagesRequestScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler type.
   * 
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @remarks
   * The scheduler version.
   * 
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ListAvailableImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The OS architecture of the image. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The boot mode of the image. Valid values:
   * 
   * *   BIOS: Basic Input/Output System (BIOS).
   * *   UEFI: Unified Extensible Firmware Interface (UEFI).
   * 
   * >  When you change the OS boot mode of an instance, you must make sure that the boot mode matches the boot mode of the associated image. Otherwise, the instance fails to be booted.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * ExampleDescription
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_06_64_20G_alibase_2019071****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * CHESS5V5.0.27
   */
  imageName?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: system image.
   * *   self: custom image.
   * *   others: shared image.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The OS name in Chinese.
   */
  OSName?: string;
  /**
   * @remarks
   * The OS name in English.
   * 
   * @example
   * CentOS  7.9 64 bit
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The OS. Valid values:
   * 
   * *   CentOS
   * *   windows
   * 
   * @example
   * windows
   */
  platform?: string;
  /**
   * @remarks
   * The image size. Unit: GiB
   * 
   * @example
   * 40
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      platform: 'Platform',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      OSName: 'string',
      OSNameEn: 'string',
      platform: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
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

export class ListClustersResponseBodyClustersAddonsResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1bg85d2q6laic8****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The Elastic IP Address (EIP) ID.
   * 
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      eipInstanceId: 'EipInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      eipInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddonsServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The service access type.
   * 
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The service access URL.
   * 
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddons extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   */
  resourcesSpec?: ListClustersResponseBodyClustersAddonsResourcesSpec;
  /**
   * @remarks
   * The information about the addon services.
   */
  servicesSpec?: ListClustersResponseBodyClustersAddonsServicesSpec[];
  /**
   * @remarks
   * The addon state.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: ListClustersResponseBodyClustersAddonsResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddonsServicesSpec },
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.resourcesSpec && typeof (this.resourcesSpec as any).validate === 'function') {
      (this.resourcesSpec as any).validate();
    }
    if(Array.isArray(this.servicesSpec)) {
      $dara.Model.validateArray(this.servicesSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The parameters of the post-processing script.
   * 
   * @example
   * demo
   */
  args?: string;
  /**
   * @remarks
   * The link to the post-processing script.
   * 
   * @example
   * https://xxxxx
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain name resolution service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ListClustersResponseBodyClustersManagerDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The type of the domain account.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain account service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ListClustersResponseBodyClustersManagerScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler type.
   * 
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @remarks
   * The scheduler version.
   * 
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ListClustersResponseBodyClustersManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: ListClustersResponseBodyClustersManagerDNS;
  /**
   * @remarks
   * The configurations of the directory service.
   */
  directoryService?: ListClustersResponseBodyClustersManagerDirectoryService;
  /**
   * @remarks
   * The configurations of the scheduler service.
   */
  scheduler?: ListClustersResponseBodyClustersManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: ListClustersResponseBodyClustersManagerDNS,
      directoryService: ListClustersResponseBodyClustersManagerDirectoryService,
      scheduler: ListClustersResponseBodyClustersManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersNodes extends $dara.Model {
  /**
   * @remarks
   * The number of malfunctioning compute nodes.
   * 
   * @example
   * 0
   */
  abnormalCounts?: number;
  /**
   * @remarks
   * The number of compute nodes that are being created.
   * 
   * @example
   * 0
   */
  creatingCounts?: number;
  /**
   * @remarks
   * The number of running compute nodes.
   * 
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalCounts: 'AbnormalCounts',
      creatingCounts: 'CreatingCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCounts: 'number',
      creatingCounts: 'number',
      runningCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersUsers extends $dara.Model {
  /**
   * @remarks
   * The number of ordinary users.
   * 
   * @example
   * 2
   */
  normalCounts?: number;
  /**
   * @remarks
   * The number of administrators.
   * 
   * @example
   * 2
   */
  sudoCounts?: number;
  static names(): { [key: string]: string } {
    return {
      normalCounts: 'NormalCounts',
      sudoCounts: 'SudoCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalCounts: 'number',
      sudoCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The information about installed software in the cluster.
   */
  additionalPackages?: ListClustersResponseBodyClustersAdditionalPackages[];
  /**
   * @remarks
   * The information about the addons in the cluster.
   */
  addons?: ListClustersResponseBodyClustersAddons[];
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The logon credential type of the cluster. Valid values:
   * 
   * *   password: requires passwords for logons.
   * *   keypair: requires key pairs for logons.
   */
  clusterCredentials?: string[];
  /**
   * @remarks
   * The post-processing script used by the cluster.
   */
  clusterCustomConfiguration?: ListClustersResponseBodyClustersClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Demo
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-VMKe******
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * *   Integrated: public cloud
   * *   Hybrid: hybrid cloud
   * *   Custom: a custom cluster
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * slurm22.05.8-cluster-20240227
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   uninit: The cluster is being installed.
   * *   creating: The cluster is being created.
   * *   initing: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   Releasing: The cluster is being released.
   * *   stopping: The cluster is being stopped.
   * *   stopped: The cluster is stopped.
   * *   exception: The cluster has run into an exception.
   * *   pending: The cluster is waiting to be configured.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The vCPU-hour usage of the cluster.
   * 
   * @example
   * 1000
   */
  clusterUsedCoreTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Elastic High Performance Computing (E-HPC) version.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The configurations of the cluster management node.
   */
  manager?: ListClustersResponseBodyClustersManager;
  /**
   * @remarks
   * The maximum total number of vCPUs used by the compute nodes that can be managed by the cluster.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that can be managed by the cluster.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The node statistics of the cluster.
   */
  nodes?: ListClustersResponseBodyClustersNodes;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group used by the cluster.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The user attribute information of the cluster.
   */
  users?: ListClustersResponseBodyClustersUsers;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterUsedCoreTime: 'ClusterUsedCoreTime',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      ehpcVersion: 'EhpcVersion',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      nodes: 'Nodes',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAdditionalPackages },
      addons: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddons },
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCredentials: { 'type': 'array', 'itemType': 'string' },
      clusterCustomConfiguration: ListClustersResponseBodyClustersClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterUsedCoreTime: 'number',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      ehpcVersion: 'string',
      manager: ListClustersResponseBodyClustersManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      nodes: ListClustersResponseBodyClustersNodes,
      resourceGroupId: 'string',
      securityGroupId: 'string',
      users: ListClustersResponseBodyClustersUsers,
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(Array.isArray(this.clusterCredentials)) {
      $dara.Model.validateArray(this.clusterCredentials);
    }
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the action corresponding to the log.
   * 
   * @example
   * CreaterCluster
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-9T3xPNezoS
   */
  clusterId?: string;
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @remarks
   * The message of the log.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The request ID associated with the action that generated the log.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The action state in the log. Valid values:
   * 
   * *   InProgress: The action is being performed.
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The involved resource.
   * 
   * @example
   * i-abc***
   */
  target?: string;
  /**
   * @remarks
   * The time when the log was generated.
   * 
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logType: 'LogType',
      message: 'Message',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logType: 'string',
      message: 'string',
      operatorUid: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $dara.Model {
  /**
   * @remarks
   * The category into which the software falls.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The time when the software was installed.
   * 
   * @example
   * 2024-03-05 18:24:08
   */
  createTime?: string;
  /**
   * @remarks
   * The software description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the software icon.
   * 
   * @example
   * https://gw.alicdn.com/imgextra/i2/O1CN01FIkxZ81LmE0fvrAyR_!!6000000001341-55-tps-6349-1603.svg
   */
  icon?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The installation status of the software.
   * 
   * Valid values:
   * 
   * *   Installed
   * *   Uninstalled
   * *   Installing
   * *   Exception
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      status: 'string',
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

export class ListInstalledSoftwaresResponseBodyAdditionalPackages extends $dara.Model {
  additionalPackageInfos?: ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackageInfos)) {
      $dara.Model.validateArray(this.additionalPackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestJobFilterDiagnosis extends $dara.Model {
  operator?: string;
  option?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      option: 'Option',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      option: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestJobFilterSortBy extends $dara.Model {
  /**
   * @remarks
   * The order in which jobs are sorted based on their execution time. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * asc
   */
  executeOrder?: string;
  /**
   * @remarks
   * The order in which jobs are sorted based on their queuing time. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * desc
   */
  pendOrder?: string;
  /**
   * @remarks
   * The order in which jobs are sorted based on their submitting time. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * asc
   */
  submitOrder?: string;
  static names(): { [key: string]: string } {
    return {
      executeOrder: 'ExecuteOrder',
      pendOrder: 'PendOrder',
      submitOrder: 'SubmitOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeOrder: 'string',
      pendOrder: 'string',
      submitOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestJobFilter extends $dara.Model {
  /**
   * @remarks
   * The time when the job was last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since 1970-01-01T00:00:00Z.
   * 
   * @example
   * 1724123085
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The time when the job started. The value is a UNIX timestamp representing the number of seconds that have elapsed since 1970-01-01T00:00:00Z.
   * 
   * @example
   * 1724122486
   */
  createTimeStart?: string;
  diagnosis?: ListJobsRequestJobFilterDiagnosis[];
  /**
   * @remarks
   * The job name. Fuzzy match is supported.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   all: returns all jobs.
   * *   finished: returns completed jobs.
   * *   notfinish: returns uncompleted jobs.
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  jobStatus?: string;
  /**
   * @remarks
   * The compute nodes that run the jobs.
   */
  nodes?: string[];
  /**
   * @remarks
   * The queues to which the jobs belong.
   */
  queues?: string[];
  /**
   * @remarks
   * The result sorting configurations.
   */
  sortBy?: ListJobsRequestJobFilterSortBy;
  /**
   * @remarks
   * The users that run the jobs.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      diagnosis: 'Diagnosis',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      nodes: 'Nodes',
      queues: 'Queues',
      sortBy: 'SortBy',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      diagnosis: { 'type': 'array', 'itemType': ListJobsRequestJobFilterDiagnosis },
      jobName: 'string',
      jobStatus: 'string',
      nodes: { 'type': 'array', 'itemType': 'string' },
      queues: { 'type': 'array', 'itemType': 'string' },
      sortBy: ListJobsRequestJobFilterSortBy,
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.diagnosis)) {
      $dara.Model.validateArray(this.diagnosis);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    if(this.sortBy && typeof (this.sortBy as any).validate === 'function') {
      (this.sortBy as any).validate();
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobSpecResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs that were used to run the job.
   * 
   * @example
   * 6
   */
  cores?: string;
  /**
   * @remarks
   * The number of GPUs that were used to run the job.
   * 
   * @example
   * 0
   */
  gpus?: string;
  /**
   * @remarks
   * The size of memory that was used to run the job.
   * 
   * @example
   * 1536MB
   */
  memory?: string;
  /**
   * @remarks
   * The number of compute nodes that were used to run the job.
   * 
   * @example
   * 3
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      gpus: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobSpecResourcesActualOccupied extends $dara.Model {
  cores?: string;
  gpus?: string;
  memory?: string;
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      gpus: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobSpec extends $dara.Model {
  /**
   * @remarks
   * The array job ID.
   * 
   * @example
   * 4
   */
  arrayJobId?: string;
  /**
   * @remarks
   * The ID of the job in the array.
   * 
   * @example
   * 1
   */
  arrayJobSubId?: string;
  /**
   * @remarks
   * The queue format of the job.
   * 
   * *   If the job is not in a queue, the output is empty.
   * *   The format is X-Y:Z. X indicates the first index, Y indicates the final index, and Z indicates the step size. For example, 2-7:2 indicates three sub-jobs numbered 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * jobDescription
   */
  comment?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * comp
   */
  jobQueue?: string;
  /**
   * @remarks
   * The time when the job was last updated.
   * 
   * @example
   * 1724123085
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The compute nodes that were used to run the job.
   * 
   * @example
   * compute[002,005,003]
   */
  nodeList?: string;
  /**
   * @remarks
   * The job priority. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The information about the resources required to run the job.
   */
  resources?: ListJobsResponseBodyJobsJobSpecResources;
  resourcesActualOccupied?: ListJobsResponseBodyJobsJobSpecResourcesActualOccupied;
  /**
   * @remarks
   * The user that ran the job.
   * 
   * @example
   * testuser1
   */
  runasUser?: string;
  startTime?: string;
  /**
   * @remarks
   * The job state. Valid values: (PBS cluster and Slurm cluster)
   * 
   * *   FINISHED/Completed
   * *   RUNNING/Running
   * *   QUEUED/Pending
   * *   FAILED/Failed
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The error output path.
   * 
   * @example
   * ./Temp
   */
  stderrPath?: string;
  /**
   * @remarks
   * The standard output path.
   * 
   * @example
   * ./Temp
   */
  stdoutPath?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1724122486
   */
  submitTime?: string;
  /**
   * @remarks
   * The variables of the job.
   * 
   * @example
   * {"PBS_O_SHELL":"/bin/bash", 	"PBS_O_HOST":"manager", 	"PBS_O_SYSTEM":"Linux", 	"PBS_O_LANG":"en_US.UTF-8", 	"PBS_O_QUEUE":"workq"}
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayJobId: 'ArrayJobId',
      arrayJobSubId: 'ArrayJobSubId',
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      jobQueue: 'JobQueue',
      lastModifyTime: 'LastModifyTime',
      nodeList: 'NodeList',
      priority: 'Priority',
      resources: 'Resources',
      resourcesActualOccupied: 'ResourcesActualOccupied',
      runasUser: 'RunasUser',
      startTime: 'StartTime',
      state: 'State',
      stderrPath: 'StderrPath',
      stdoutPath: 'StdoutPath',
      submitTime: 'SubmitTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayJobId: 'string',
      arrayJobSubId: 'string',
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      jobQueue: 'string',
      lastModifyTime: 'string',
      nodeList: 'string',
      priority: 'string',
      resources: ListJobsResponseBodyJobsJobSpecResources,
      resourcesActualOccupied: ListJobsResponseBodyJobsJobSpecResourcesActualOccupied,
      runasUser: 'string',
      startTime: 'string',
      state: 'string',
      stderrPath: 'string',
      stdoutPath: 'string',
      submitTime: 'string',
      variables: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.resourcesActualOccupied && typeof (this.resourcesActualOccupied as any).validate === 'function') {
      (this.resourcesActualOccupied as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpec?: ListJobsResponseBodyJobsJobSpec;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      jobSpec: ListJobsResponseBodyJobsJobSpec,
    };
  }

  validate() {
    if(this.jobSpec && typeof (this.jobSpec as any).validate === 'function') {
      (this.jobSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesTotalResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The amount of memory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  addTime?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-8vbe4av4gededlqg****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The time when the node expires.
   * 
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The hostname of the node.
   * 
   * @example
   * edas.cn-shanghai.aliyuncs.com
   */
  hostname?: string;
  /**
   * @remarks
   * Indicates whether hyper-threading is enabled.
   * 
   * @example
   * true
   */
  htEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the node.
   * 
   * @example
   * i-bp15707mys2rsy0j****
   */
  id?: string;
  /**
   * @remarks
   * The image ID of the node.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type of the node.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The VPC IP address of the node.
   * 
   * @example
   * ``172.16.**.**``
   */
  ipAddress?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  keepAlive?: boolean;
  /**
   * @remarks
   * The public IP address of the node.
   * 
   * @example
   * ``172.16.**.**``
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The name of the queue to which the node belongs.
   * 
   * @example
   * autoque3
   */
  queueName?: string;
  /**
   * @remarks
   * The bidding policy of the node. Valid values:
   * 
   * *   NoSpot: The instances of the compute node are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The node is a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The node state in the scheduler.
   * 
   * @example
   * active
   */
  stateInSched?: string;
  /**
   * @remarks
   * The node state. Valid values:
   * 
   * *   uninit: The node is being installed.
   * *   initing: The node is being initialized.
   * *   running: The node is running.
   * *   releasing: The node is being released.
   * *   stopped: The node is stopped.
   * *   exception: The node has run into an exception.
   * *   untracking: The node is not added to the cluster.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The hardware configurations of the node.
   */
  totalResources?: ListNodesResponseBodyNodesTotalResources;
  /**
   * @remarks
   * The vSwitch ID of the node.
   * 
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1gnu8br4ay7beb2w****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      deploymentSetId: 'DeploymentSetId',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      keepAlive: 'KeepAlive',
      publicIpAddress: 'PublicIpAddress',
      queueName: 'QueueName',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      deploymentSetId: 'string',
      expiredTime: 'string',
      hostname: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      keepAlive: 'boolean',
      publicIpAddress: 'string',
      queueName: 'string',
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesResponseBodyNodesTotalResources,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesNodes extends $dara.Model {
  /**
   * @remarks
   * The number of compute nodes that are not ready.
   * 
   * @example
   * 2
   */
  creatingCounts?: number;
  /**
   * @remarks
   * The number of malfunctioning compute nodes.
   * 
   * @example
   * 0
   */
  exceptionCounts?: number;
  /**
   * @remarks
   * The number of running compute nodes.
   * 
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      creatingCounts: 'CreatingCounts',
      exceptionCounts: 'ExceptionCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatingCounts: 'number',
      exceptionCounts: 'number',
      runningCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueues extends $dara.Model {
  /**
   * @remarks
   * The hardware configurations of the compute nodes that are added in auto scale-outs. Up to five nodes are displayed.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @remarks
   * The time when the queue was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2023-11-10T02:04:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether auto scale-in is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The maximum number of compute nodes that the queue can contain.
   * 
   * @example
   * 100
   */
  maxCount?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that are added to the queue in each auto scale-out.
   * 
   * @example
   * 1
   */
  maxCountPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that the queue must contain.
   * 
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * The statistics about the compute nodes in the queue.
   */
  nodes?: ListQueuesResponseBodyQueuesNodes;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The total number of vCPUs that are used by all compute nodes in the queue.
   * 
   * @example
   * 24
   */
  totalCores?: number;
  /**
   * @remarks
   * The time when the queue was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-04-25T02:02:32
   */
  updateTime?: string;
  /**
   * @remarks
   * The vSwitches that can be used for added nodes during auto scale-outs. Up to three vSwitches are displayed.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      computeNodes: 'ComputeNodes',
      createTime: 'CreateTime',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      nodes: 'Nodes',
      queueName: 'QueueName',
      totalCores: 'TotalCores',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      createTime: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      nodes: ListQueuesResponseBodyQueuesNodes,
      queueName: 'string',
      totalCores: 'number',
      updateTime: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.computeNodes)) {
      $dara.Model.validateArray(this.computeNodes);
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponseBodySharedStoragesMountInfo extends $dara.Model {
  /**
   * @remarks
   * The local mount directory of the attached file system.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  /**
   * @remarks
   * The mount options for the attached file system. Valid values:
   * 
   * *   \\-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * *   \\-t nfs -o vers=4.0,noresvport
   * 
   * @example
   * -t nfs -o vers=4.0,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * The mount target of the attached file system.
   * 
   * @example
   * 0bd504b***-ngq26.cn-hangzhou.nas.aliyuncs.com
   */
  mountTarget?: string;
  /**
   * @remarks
   * The protocol used by the mount target of the attached file system. Valid values:
   * 
   * *   nfs3
   * *   nfs4
   * *   cpfs
   * 
   * @example
   * nfs3
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage directory of the attached file system.
   * 
   * @example
   * /testehpc
   */
  storageDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTarget: 'MountTarget',
      protocolType: 'ProtocolType',
      storageDirectory: 'StorageDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTarget: 'string',
      protocolType: 'string',
      storageDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponseBodySharedStorages extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached file system.
   * 
   * @example
   * 08c7f4b***
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The protocol used by the attached file system. Valid values:
   * 
   * *   nfs3
   * *   nfs4
   * *   cpfs
   * 
   * @example
   * nfs4
   */
  fileSystemProtocol?: string;
  /**
   * @remarks
   * The type of the attached file system. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * @example
   * nas
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The mount information.
   */
  mountInfo?: ListSharedStoragesResponseBodySharedStoragesMountInfo[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemProtocol: 'FileSystemProtocol',
      fileSystemType: 'FileSystemType',
      mountInfo: 'MountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemProtocol: 'string',
      fileSystemType: 'string',
      mountInfo: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStoragesMountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.mountInfo)) {
      $dara.Model.validateArray(this.mountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresRequestOsInfos extends $dara.Model {
  /**
   * @remarks
   * The OS architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * CentOS_7.9_64
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos extends $dara.Model {
  /**
   * @remarks
   * The OS architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64 bit ARM Edition
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs extends $dara.Model {
  supportOsInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos[];
  static names(): { [key: string]: string } {
    return {
      supportOsInfos: 'SupportOsInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportOsInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos },
    };
  }

  validate() {
    if(Array.isArray(this.supportOsInfos)) {
      $dara.Model.validateArray(this.supportOsInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the version is the latest.
   * 
   * @example
   * false
   */
  latest?: string;
  /**
   * @remarks
   * The information about the supported OSs.
   */
  supportOs?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      latest: 'Latest',
      supportOs: 'SupportOs',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latest: 'string',
      supportOs: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs,
      version: 'string',
    };
  }

  validate() {
    if(this.supportOs && typeof (this.supportOs as any).validate === 'function') {
      (this.supportOs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions extends $dara.Model {
  versionInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos[];
  static names(): { [key: string]: string } {
    return {
      versionInfos: 'VersionInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos },
    };
  }

  validate() {
    if(Array.isArray(this.versionInfos)) {
      $dara.Model.validateArray(this.versionInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $dara.Model {
  /**
   * @remarks
   * The application category.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The software description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the software icon.
   * 
   * @example
   * https://gw.alicdn.com/imgextra/i2/O1CN01FIkxZ81LmE0fvrAyR_!!6000000001341-55-tps-6349-1603.svg
   */
  icon?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The information about the software versions that can be installed in the cluster.
   */
  versions?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      versions: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions,
    };
  }

  validate() {
    if(this.versions && typeof (this.versions as any).validate === 'function') {
      (this.versions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackages extends $dara.Model {
  additionalPackageInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackageInfos)) {
      $dara.Model.validateArray(this.additionalPackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the user was first added.
   * 
   * @example
   * 2014-08-22T17:46:47
   */
  addTime?: string;
  /**
   * @remarks
   * The name of the permission group. Valid values:
   * 
   * users: ordinary permissions, which are suitable for regular users that need only to submit and debug jobs.
   * 
   * wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The permission group ID.
   * 
   * @example
   * 100
   */
  groupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      groupId: 'GroupId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      groupId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $dara.Model {
  userInfo?: ListUsersResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserInfo },
    };
  }

  validate() {
    if(Array.isArray(this.userInfo)) {
      $dara.Model.validateArray(this.userInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
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

export class UpdateClusterRequestClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The arguments that are used to run the post-processing script.
   * 
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the post-processing script.
   * 
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequestMonitorSpec extends $dara.Model {
  enableComputeLoadMonitor?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableComputeLoadMonitor: 'EnableComputeLoadMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableComputeLoadMonitor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequestSchedulerSpec extends $dara.Model {
  enableTopologyAwareness?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableTopologyAwareness: 'EnableTopologyAwareness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTopologyAwareness: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the compute node.
   * 
   * @example
   * i-bp1bzqq1ddeemuddn****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the compute node.
   * 
   * @example
   * true
   */
  keepAlive?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keepAlive: 'KeepAlive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keepAlive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueRequestQueue extends $dara.Model {
  /**
   * @remarks
   * The policy based on which instance types are selected for compute nodes during auto scale-outs. Valid values:
   * 
   * *   PriorityInstanceType
   * 
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes in the queue. Valid values of N: 1 to 10.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @remarks
   * Specifies whether to enable auto scale-in for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-out for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The hostname prefix of the compute nodes in the queue.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the compute nodes in the queue.
   * 
   * @example
   * hpc
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * The initial number of compute nodes in the queue.
   * 
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @remarks
   * The type of the network for interconnecting compute nodes in the queue.
   * 
   * @example
   * erdma
   */
  interConnect?: string;
  /**
   * @remarks
   * The nodes for which deletion protection is enabled in the queue.
   */
  keepAliveNodes?: string[];
  /**
   * @remarks
   * The maximum number of compute nodes that the queue can contain.
   * 
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that are added to the queue during an automatic scale-out.
   * 
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that the queue must contain.
   * 
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role that is assumed by compute nodes in the queue.
   * 
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The vSwitches available for use by compute nodes in the queue.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.computeNodes)) {
      $dara.Model.validateArray(this.computeNodes);
    }
    if(Array.isArray(this.keepAliveNodes)) {
      $dara.Model.validateArray(this.keepAliveNodes);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonNodeTemplate extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  dataDisks?: AddonNodeTemplateDataDisks[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20221102.vhd
   */
  imageId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs.c7.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 位
   */
  osName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osNameEN?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  privateIpAddress?: string;
  /**
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: AddonNodeTemplateSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataDisks: 'DataDisks',
      duration: 'Duration',
      enableHT: 'EnableHT',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      osName: 'OsName',
      osNameEN: 'OsNameEN',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': AddonNodeTemplateDataDisks },
      duration: 'number',
      enableHT: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      osName: 'string',
      osNameEN: 'string',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: AddonNodeTemplateSystemDisk,
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTemplate extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  dataDisks?: NodeTemplateDataDisks[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @example
   * aliyun_3_x64_20G_alibase_20221102.vhd
   */
  imageId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * ecs.c7.4xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: NodeTemplateSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataDisks: 'DataDisks',
      duration: 'Duration',
      enableHT: 'EnableHT',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': NodeTemplateDataDisks },
      duration: 'number',
      enableHT: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      period: 'number',
      periodUnit: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: NodeTemplateSystemDisk,
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueueTemplate extends $dara.Model {
  /**
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  hostnameSuffix?: string;
  /**
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @example
   * erdma
   */
  interConnect?: string;
  keepAliveNodes?: string[];
  /**
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  /**
   * @example
   * rnp-756vlp7a
   */
  reservedNodePoolId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.computeNodes)) {
      $dara.Model.validateArray(this.computeNodes);
    }
    if(Array.isArray(this.keepAliveNodes)) {
      $dara.Model.validateArray(this.keepAliveNodes);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SharedStorageTemplate extends $dara.Model {
  /**
   * @example
   * 008b63****
   */
  fileSystemId?: string;
  /**
   * @example
   * /home
   */
  mountDirectory?: string;
  /**
   * @example
   * -t nfs -o vers=3,nolock,noresvport
   */
  mountOptions?: string;
  /**
   * @example
   * 008b****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @example
   * /
   */
  NASDirectory?: string;
  /**
   * @example
   * NFS
   */
  protocolType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTargetDomain: 'MountTargetDomain',
      NASDirectory: 'NASDirectory',
      protocolType: 'ProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTargetDomain: 'string',
      NASDirectory: 'string',
      protocolType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the shared storage resources that you want to attach to the cluster.
   * 
   * This parameter is required.
   */
  sharedStorages?: AttachSharedStoragesRequestSharedStorages[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStorages: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': AttachSharedStoragesRequestSharedStorages },
    };
  }

  validate() {
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the shared storage resources that you want to attach to the cluster.
   * 
   * This parameter is required.
   */
  sharedStoragesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStoragesShrink: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStoragesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9B7BEF8-E42E-5090-9880-55FB7872****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachSharedStoragesResponseBody;
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
      body: AttachSharedStoragesResponseBody,
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

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The list of software that you want to install in the cluster. Valid values of N: 0 to 10.
   */
  additionalPackages?: CreateClusterRequestAdditionalPackages[];
  /**
   * @remarks
   * The configurations of the custom addons in the cluster. Only one addon is supported.
   */
  addons?: CreateClusterRequestAddons[];
  /**
   * @remarks
   * The client version. By default, the latest version is used.
   * 
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The access credentials of the cluster.
   */
  clusterCredentials?: CreateClusterRequestClusterCredentials;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfiguration?: CreateClusterRequestClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster description. The description must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The deployment mode of the cluster. Valid values:
   * 
   * *   Integrated
   * *   Hybrid
   * *   Custom
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the vSwitch that you want the cluster to use. The vSwitch must reside in the VPC that is specified by the `ClusterVpcId` parameter.
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html) operation to query information about the created VPCs and vSwitches.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the cluster resides.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. Deletion protection decides whether the cluster can be deleted in the console or by calling the [DeleteCluster](https://help.aliyun.com/document_detail/424406.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to use an advanced security group. Valid values:
   * 
   * *   true: automatically creates and uses an advanced security group.
   * *   false: automatically creates and uses a basic security group.
   * 
   * For more information, see [Basic security groups and advanced security groups](https://help.aliyun.com/document_detail/605897.html).
   * 
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The configurations of the cluster management node.
   */
  manager?: CreateClusterRequestManager;
  /**
   * @remarks
   * The maximum number of vCPUs that can be used by compute nodes in the cluster. Valid values: 0 to 100,000.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage. Valid values: 0 to 5,000.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The configurations of the queues in the cluster. The number of queues can be 0 to 8.
   */
  queues?: QueueTemplate[];
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the IDs of the resource groups.
   * 
   * @example
   * rg-acfmxazb4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the cluster belongs.
   * 
   * You can call the [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) operation to query available security groups in the current region.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The configurations of shared storage in the cluster.
   */
  sharedStorages?: SharedStorageTemplate[];
  /**
   * @remarks
   * The tags of the cluster.
   */
  tags?: CreateClusterRequestTags[];
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      queues: 'Queues',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      sharedStorages: 'SharedStorages',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalPackages },
      addons: { 'type': 'array', 'itemType': CreateClusterRequestAddons },
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCredentials: CreateClusterRequestClusterCredentials,
      clusterCustomConfiguration: CreateClusterRequestClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterMode: 'string',
      clusterName: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      manager: CreateClusterRequestManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      queues: { 'type': 'array', 'itemType': QueueTemplate },
      resourceGroupId: 'string',
      securityGroupId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': SharedStorageTemplate },
      tags: { 'type': 'array', 'itemType': CreateClusterRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(this.clusterCredentials && typeof (this.clusterCredentials as any).validate === 'function') {
      (this.clusterCredentials as any).validate();
    }
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
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

export class CreateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of software that you want to install in the cluster. Valid values of N: 0 to 10.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The configurations of the custom addons in the cluster. Only one addon is supported.
   */
  addonsShrink?: string;
  /**
   * @remarks
   * The client version. By default, the latest version is used.
   * 
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The access credentials of the cluster.
   */
  clusterCredentialsShrink?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfigurationShrink?: string;
  /**
   * @remarks
   * The cluster description. The description must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The deployment mode of the cluster. Valid values:
   * 
   * *   Integrated
   * *   Hybrid
   * *   Custom
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the vSwitch that you want the cluster to use. The vSwitch must reside in the VPC that is specified by the `ClusterVpcId` parameter.
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html) operation to query information about the created VPCs and vSwitches.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the cluster resides.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. Deletion protection decides whether the cluster can be deleted in the console or by calling the [DeleteCluster](https://help.aliyun.com/document_detail/424406.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to use an advanced security group. Valid values:
   * 
   * *   true: automatically creates and uses an advanced security group.
   * *   false: automatically creates and uses a basic security group.
   * 
   * For more information, see [Basic security groups and advanced security groups](https://help.aliyun.com/document_detail/605897.html).
   * 
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The configurations of the cluster management node.
   */
  managerShrink?: string;
  /**
   * @remarks
   * The maximum number of vCPUs that can be used by compute nodes in the cluster. Valid values: 0 to 100,000.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage. Valid values: 0 to 5,000.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The configurations of the queues in the cluster. The number of queues can be 0 to 8.
   */
  queuesShrink?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the IDs of the resource groups.
   * 
   * @example
   * rg-acfmxazb4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the cluster belongs.
   * 
   * You can call the [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) operation to query available security groups in the current region.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The configurations of shared storage in the cluster.
   */
  sharedStoragesShrink?: string;
  /**
   * @remarks
   * The tags of the cluster.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      addonsShrink: 'Addons',
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCredentialsShrink: 'ClusterCredentials',
      clusterCustomConfigurationShrink: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      managerShrink: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      queuesShrink: 'Queues',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      sharedStoragesShrink: 'SharedStorages',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      addonsShrink: 'string',
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCredentialsShrink: 'string',
      clusterCustomConfigurationShrink: 'string',
      clusterDescription: 'string',
      clusterMode: 'string',
      clusterName: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      managerShrink: 'string',
      maxCoreCount: 'number',
      maxCount: 'number',
      queuesShrink: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      sharedStoragesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr******
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0******
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
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
      body: CreateClusterResponseBody,
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

export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpec?: CreateJobRequestJobSpec;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobName: 'JobName',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobName: 'string',
      jobSpec: CreateJobRequestJobSpec,
    };
  }

  validate() {
    if(this.jobSpec && typeof (this.jobSpec as any).validate === 'function') {
      (this.jobSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobName: 'JobName',
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobName: 'string',
      jobSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * Submitted batch job 10\\n
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0A38A38-1565-555E-B597-E48A2E******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
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
      body: CreateJobResponseBody,
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

export class CreateNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes.
   */
  computeNode?: NodeTemplate;
  /**
   * @remarks
   * The number of compute nodes that you want to add. Valid values: 1 to 99. The MinCount value must be smaller than the Count value.
   * 
   * *   If the number of available Elastic Compute Service (ECS) instances is smaller than the MinCount value, the nodes fail to be added.
   * *   If the number of available ECS instances is larger than the MinCount value but smaller than the Count value, nodes are added based on the MinCount value.
   * *   If the number of available ECS instances is larger than the Count value, nodes are added based on the Count value.
   * 
   * @example
   * 10
   */
  count?: number;
  deploymentSetId?: string;
  /**
   * @remarks
   * The type of the network between compute nodes. Valid values:
   * 
   * *   vpc
   * *   eRDMA
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The hostname prefix of the added compute nodes.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the added compute nodes.
   * 
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the added compute nodes.
   * 
   * @example
   * false
   */
  keepAlive?: string;
  /**
   * @remarks
   * The name of the queue for which you want to create compute nodes.
   * 
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role to be assumed by the added nodes.
   * 
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to be used by the added nodes.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNode: 'ComputeNode',
      count: 'Count',
      deploymentSetId: 'DeploymentSetId',
      HPCInterConnect: 'HPCInterConnect',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      keepAlive: 'KeepAlive',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNode: NodeTemplate,
      count: 'number',
      deploymentSetId: 'string',
      HPCInterConnect: 'string',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      keepAlive: 'string',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.computeNode && typeof (this.computeNode as any).validate === 'function') {
      (this.computeNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes.
   */
  computeNodeShrink?: string;
  /**
   * @remarks
   * The number of compute nodes that you want to add. Valid values: 1 to 99. The MinCount value must be smaller than the Count value.
   * 
   * *   If the number of available Elastic Compute Service (ECS) instances is smaller than the MinCount value, the nodes fail to be added.
   * *   If the number of available ECS instances is larger than the MinCount value but smaller than the Count value, nodes are added based on the MinCount value.
   * *   If the number of available ECS instances is larger than the Count value, nodes are added based on the Count value.
   * 
   * @example
   * 10
   */
  count?: number;
  deploymentSetId?: string;
  /**
   * @remarks
   * The type of the network between compute nodes. Valid values:
   * 
   * *   vpc
   * *   eRDMA
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The hostname prefix of the added compute nodes.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the added compute nodes.
   * 
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the added compute nodes.
   * 
   * @example
   * false
   */
  keepAlive?: string;
  /**
   * @remarks
   * The name of the queue for which you want to create compute nodes.
   * 
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role to be assumed by the added nodes.
   * 
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to be used by the added nodes.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNodeShrink: 'ComputeNode',
      count: 'Count',
      deploymentSetId: 'DeploymentSetId',
      HPCInterConnect: 'HPCInterConnect',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      keepAlive: 'KeepAlive',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNodeShrink: 'string',
      count: 'number',
      deploymentSetId: 'string',
      HPCInterConnect: 'string',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      keepAlive: 'string',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the compute nodes to be created.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodesResponseBody;
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
      body: CreateNodesResponseBody,
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

export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the queue to be created.
   */
  queue?: QueueTemplate;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queue: QueueTemplate,
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the queue to be created.
   */
  queueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueShrink: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the created queue.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQueueResponseBody;
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
      body: CreateQueueResponseBody,
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

export class CreateUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to add.
   */
  user?: CreateUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': CreateUsersRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to add.
   */
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class CreateUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUsersResponseBody;
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
      body: CreateUsersResponseBody,
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

export class DeleteClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster to be released.
   * 
   * @example
   * ehpc-hz-QKKVqO****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1AB6D8D-E185-4D94-859C-7CE7B8B7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * F1AB6D8D-E185-4D94-859C-7CE7B8B7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
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
      body: DeleteClusterResponseBody,
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

export class DeleteNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [listclusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs of the compute nodes that you want to delete.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [listclusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs of the compute nodes that you want to delete.
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodesResponseBody;
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
      body: DeleteNodesResponseBody,
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

export class DeleteQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queues that you want to delete.
   */
  queueNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNames: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.queueNames)) {
      $dara.Model.validateArray(this.queueNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queues that you want to delete.
   */
  queueNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNamesShrink: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQueuesResponseBody;
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
      body: DeleteQueuesResponseBody,
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

export class DeleteUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to delete.
   * 
   * This parameter is required.
   */
  user?: DeleteUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': DeleteUsersRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to delete.
   * 
   * This parameter is required.
   */
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE****
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

export class DeleteUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUsersResponseBody;
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
      body: DeleteUsersResponseBody,
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

export class DescribeAddonTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  addonName?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  addonVersion?: string;
  /**
   * @remarks
   * The page number of the page returned. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonVersion: 'AddonVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the addon template.
   */
  addon?: DescribeAddonTemplateResponseBodyAddon;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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
      addon: 'Addon',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: DescribeAddonTemplateResponseBodyAddon,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.addon && typeof (this.addon as any).validate === 'function') {
      (this.addon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddonTemplateResponseBody;
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
      body: DescribeAddonTemplateResponseBody,
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

export class DetachSharedStoragesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about mounted shared storage resources.
   * 
   * This parameter is required.
   */
  sharedStorages?: DetachSharedStoragesRequestSharedStorages[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStorages: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': DetachSharedStoragesRequestSharedStorages },
    };
  }

  validate() {
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about mounted shared storage resources.
   * 
   * This parameter is required.
   */
  sharedStoragesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStoragesShrink: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStoragesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachSharedStoragesResponseBody;
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
      body: DetachSharedStoragesResponseBody,
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

export class GetAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the addon.
   */
  addon?: GetAddonResponseBodyAddon;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: GetAddonResponseBodyAddon,
      requestId: 'string',
    };
  }

  validate() {
    if(this.addon && typeof (this.addon as any).validate === 'function') {
      (this.addon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAddonResponseBody;
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
      body: GetAddonResponseBody,
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

export class GetClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The E-HPC Util version.
   * 
   * @example
   * 2.0.31
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfiguration?: GetClusterResponseBodyClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * *   Integrated: The cluster is deployed on a public cloud.
   * *   Hybrid: The cluster is deployed on a hybrid cloud.
   * *   Custom: The cluster is a custom cluster.
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * slurm22.05.8-cluster-20240614
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   uninit: The cluster is being installed.
   * *   creating: The cluster is being created.
   * *   initing: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   exception: The cluster has run into an exception.
   * *   raleasing: The cluster is being released.
   * *   stopping: The cluster is being stopped.
   * *   stopped: The cluster is stopped.
   * *   pending: The cluster is waiting to be configured.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
   * 
   * @example
   * vsw-bp1p2uugqsjppno******
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-uf6u3lk1pjy28eg*****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The E-HPC version.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Indicates whether automatic scale-in is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether automatic scale-out is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The interval at which the cluster is automatically scaled out.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * The idle duration of the compute nodes allowed by the cluster.
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The management node configurations.
   */
  manager?: GetClusterResponseBodyManager;
  /**
   * @remarks
   * The maximum total number of vCPUs that can be used by all compute nodes managed by the cluster.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: string;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage.
   * 
   * @example
   * 100
   */
  maxCount?: string;
  monitorSpec?: GetClusterResponseBodyMonitorSpec;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  schedulerSpec?: GetClusterResponseBodySchedulerSpec;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-f8z9vb2zaezpkr69a21k
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deleteProtection: 'DeleteProtection',
      ehpcVersion: 'EhpcVersion',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      monitorSpec: 'MonitorSpec',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      schedulerSpec: 'SchedulerSpec',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCustomConfiguration: GetClusterResponseBodyClusterCustomConfiguration,
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deleteProtection: 'string',
      ehpcVersion: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      manager: GetClusterResponseBodyManager,
      maxCoreCount: 'string',
      maxCount: 'string',
      monitorSpec: GetClusterResponseBodyMonitorSpec,
      requestId: 'string',
      resourceGroupId: 'string',
      schedulerSpec: GetClusterResponseBodySchedulerSpec,
      securityGroupId: 'string',
    };
  }

  validate() {
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.monitorSpec && typeof (this.monitorSpec as any).validate === 'function') {
      (this.monitorSpec as any).validate();
    }
    if(this.schedulerSpec && typeof (this.schedulerSpec as any).validate === 'function') {
      (this.schedulerSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
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
      body: GetClusterResponseBody,
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

export class GetCommonLogDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the time range within which the logs that you want to query were generated. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to hide the process of each step. Valid values:
   * 
   * *   true: hides the process and returns only the result log of each step.
   * *   false: does not hide the process and displays the start and result logs of each step.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  hiddenProcess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @remarks
   * The end time of the time range within which the logs that you want to query were generated. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      hiddenProcess: 'HiddenProcess',
      logRequestId: 'LogRequestId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      hiddenProcess: 'boolean',
      logRequestId: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action name.
   * 
   * @example
   * CreateCluster
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-abc***
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the logs.
   */
  logDetail?: GetCommonLogDetailResponseBodyLogDetail[];
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * operation
   */
  logType?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 239***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 137***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logDetail: 'LogDetail',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logDetail: { 'type': 'array', 'itemType': GetCommonLogDetailResponseBodyLogDetail },
      logType: 'string',
      operatorUid: 'string',
      requestId: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logDetail)) {
      $dara.Model.validateArray(this.logDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCommonLogDetailResponseBody;
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
      body: GetCommonLogDetailResponseBody,
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

export class GetJobRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job ID. You can call the ListJobs operation to query the job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details.
   */
  jobInfo?: GetJobResponseBodyJobInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0****-1335-****-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.jobInfo && typeof (this.jobInfo as any).validate === 'function') {
      (this.jobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
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
      body: GetJobResponseBody,
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

export class GetJobLogRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * *   stdout: standard output logs.
   * *   stderr: error output logs.
   * *   all: all logs.
   * 
   * Default value: all.
   * 
   * @example
   * stdout
   */
  logType?: string;
  /**
   * @remarks
   * The position where logs start to be read.
   * 
   * Unit: bytes.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: string;
  /**
   * @remarks
   * The maximum size of logs that you can read in a single request.
   * 
   * Unit: bytes.
   * 
   * Default value: 10240.
   * 
   * @example
   * 20480
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
      logType: 'LogType',
      offset: 'Offset',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
      logType: 'string',
      offset: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The error output log that is encoded in Base64.
   * 
   * @example
   * aG9zdG5hbWU=
   */
  stderrLog?: string;
  /**
   * @remarks
   * The size of the error output file.
   * 
   * @example
   * 0
   */
  stderrLogSize?: string;
  /**
   * @remarks
   * The standard output log that is encoded in Base64.
   * 
   * @example
   * aG9zdG5hbWU=
   */
  stdoutLog?: string;
  /**
   * @remarks
   * The size of the standard output file.
   * 
   * @example
   * 4096
   */
  stdoutLogSize?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      stderrLog: 'StderrLog',
      stderrLogSize: 'StderrLogSize',
      stdoutLog: 'StdoutLog',
      stdoutLogSize: 'StdoutLogSize',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      stderrLog: 'string',
      stderrLogSize: 'string',
      stdoutLog: 'string',
      stdoutLogSize: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobLogResponseBody;
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
      body: GetJobLogResponseBody,
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

export class GetQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * comp
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queue configurations.
   */
  queue?: GetQueueResponseBodyQueue;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: GetQueueResponseBodyQueue,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueueResponseBody;
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
      body: GetQueueResponseBody,
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

export class InstallAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  addonName?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  addonVersion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   * 
   * This parameter is required.
   * 
   * @example
   * `{"EipResource": {"AutoCreate": true}, "EcsResources": [{"InstanceType": "ecs.c7.xlarge", "ImageId": "centos_7_6_xxx.vhd", "SystemDisk": {"Category": "cloud_essd", "Size": 40, "Level": "PL0"}]}`
   */
  resourcesSpec?: string;
  /**
   * @remarks
   * The service configurations of the addon.
   * 
   * This parameter is required.
   * 
   * @example
   * `[{"ServiceName": "SSH", "ServiceAccessType": null, "ServiceAccessUrl": null, "NetworkACL": [{"IpProtocol": "TCP", "Port": 22, "SourceCidrIp": "0.0.0.0/0"}]}, {"ServiceName": "VNC", "ServiceAccessType": null, "ServiceAccessUrl": null, "NetworkACL": [{"IpProtocol": "TCP", "Port": 12016, "SourceCidrIp": "0.0.0.0/0"}]}]`
   */
  servicesSpec?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonVersion: 'AddonVersion',
      clusterId: 'ClusterId',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonVersion: 'string',
      clusterId: 'string',
      resourcesSpec: 'string',
      servicesSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
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

export class InstallAddonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAddonResponseBody;
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
      body: InstallAddonResponseBody,
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

export class InstallSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to install.
   */
  additionalPackages?: InstallSoftwaresRequestAdditionalPackages[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': InstallSoftwaresRequestAdditionalPackages },
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to install.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class InstallSoftwaresResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallSoftwaresResponseBody;
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
      body: InstallSoftwaresResponseBody,
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

export class ListAddonTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The addon names.
   */
  addonNames?: string[];
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      addonNames: 'AddonNames',
      clusterCategory: 'ClusterCategory',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonNames: { 'type': 'array', 'itemType': 'string' },
      clusterCategory: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addonNames)) {
      $dara.Model.validateArray(this.addonNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the addon templates.
   */
  addons?: ListAddonTemplatesResponseBodyAddons[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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
      addons: 'Addons',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonTemplatesResponseBodyAddons },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddonTemplatesResponseBody;
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
      body: ListAddonTemplatesResponseBody,
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

export class ListAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The addon IDs.
   */
  addonIds?: string[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      addonIds: 'AddonIds',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addonIds)) {
      $dara.Model.validateArray(this.addonIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The addon IDs.
   */
  addonIdsShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      addonIdsShrink: 'AddonIds',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonIdsShrink: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the addons.
   */
  addons?: ListAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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
      addons: 'Addons',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddonsResponseBody;
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
      body: ListAddonsResponseBody,
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

export class ListAvailableFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Page starts from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file systems.
   */
  fileSystemList?: ListAvailableFileSystemsResponseBodyFileSystemList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF4E8AB1-02A3-5ECF-87CC-3AB7BE98**
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 65
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemList: 'FileSystemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemList)) {
      $dara.Model.validateArray(this.fileSystemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableFileSystemsResponseBody;
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
      body: ListAvailableFileSystemsResponseBody,
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

export class ListAvailableImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the domain account service.
   */
  directoryService?: ListAvailableImagesRequestDirectoryService;
  /**
   * @remarks
   * Specifies whether to return images in which hyper-threading is enabled.
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The network type of the images that you want to query.
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: system image.
   * *   self: custom image.
   * *   others: shared image.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * >  By default, if you do not specify an instance type, the list of images that are supported by all instance types are queried. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to return published community images. Valid values:
   * 
   * *   true: returns published community images. If you set the value of this parameter to `true`, the `ImageOwnerAlias` parameter must be set to `others`.
   * *   false: returns non-community images. The value of the `ImageOwnerAlias` parameter prevails.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isPublic?: boolean;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The scheduler information about the images that you want to query.
   */
  scheduler?: ListAvailableImagesRequestScheduler;
  static names(): { [key: string]: string } {
    return {
      directoryService: 'DirectoryService',
      enableHT: 'EnableHT',
      HPCInterConnect: 'HPCInterConnect',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      isPublic: 'IsPublic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryService: ListAvailableImagesRequestDirectoryService,
      enableHT: 'boolean',
      HPCInterConnect: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      isPublic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      scheduler: ListAvailableImagesRequestScheduler,
    };
  }

  validate() {
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the domain account service.
   */
  directoryServiceShrink?: string;
  /**
   * @remarks
   * Specifies whether to return images in which hyper-threading is enabled.
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The network type of the images that you want to query.
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: system image.
   * *   self: custom image.
   * *   others: shared image.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * >  By default, if you do not specify an instance type, the list of images that are supported by all instance types are queried. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to return published community images. Valid values:
   * 
   * *   true: returns published community images. If you set the value of this parameter to `true`, the `ImageOwnerAlias` parameter must be set to `others`.
   * *   false: returns non-community images. The value of the `ImageOwnerAlias` parameter prevails.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isPublic?: boolean;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The scheduler information about the images that you want to query.
   */
  schedulerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      directoryServiceShrink: 'DirectoryService',
      enableHT: 'EnableHT',
      HPCInterConnect: 'HPCInterConnect',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      isPublic: 'IsPublic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schedulerShrink: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryServiceShrink: 'string',
      enableHT: 'boolean',
      HPCInterConnect: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      isPublic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      schedulerShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the images.
   */
  images?: ListAvailableImagesResponseBodyImages[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListAvailableImagesResponseBodyImages },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
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

export class ListAvailableImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableImagesResponseBody;
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
      body: ListAvailableImagesResponseBody,
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

export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. You can specify up to 20 IDs.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * The cluster names. You can specify up to 20 names.
   */
  clusterNames?: string[];
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      clusterNames: 'ClusterNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      clusterNames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    if(Array.isArray(this.clusterNames)) {
      $dara.Model.validateArray(this.clusterNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. You can specify up to 20 IDs.
   */
  clusterIdsShrink?: string;
  /**
   * @remarks
   * The cluster names. You can specify up to 20 names.
   */
  clusterNamesShrink?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIdsShrink: 'ClusterIds',
      clusterNamesShrink: 'ClusterNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIdsShrink: 'string',
      clusterNamesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      pageNumber: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
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
      body: ListClustersResponseBody,
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

export class ListCommonLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The action types.
   */
  actionName?: string[];
  /**
   * @remarks
   * The action status. Logs associated with the specific action status are returned.
   * 
   * Valid values:
   * 
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * *   InProgress: The action is being performed.
   * 
   * @example
   * Finished
   */
  actionStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The start time of the time range. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to display results in reverse order.
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  isReverse?: boolean;
  /**
   * @remarks
   * The request ID of the action. Logs associated with the specific request ID are returned.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @remarks
   * The log type. Logs of the specific type are returned.
   * 
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource involved in the action. Logs associated with the specific resource are returned. This parameter is not recommended.
   * 
   * @example
   * i-abc***
   */
  resource?: string;
  /**
   * @remarks
   * The end time of the time range. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionStatus: 'ActionStatus',
      clusterId: 'ClusterId',
      from: 'From',
      isReverse: 'IsReverse',
      logRequestId: 'LogRequestId',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resource: 'Resource',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: { 'type': 'array', 'itemType': 'string' },
      actionStatus: 'string',
      clusterId: 'string',
      from: 'number',
      isReverse: 'boolean',
      logRequestId: 'string',
      logType: 'string',
      operatorUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resource: 'string',
      to: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionName)) {
      $dara.Model.validateArray(this.actionName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The action types.
   */
  actionNameShrink?: string;
  /**
   * @remarks
   * The action status. Logs associated with the specific action status are returned.
   * 
   * Valid values:
   * 
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * *   InProgress: The action is being performed.
   * 
   * @example
   * Finished
   */
  actionStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The start time of the time range. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @remarks
   * Specifies whether to display results in reverse order.
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  isReverse?: boolean;
  /**
   * @remarks
   * The request ID of the action. Logs associated with the specific request ID are returned.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @remarks
   * The log type. Logs of the specific type are returned.
   * 
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource involved in the action. Logs associated with the specific resource are returned. This parameter is not recommended.
   * 
   * @example
   * i-abc***
   */
  resource?: string;
  /**
   * @remarks
   * The end time of the time range. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      actionNameShrink: 'ActionName',
      actionStatus: 'ActionStatus',
      clusterId: 'ClusterId',
      from: 'From',
      isReverse: 'IsReverse',
      logRequestId: 'LogRequestId',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resource: 'Resource',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNameShrink: 'string',
      actionStatus: 'string',
      clusterId: 'string',
      from: 'number',
      isReverse: 'boolean',
      logRequestId: 'string',
      logType: 'string',
      operatorUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resource: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The brief information of operation logs.
   */
  logs?: ListCommonLogsResponseBodyLogs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 137***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListCommonLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCommonLogsResponseBody;
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
      body: ListCommonLogsResponseBody,
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

export class ListInstalledSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of installed software.
   */
  additionalPackages?: ListInstalledSoftwaresResponseBodyAdditionalPackages;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: ListInstalledSoftwaresResponseBodyAdditionalPackages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.additionalPackages && typeof (this.additionalPackages as any).validate === 'function') {
      (this.additionalPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstalledSoftwaresResponseBody;
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
      body: ListInstalledSoftwaresResponseBody,
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

export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-csbua72***
   */
  clusterId?: string;
  /**
   * @remarks
   * The job filter information.
   */
  jobFilter?: ListJobsRequestJobFilter;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 50.
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobFilter: 'JobFilter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobFilter: ListJobsRequestJobFilter,
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    if(this.jobFilter && typeof (this.jobFilter as any).validate === 'function') {
      (this.jobFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-csbua72***
   */
  clusterId?: string;
  /**
   * @remarks
   * The job filter information.
   */
  jobFilterShrink?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 50.
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobFilterShrink: 'JobFilter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobFilterShrink: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs.
   */
  jobs?: ListJobsResponseBodyJobs[];
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EABFBD93-58BE-53F3-BBFE-8654BB2E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
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

export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hostnames of the compute nodes that you want to query.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The IP addresses of the compute nodes that you want to query.
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The queues to which the nodes belong.
   */
  queueNames?: string[];
  /**
   * @remarks
   * Specifies whether the results are sorted in ascending or descending order. Valid values:
   * 
   * *   Forward: ascending
   * *   Backward: descending
   * 
   * Default value: Forward.
   * 
   * @example
   * Forward
   */
  sequence?: string;
  /**
   * @remarks
   * The sorting method of the node list. Valid values:
   * 
   * *   AddedTime: sorts the nodes by the time that they were added.
   * *   HostName: sorts the nodes by their hostnames.
   * 
   * Default value: addedtime.
   * 
   * @example
   * AddedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The states of the compute nodes to be queried.
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostnames: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddress: 'PrivateIpAddress',
      queueNames: 'QueueNames',
      sequence: 'Sequence',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostnames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      queueNames: { 'type': 'array', 'itemType': 'string' },
      sequence: 'string',
      sortBy: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    if(Array.isArray(this.queueNames)) {
      $dara.Model.validateArray(this.queueNames);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hostnames of the compute nodes that you want to query.
   */
  hostnamesShrink?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The IP addresses of the compute nodes that you want to query.
   */
  privateIpAddressShrink?: string;
  /**
   * @remarks
   * The queues to which the nodes belong.
   */
  queueNamesShrink?: string;
  /**
   * @remarks
   * Specifies whether the results are sorted in ascending or descending order. Valid values:
   * 
   * *   Forward: ascending
   * *   Backward: descending
   * 
   * Default value: Forward.
   * 
   * @example
   * Forward
   */
  sequence?: string;
  /**
   * @remarks
   * The sorting method of the node list. Valid values:
   * 
   * *   AddedTime: sorts the nodes by the time that they were added.
   * *   HostName: sorts the nodes by their hostnames.
   * 
   * Default value: addedtime.
   * 
   * @example
   * AddedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The states of the compute nodes to be queried.
   */
  statusShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostnamesShrink: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddressShrink: 'PrivateIpAddress',
      queueNamesShrink: 'QueueNames',
      sequence: 'Sequence',
      sortBy: 'SortBy',
      statusShrink: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostnamesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddressShrink: 'string',
      queueNamesShrink: 'string',
      sequence: 'string',
      sortBy: 'string',
      statusShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the nodes.
   */
  nodes?: ListNodesResponseBodyNodes[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89A1AC0F-4A6C-4F3D-98F9-BEF9A823****
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
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyNodes },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
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
      body: ListNodesResponseBody,
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

export class ListQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The names of the queues that you want to query. You can specify up to eight names.
   */
  queueNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNames: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.queueNames)) {
      $dara.Model.validateArray(this.queueNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The names of the queues that you want to query. You can specify up to eight names.
   */
  queueNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNamesShrink: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the queues.
   */
  queues?: ListQueuesResponseBodyQueues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6E5005C-00B0-4F27-98BB-95AB88016C22
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
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queues: 'Queues',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queues: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueues },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueuesResponseBody;
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
      body: ListQueuesResponseBody,
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

export class ListSharedStoragesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the attached file system.
   * 
   * @example
   * 0bd504b0**
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the attached file system. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * @example
   * nas
   */
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C084****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the attached shared storage.
   */
  sharedStorages?: ListSharedStoragesResponseBodySharedStorages[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sharedStorages: 'SharedStorages',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStorages },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSharedStoragesResponseBody;
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
      body: ListSharedStoragesResponseBody,
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

export class ListSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The application category.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The operating system (OS) information.
   */
  osInfos?: ListSoftwaresRequestOsInfos[];
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clusterId: 'ClusterId',
      name: 'Name',
      osInfos: 'OsInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clusterId: 'string',
      name: 'string',
      osInfos: { 'type': 'array', 'itemType': ListSoftwaresRequestOsInfos },
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.osInfos)) {
      $dara.Model.validateArray(this.osInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the software that can be installed in the cluster.
   */
  additionalPackages?: ListSoftwaresResponseBodyAdditionalPackages;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: ListSoftwaresResponseBodyAdditionalPackages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.additionalPackages && typeof (this.additionalPackages as any).validate === 'function') {
      (this.additionalPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSoftwaresResponseBody;
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
      body: ListSoftwaresResponseBody,
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

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the users.
   */
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: ListUsersResponseBodyUsers,
    };
  }

  validate() {
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
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

export class StopJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the jobs that you want to stop.
   */
  jobIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the jobs that you want to stop.
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8868A00-6757-5542-BDD6-E1040D94****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopJobsResponseBody;
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
      body: StopJobsResponseBody,
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

export class UnInstallAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class UnInstallAddonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnInstallAddonResponseBody;
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
      body: UnInstallAddonResponseBody,
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

export class UninstallSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to uninstall.
   */
  additionalPackages?: UninstallSoftwaresRequestAdditionalPackages[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': UninstallSoftwaresRequestAdditionalPackages },
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to uninstall.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class UninstallSoftwaresResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallSoftwaresResponseBody;
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
      body: UninstallSoftwaresResponseBody,
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

export class UpdateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The client version. By default, the latest version is used.
   * 
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfiguration?: UpdateClusterRequestClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster description. The description must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterName?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. Deletion protection decides whether the cluster can be deleted in the console or by calling the DeleteCluster operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-in for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-out for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The interval at which the cluster is automatically scaled out.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * The idle duration of the compute nodes allowed by the cluster.
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The total maximum number of vCPUs for use by compute nodes in the cluster. Valid values: 0 to 100,000.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage. Valid values: 0 to 5,000.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  monitorSpec?: UpdateClusterRequestMonitorSpec;
  schedulerSpec?: UpdateClusterRequestSchedulerSpec;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      deletionProtection: 'DeletionProtection',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      monitorSpec: 'MonitorSpec',
      schedulerSpec: 'SchedulerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCustomConfiguration: UpdateClusterRequestClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      deletionProtection: 'boolean',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      maxCoreCount: 'number',
      maxCount: 'number',
      monitorSpec: UpdateClusterRequestMonitorSpec,
      schedulerSpec: UpdateClusterRequestSchedulerSpec,
    };
  }

  validate() {
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.monitorSpec && typeof (this.monitorSpec as any).validate === 'function') {
      (this.monitorSpec as any).validate();
    }
    if(this.schedulerSpec && typeof (this.schedulerSpec as any).validate === 'function') {
      (this.schedulerSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client version. By default, the latest version is used.
   * 
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfigurationShrink?: string;
  /**
   * @remarks
   * The cluster description. The description must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterName?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. Deletion protection decides whether the cluster can be deleted in the console or by calling the DeleteCluster operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-in for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-out for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The interval at which the cluster is automatically scaled out.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * The idle duration of the compute nodes allowed by the cluster.
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The total maximum number of vCPUs for use by compute nodes in the cluster. Valid values: 0 to 100,000.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage. Valid values: 0 to 5,000.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  monitorSpecShrink?: string;
  schedulerSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCustomConfigurationShrink: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      deletionProtection: 'DeletionProtection',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      monitorSpecShrink: 'MonitorSpec',
      schedulerSpecShrink: 'SchedulerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCustomConfigurationShrink: 'string',
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      deletionProtection: 'boolean',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      maxCoreCount: 'number',
      maxCount: 'number',
      monitorSpecShrink: 'string',
      schedulerSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterResponseBody;
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
      body: UpdateClusterResponseBody,
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

export class UpdateNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the compute nodes that you want to update.
   */
  instances?: UpdateNodesRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instances: { 'type': 'array', 'itemType': UpdateNodesRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the compute nodes that you want to update.
   */
  instancesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instancesShrink: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instancesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNodesResponseBody;
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
      body: UpdateNodesResponseBody,
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

export class UpdateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the queue to be updated.
   */
  queue?: UpdateQueueRequestQueue;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queue: UpdateQueueRequestQueue,
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the queue to be updated.
   */
  queueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueShrink: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQueueResponseBody;
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
      body: UpdateQueueResponseBody,
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

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The user group attribute of the user that you want to update. Valid values:
   * 
   * *   users: ordinary permissions, which are suitable for ordinary users that need only to submit and debug jobs.
   * *   wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The password attribute of the user that you want to update. The password must be 6 to 30 characters in length and must contain three of the following four character types:
   * 
   * *   Uppercase letters
   * *   Lowercase letters
   * *   Digits
   * *   Special characters ()~!@#$%^&\\*-_+=|{}[]:;\\"/<>,.?/
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      group: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
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
      body: UpdateUserResponseBody,
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
    this._endpoint = this.getEndpoint("ehpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Attaches shared storage to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * When you call this operation, take note of the following items:
   * *   The file system that you want to attach must be created in advance in the same virtual private cloud (VPC) as the destination cluster. For more information, see [Create a file system](https://help.aliyun.com/document_detail/27530.html) and [Manage mount targets](https://help.aliyun.com/document_detail/27531.html).
   * *   E-HPC clusters support Apsara File Storage NAS file systems.
   * 
   * @param tmpReq - AttachSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachSharedStoragesResponse
   */
  async attachSharedStoragesWithOptions(tmpReq: AttachSharedStoragesRequest, runtime: $dara.RuntimeOptions): Promise<AttachSharedStoragesResponse> {
    tmpReq.validate();
    let request = new AttachSharedStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachSharedStoragesResponse>(await this.callApi(params, req, runtime), new AttachSharedStoragesResponse({}));
    } else {
      return $dara.cast<AttachSharedStoragesResponse>(await this.execute(params, req, runtime), new AttachSharedStoragesResponse({}));
    }

  }

  /**
   * Attaches shared storage to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * When you call this operation, take note of the following items:
   * *   The file system that you want to attach must be created in advance in the same virtual private cloud (VPC) as the destination cluster. For more information, see [Create a file system](https://help.aliyun.com/document_detail/27530.html) and [Manage mount targets](https://help.aliyun.com/document_detail/27531.html).
   * *   E-HPC clusters support Apsara File Storage NAS file systems.
   * 
   * @param request - AttachSharedStoragesRequest
   * @returns AttachSharedStoragesResponse
   */
  async attachSharedStorages(request: AttachSharedStoragesRequest): Promise<AttachSharedStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you call this operation, make sure that you are familiar with the billing and pricing of E-HPC. For more information, see [Overview](https://help.aliyun.com/document_detail/2842985.html).
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<CreateClusterResponse> {
    tmpReq.validate();
    let request = new CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    if (!$dara.isNull(tmpReq.addons)) {
      request.addonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addons, "Addons", "json");
    }

    if (!$dara.isNull(tmpReq.clusterCredentials)) {
      request.clusterCredentialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCredentials, "ClusterCredentials", "json");
    }

    if (!$dara.isNull(tmpReq.clusterCustomConfiguration)) {
      request.clusterCustomConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCustomConfiguration, "ClusterCustomConfiguration", "json");
    }

    if (!$dara.isNull(tmpReq.manager)) {
      request.managerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.manager, "Manager", "json");
    }

    if (!$dara.isNull(tmpReq.queues)) {
      request.queuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queues, "Queues", "json");
    }

    if (!$dara.isNull(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.additionalPackagesShrink)) {
      query["AdditionalPackages"] = request.additionalPackagesShrink;
    }

    if (!$dara.isNull(request.addonsShrink)) {
      query["Addons"] = request.addonsShrink;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
    }

    if (!$dara.isNull(request.clusterCredentialsShrink)) {
      query["ClusterCredentials"] = request.clusterCredentialsShrink;
    }

    if (!$dara.isNull(request.clusterCustomConfigurationShrink)) {
      query["ClusterCustomConfiguration"] = request.clusterCustomConfigurationShrink;
    }

    if (!$dara.isNull(request.clusterDescription)) {
      query["ClusterDescription"] = request.clusterDescription;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterVSwitchId)) {
      query["ClusterVSwitchId"] = request.clusterVSwitchId;
    }

    if (!$dara.isNull(request.clusterVpcId)) {
      query["ClusterVpcId"] = request.clusterVpcId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.isEnterpriseSecurityGroup)) {
      query["IsEnterpriseSecurityGroup"] = request.isEnterpriseSecurityGroup;
    }

    if (!$dara.isNull(request.managerShrink)) {
      query["Manager"] = request.managerShrink;
    }

    if (!$dara.isNull(request.maxCoreCount)) {
      query["MaxCoreCount"] = request.maxCoreCount;
    }

    if (!$dara.isNull(request.maxCount)) {
      query["MaxCount"] = request.maxCount;
    }

    if (!$dara.isNull(request.queuesShrink)) {
      query["Queues"] = request.queuesShrink;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
    } else {
      return $dara.cast<CreateClusterResponse>(await this.execute(params, req, runtime), new CreateClusterResponse({}));
    }

  }

  /**
   * Creates a pay-as-you-go or subscription Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you call this operation, make sure that you are familiar with the billing and pricing of E-HPC. For more information, see [Overview](https://help.aliyun.com/document_detail/2842985.html).
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Creates a job for a cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of E-HPC.
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateJobResponse> {
    tmpReq.validate();
    let request = new CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobSpec)) {
      request.jobSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSpec, "JobSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.jobSpecShrink)) {
      query["JobSpec"] = request.jobSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
    } else {
      return $dara.cast<CreateJobResponse>(await this.execute(params, req, runtime), new CreateJobResponse({}));
    }

  }

  /**
   * Creates a job for a cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of E-HPC.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * Creates compute nodes for an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)
   * 
   * @param tmpReq - CreateNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodesResponse
   */
  async createNodesWithOptions(tmpReq: CreateNodesRequest, runtime: $dara.RuntimeOptions): Promise<CreateNodesResponse> {
    tmpReq.validate();
    let request = new CreateNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.computeNode)) {
      request.computeNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.computeNode, "ComputeNode", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.computeNodeShrink)) {
      query["ComputeNode"] = request.computeNodeShrink;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.HPCInterConnect)) {
      query["HPCInterConnect"] = request.HPCInterConnect;
    }

    if (!$dara.isNull(request.hostnamePrefix)) {
      query["HostnamePrefix"] = request.hostnamePrefix;
    }

    if (!$dara.isNull(request.hostnameSuffix)) {
      query["HostnameSuffix"] = request.hostnameSuffix;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reservedNodePoolId)) {
      query["ReservedNodePoolId"] = request.reservedNodePoolId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateNodesResponse>(await this.callApi(params, req, runtime), new CreateNodesResponse({}));
    } else {
      return $dara.cast<CreateNodesResponse>(await this.execute(params, req, runtime), new CreateNodesResponse({}));
    }

  }

  /**
   * Creates compute nodes for an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)
   * 
   * @param request - CreateNodesRequest
   * @returns CreateNodesResponse
   */
  async createNodes(request: CreateNodesRequest): Promise<CreateNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodesWithOptions(request, runtime);
  }

  /**
   * Creates a queue for an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(tmpReq: CreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<CreateQueueResponse> {
    tmpReq.validate();
    let request = new CreateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateQueueResponse>(await this.callApi(params, req, runtime), new CreateQueueResponse({}));
    } else {
      return $dara.cast<CreateQueueResponse>(await this.execute(params, req, runtime), new CreateQueueResponse({}));
    }

  }

  /**
   * Creates a queue for an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: CreateQueueRequest): Promise<CreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * Adds users to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - CreateUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsersResponse
   */
  async createUsersWithOptions(tmpReq: CreateUsersRequest, runtime: $dara.RuntimeOptions): Promise<CreateUsersResponse> {
    tmpReq.validate();
    let request = new CreateUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.userShrink)) {
      query["User"] = request.userShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateUsersResponse>(await this.callApi(params, req, runtime), new CreateUsersResponse({}));
    } else {
      return $dara.cast<CreateUsersResponse>(await this.execute(params, req, runtime), new CreateUsersResponse({}));
    }

  }

  /**
   * Adds users to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: CreateUsersRequest): Promise<CreateUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Releases an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Make sure that data of the cluster to be deleted is backed up before you call this operation.
   * > After a cluster is released, you cannot restore the data stored in the cluster. Exercise caution when you release a cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
    } else {
      return $dara.cast<DeleteClusterResponse>(await this.execute(params, req, runtime), new DeleteClusterResponse({}));
    }

  }

  /**
   * Releases an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Make sure that data of the cluster to be deleted is backed up before you call this operation.
   * > After a cluster is released, you cannot restore the data stored in the cluster. Exercise caution when you release a cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Deletes compute nodes from an Enterprise High Performance Computing (E-HPC) cluster at a time.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param tmpReq - DeleteNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodesResponse
   */
  async deleteNodesWithOptions(tmpReq: DeleteNodesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteNodesResponse> {
    tmpReq.validate();
    let request = new DeleteNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteNodesResponse>(await this.callApi(params, req, runtime), new DeleteNodesResponse({}));
    } else {
      return $dara.cast<DeleteNodesResponse>(await this.execute(params, req, runtime), new DeleteNodesResponse({}));
    }

  }

  /**
   * Deletes compute nodes from an Enterprise High Performance Computing (E-HPC) cluster at a time.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - DeleteNodesRequest
   * @returns DeleteNodesResponse
   */
  async deleteNodes(request: DeleteNodesRequest): Promise<DeleteNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  /**
   * Deletes queues from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a queue, you must delete all compute nodes in the queue.
   * 
   * @param tmpReq - DeleteQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueuesResponse
   */
  async deleteQueuesWithOptions(tmpReq: DeleteQueuesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteQueuesResponse> {
    tmpReq.validate();
    let request = new DeleteQueuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueues",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteQueuesResponse>(await this.callApi(params, req, runtime), new DeleteQueuesResponse({}));
    } else {
      return $dara.cast<DeleteQueuesResponse>(await this.execute(params, req, runtime), new DeleteQueuesResponse({}));
    }

  }

  /**
   * Deletes queues from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a queue, you must delete all compute nodes in the queue.
   * 
   * @param request - DeleteQueuesRequest
   * @returns DeleteQueuesResponse
   */
  async deleteQueues(request: DeleteQueuesRequest): Promise<DeleteQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueuesWithOptions(request, runtime);
  }

  /**
   * Deletes users from a cluster.
   * 
   * @param tmpReq - DeleteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsersResponse
   */
  async deleteUsersWithOptions(tmpReq: DeleteUsersRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUsersResponse> {
    tmpReq.validate();
    let request = new DeleteUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUsersResponse>(await this.callApi(params, req, runtime), new DeleteUsersResponse({}));
    } else {
      return $dara.cast<DeleteUsersResponse>(await this.execute(params, req, runtime), new DeleteUsersResponse({}));
    }

  }

  /**
   * Deletes users from a cluster.
   * 
   * @param request - DeleteUsersRequest
   * @returns DeleteUsersResponse
   */
  async deleteUsers(request: DeleteUsersRequest): Promise<DeleteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  /**
   * Queries the details of an addon template.
   * 
   * @param request - DescribeAddonTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonTemplateResponse
   */
  async describeAddonTemplateWithOptions(request: DescribeAddonTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAddonTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddonTemplate",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAddonTemplateResponse>(await this.callApi(params, req, runtime), new DescribeAddonTemplateResponse({}));
    } else {
      return $dara.cast<DescribeAddonTemplateResponse>(await this.execute(params, req, runtime), new DescribeAddonTemplateResponse({}));
    }

  }

  /**
   * Queries the details of an addon template.
   * 
   * @param request - DescribeAddonTemplateRequest
   * @returns DescribeAddonTemplateResponse
   */
  async describeAddonTemplate(request: DescribeAddonTemplateRequest): Promise<DescribeAddonTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddonTemplateWithOptions(request, runtime);
  }

  /**
   * Unmounts shared storage from the mount directory of a cluster.
   * 
   * @param tmpReq - DetachSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachSharedStoragesResponse
   */
  async detachSharedStoragesWithOptions(tmpReq: DetachSharedStoragesRequest, runtime: $dara.RuntimeOptions): Promise<DetachSharedStoragesResponse> {
    tmpReq.validate();
    let request = new DetachSharedStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachSharedStoragesResponse>(await this.callApi(params, req, runtime), new DetachSharedStoragesResponse({}));
    } else {
      return $dara.cast<DetachSharedStoragesResponse>(await this.execute(params, req, runtime), new DetachSharedStoragesResponse({}));
    }

  }

  /**
   * Unmounts shared storage from the mount directory of a cluster.
   * 
   * @param request - DetachSharedStoragesRequest
   * @returns DetachSharedStoragesResponse
   */
  async detachSharedStorages(request: DetachSharedStoragesRequest): Promise<DetachSharedStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an installed addon.
   * 
   * @param request - GetAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonResponse
   */
  async getAddonWithOptions(request: GetAddonRequest, runtime: $dara.RuntimeOptions): Promise<GetAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonId)) {
      query["AddonId"] = request.addonId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAddonResponse>(await this.callApi(params, req, runtime), new GetAddonResponse({}));
    } else {
      return $dara.cast<GetAddonResponse>(await this.execute(params, req, runtime), new GetAddonResponse({}));
    }

  }

  /**
   * Queries the details of an installed addon.
   * 
   * @param request - GetAddonRequest
   * @returns GetAddonResponse
   */
  async getAddon(request: GetAddonRequest): Promise<GetAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAddonWithOptions(request, runtime);
  }

  /**
   * Queries information about an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: GetClusterRequest, runtime: $dara.RuntimeOptions): Promise<GetClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
    } else {
      return $dara.cast<GetClusterResponse>(await this.execute(params, req, runtime), new GetClusterResponse({}));
    }

  }

  /**
   * Queries information about an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * Query logs based on a request ID. Logs for specific actions can be queried thanks to an Action-Stage-Method three-layer log splitting structure.
   * 
   * @param request - GetCommonLogDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommonLogDetailResponse
   */
  async getCommonLogDetailWithOptions(request: GetCommonLogDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetCommonLogDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.hiddenProcess)) {
      query["HiddenProcess"] = request.hiddenProcess;
    }

    if (!$dara.isNull(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommonLogDetail",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCommonLogDetailResponse>(await this.callApi(params, req, runtime), new GetCommonLogDetailResponse({}));
    } else {
      return $dara.cast<GetCommonLogDetailResponse>(await this.execute(params, req, runtime), new GetCommonLogDetailResponse({}));
    }

  }

  /**
   * Query logs based on a request ID. Logs for specific actions can be queried thanks to an Action-Stage-Method three-layer log splitting structure.
   * 
   * @param request - GetCommonLogDetailRequest
   * @returns GetCommonLogDetailResponse
   */
  async getCommonLogDetail(request: GetCommonLogDetailRequest): Promise<GetCommonLogDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommonLogDetailWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a job.
   * 
   * @param request - GetJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(request: GetJobRequest, runtime: $dara.RuntimeOptions): Promise<GetJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
    } else {
      return $dara.cast<GetJobResponse>(await this.execute(params, req, runtime), new GetJobResponse({}));
    }

  }

  /**
   * Obtains the details of a job.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * Queries the output logs of a job, including standard output logs and error output logs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Currently, only Slurm and PBS Pro schedulers for Standard Edition clusters are supported.
   * 
   * @param request - GetJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobLogResponse
   */
  async getJobLogWithOptions(request: GetJobLogRequest, runtime: $dara.RuntimeOptions): Promise<GetJobLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobLog",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobLogResponse>(await this.callApi(params, req, runtime), new GetJobLogResponse({}));
    } else {
      return $dara.cast<GetJobLogResponse>(await this.execute(params, req, runtime), new GetJobLogResponse({}));
    }

  }

  /**
   * Queries the output logs of a job, including standard output logs and error output logs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Currently, only Slurm and PBS Pro schedulers for Standard Edition clusters are supported.
   * 
   * @param request - GetJobLogRequest
   * @returns GetJobLogResponse
   */
  async getJobLog(request: GetJobLogRequest): Promise<GetJobLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobLogWithOptions(request, runtime);
  }

  /**
   * Queries the details of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueResponse
   */
  async getQueueWithOptions(request: GetQueueRequest, runtime: $dara.RuntimeOptions): Promise<GetQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQueueResponse>(await this.callApi(params, req, runtime), new GetQueueResponse({}));
    } else {
      return $dara.cast<GetQueueResponse>(await this.execute(params, req, runtime), new GetQueueResponse({}));
    }

  }

  /**
   * Queries the details of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetQueueRequest
   * @returns GetQueueResponse
   */
  async getQueue(request: GetQueueRequest): Promise<GetQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueWithOptions(request, runtime);
  }

  /**
   * Installs an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into two types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - InstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAddonResponse
   */
  async installAddonWithOptions(request: InstallAddonRequest, runtime: $dara.RuntimeOptions): Promise<InstallAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.resourcesSpec)) {
      query["ResourcesSpec"] = request.resourcesSpec;
    }

    if (!$dara.isNull(request.servicesSpec)) {
      query["ServicesSpec"] = request.servicesSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallAddonResponse>(await this.callApi(params, req, runtime), new InstallAddonResponse({}));
    } else {
      return $dara.cast<InstallAddonResponse>(await this.execute(params, req, runtime), new InstallAddonResponse({}));
    }

  }

  /**
   * Installs an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into two types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - InstallAddonRequest
   * @returns InstallAddonResponse
   */
  async installAddon(request: InstallAddonRequest): Promise<InstallAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAddonWithOptions(request, runtime);
  }

  /**
   * Installs software for a specified cluster.
   * 
   * @param tmpReq - InstallSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallSoftwaresResponse
   */
  async installSoftwaresWithOptions(tmpReq: InstallSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<InstallSoftwaresResponse> {
    tmpReq.validate();
    let request = new InstallSoftwaresShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallSoftwaresResponse>(await this.callApi(params, req, runtime), new InstallSoftwaresResponse({}));
    } else {
      return $dara.cast<InstallSoftwaresResponse>(await this.execute(params, req, runtime), new InstallSoftwaresResponse({}));
    }

  }

  /**
   * Installs software for a specified cluster.
   * 
   * @param request - InstallSoftwaresRequest
   * @returns InstallSoftwaresResponse
   */
  async installSoftwares(request: InstallSoftwaresRequest): Promise<InstallSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries supported addon templates.
   * 
   * @param request - ListAddonTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonTemplatesResponse
   */
  async listAddonTemplatesWithOptions(request: ListAddonTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<ListAddonTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonNames)) {
      query["AddonNames"] = request.addonNames;
    }

    if (!$dara.isNull(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddonTemplates",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAddonTemplatesResponse>(await this.callApi(params, req, runtime), new ListAddonTemplatesResponse({}));
    } else {
      return $dara.cast<ListAddonTemplatesResponse>(await this.execute(params, req, runtime), new ListAddonTemplatesResponse({}));
    }

  }

  /**
   * Queries supported addon templates.
   * 
   * @param request - ListAddonTemplatesRequest
   * @returns ListAddonTemplatesResponse
   */
  async listAddonTemplates(request: ListAddonTemplatesRequest): Promise<ListAddonTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries installed addons of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - ListAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(tmpReq: ListAddonsRequest, runtime: $dara.RuntimeOptions): Promise<ListAddonsResponse> {
    tmpReq.validate();
    let request = new ListAddonsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addonIds)) {
      request.addonIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addonIds, "AddonIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonIdsShrink)) {
      query["AddonIds"] = request.addonIdsShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddons",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAddonsResponse>(await this.callApi(params, req, runtime), new ListAddonsResponse({}));
    } else {
      return $dara.cast<ListAddonsResponse>(await this.execute(params, req, runtime), new ListAddonsResponse({}));
    }

  }

  /**
   * Queries installed addons of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: ListAddonsRequest): Promise<ListAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonsWithOptions(request, runtime);
  }

  /**
   * Queries the file systems that can be attached in a region.
   * 
   * @param request - ListAvailableFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableFileSystemsResponse
   */
  async listAvailableFileSystemsWithOptions(request: ListAvailableFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<ListAvailableFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableFileSystems",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAvailableFileSystemsResponse>(await this.callApi(params, req, runtime), new ListAvailableFileSystemsResponse({}));
    } else {
      return $dara.cast<ListAvailableFileSystemsResponse>(await this.execute(params, req, runtime), new ListAvailableFileSystemsResponse({}));
    }

  }

  /**
   * Queries the file systems that can be attached in a region.
   * 
   * @param request - ListAvailableFileSystemsRequest
   * @returns ListAvailableFileSystemsResponse
   */
  async listAvailableFileSystems(request: ListAvailableFileSystemsRequest): Promise<ListAvailableFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableFileSystemsWithOptions(request, runtime);
  }

  /**
   * Queries images that are available for Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @param tmpReq - ListAvailableImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableImagesResponse
   */
  async listAvailableImagesWithOptions(tmpReq: ListAvailableImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListAvailableImagesResponse> {
    tmpReq.validate();
    let request = new ListAvailableImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.directoryService)) {
      request.directoryServiceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directoryService, "DirectoryService", "json");
    }

    if (!$dara.isNull(tmpReq.scheduler)) {
      request.schedulerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduler, "Scheduler", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableImages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAvailableImagesResponse>(await this.callApi(params, req, runtime), new ListAvailableImagesResponse({}));
    } else {
      return $dara.cast<ListAvailableImagesResponse>(await this.execute(params, req, runtime), new ListAvailableImagesResponse({}));
    }

  }

  /**
   * Queries images that are available for Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @param request - ListAvailableImagesRequest
   * @returns ListAvailableImagesResponse
   */
  async listAvailableImages(request: ListAvailableImagesRequest): Promise<ListAvailableImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableImagesWithOptions(request, runtime);
  }

  /**
   * Queries all clusters of a user in each region.
   * 
   * @param tmpReq - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(tmpReq: ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<ListClustersResponse> {
    tmpReq.validate();
    let request = new ListClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "json");
    }

    if (!$dara.isNull(tmpReq.clusterNames)) {
      request.clusterNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterNames, "ClusterNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!$dara.isNull(request.clusterNamesShrink)) {
      query["ClusterNames"] = request.clusterNamesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
    } else {
      return $dara.cast<ListClustersResponse>(await this.execute(params, req, runtime), new ListClustersResponse({}));
    }

  }

  /**
   * Queries all clusters of a user in each region.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a cluster that are generated within a time range.
   * 
   * @param tmpReq - ListCommonLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonLogsResponse
   */
  async listCommonLogsWithOptions(tmpReq: ListCommonLogsRequest, runtime: $dara.RuntimeOptions): Promise<ListCommonLogsResponse> {
    tmpReq.validate();
    let request = new ListCommonLogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionName)) {
      request.actionNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionName, "ActionName", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionNameShrink)) {
      query["ActionName"] = request.actionNameShrink;
    }

    if (!$dara.isNull(request.actionStatus)) {
      query["ActionStatus"] = request.actionStatus;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.isReverse)) {
      query["IsReverse"] = request.isReverse;
    }

    if (!$dara.isNull(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.operatorUid)) {
      query["OperatorUid"] = request.operatorUid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommonLogs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCommonLogsResponse>(await this.callApi(params, req, runtime), new ListCommonLogsResponse({}));
    } else {
      return $dara.cast<ListCommonLogsResponse>(await this.execute(params, req, runtime), new ListCommonLogsResponse({}));
    }

  }

  /**
   * Queries the logs of a cluster that are generated within a time range.
   * 
   * @param request - ListCommonLogsRequest
   * @returns ListCommonLogsResponse
   */
  async listCommonLogs(request: ListCommonLogsRequest): Promise<ListCommonLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommonLogsWithOptions(request, runtime);
  }

  /**
   * Queries the installed software of a cluster.
   * 
   * @param request - ListInstalledSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstalledSoftwaresResponse
   */
  async listInstalledSoftwaresWithOptions(request: ListInstalledSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<ListInstalledSoftwaresResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstalledSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstalledSoftwaresResponse>(await this.callApi(params, req, runtime), new ListInstalledSoftwaresResponse({}));
    } else {
      return $dara.cast<ListInstalledSoftwaresResponse>(await this.execute(params, req, runtime), new ListInstalledSoftwaresResponse({}));
    }

  }

  /**
   * Queries the installed software of a cluster.
   * 
   * @param request - ListInstalledSoftwaresRequest
   * @returns ListInstalledSoftwaresResponse
   */
  async listInstalledSoftwares(request: ListInstalledSoftwaresRequest): Promise<ListInstalledSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstalledSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries the jobs in a cluster.
   * 
   * @param tmpReq - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListJobsResponse> {
    tmpReq.validate();
    let request = new ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobFilter)) {
      request.jobFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobFilter, "JobFilter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobFilterShrink)) {
      query["JobFilter"] = request.jobFilterShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
    } else {
      return $dara.cast<ListJobsResponse>(await this.execute(params, req, runtime), new ListJobsResponse({}));
    }

  }

  /**
   * Queries the jobs in a cluster.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Queries the nodes of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(tmpReq: ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<ListNodesResponse> {
    tmpReq.validate();
    let request = new ListNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hostnames)) {
      request.hostnamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostnames, "Hostnames", "json");
    }

    if (!$dara.isNull(tmpReq.privateIpAddress)) {
      request.privateIpAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.privateIpAddress, "PrivateIpAddress", "json");
    }

    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hostnamesShrink)) {
      query["Hostnames"] = request.hostnamesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateIpAddressShrink)) {
      query["PrivateIpAddress"] = request.privateIpAddressShrink;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["Status"] = request.statusShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
    } else {
      return $dara.cast<ListNodesResponse>(await this.execute(params, req, runtime), new ListNodesResponse({}));
    }

  }

  /**
   * Queries the nodes of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries queues in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - ListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueuesResponse
   */
  async listQueuesWithOptions(tmpReq: ListQueuesRequest, runtime: $dara.RuntimeOptions): Promise<ListQueuesResponse> {
    tmpReq.validate();
    let request = new ListQueuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueues",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListQueuesResponse>(await this.callApi(params, req, runtime), new ListQueuesResponse({}));
    } else {
      return $dara.cast<ListQueuesResponse>(await this.execute(params, req, runtime), new ListQueuesResponse({}));
    }

  }

  /**
   * Queries queues in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * Queries the shared storage that is attached to a cluster.
   * 
   * @param request - ListSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedStoragesResponse
   */
  async listSharedStoragesWithOptions(request: ListSharedStoragesRequest, runtime: $dara.RuntimeOptions): Promise<ListSharedStoragesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSharedStoragesResponse>(await this.callApi(params, req, runtime), new ListSharedStoragesResponse({}));
    } else {
      return $dara.cast<ListSharedStoragesResponse>(await this.execute(params, req, runtime), new ListSharedStoragesResponse({}));
    }

  }

  /**
   * Queries the shared storage that is attached to a cluster.
   * 
   * @param request - ListSharedStoragesRequest
   * @returns ListSharedStoragesResponse
   */
  async listSharedStorages(request: ListSharedStoragesRequest): Promise<ListSharedStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Queries the software that can be installed in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwaresResponse
   */
  async listSoftwaresWithOptions(request: ListSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<ListSoftwaresResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSoftwaresResponse>(await this.callApi(params, req, runtime), new ListSoftwaresResponse({}));
    } else {
      return $dara.cast<ListSoftwaresResponse>(await this.execute(params, req, runtime), new ListSoftwaresResponse({}));
    }

  }

  /**
   * Queries the software that can be installed in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @returns ListSoftwaresResponse
   */
  async listSoftwares(request: ListSoftwaresRequest): Promise<ListSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries the users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
    } else {
      return $dara.cast<ListUsersResponse>(await this.execute(params, req, runtime), new ListUsersResponse({}));
    }

  }

  /**
   * Queries the users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Stops uncompleted jobs in a batch in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - StopJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobsResponse
   */
  async stopJobsWithOptions(tmpReq: StopJobsRequest, runtime: $dara.RuntimeOptions): Promise<StopJobsResponse> {
    tmpReq.validate();
    let request = new StopJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIdsShrink)) {
      query["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJobs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopJobsResponse>(await this.callApi(params, req, runtime), new StopJobsResponse({}));
    } else {
      return $dara.cast<StopJobsResponse>(await this.execute(params, req, runtime), new StopJobsResponse({}));
    }

  }

  /**
   * Stops uncompleted jobs in a batch in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - StopJobsRequest
   * @returns StopJobsResponse
   */
  async stopJobs(request: StopJobsRequest): Promise<StopJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopJobsWithOptions(request, runtime);
  }

  /**
   * Uninstalls an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into the following types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - UnInstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnInstallAddonResponse
   */
  async unInstallAddonWithOptions(request: UnInstallAddonRequest, runtime: $dara.RuntimeOptions): Promise<UnInstallAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonId)) {
      query["AddonId"] = request.addonId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnInstallAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnInstallAddonResponse>(await this.callApi(params, req, runtime), new UnInstallAddonResponse({}));
    } else {
      return $dara.cast<UnInstallAddonResponse>(await this.execute(params, req, runtime), new UnInstallAddonResponse({}));
    }

  }

  /**
   * Uninstalls an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into the following types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - UnInstallAddonRequest
   * @returns UnInstallAddonResponse
   */
  async unInstallAddon(request: UnInstallAddonRequest): Promise<UnInstallAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unInstallAddonWithOptions(request, runtime);
  }

  /**
   * Uninstalls software systems from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - UninstallSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallSoftwaresResponse
   */
  async uninstallSoftwaresWithOptions(tmpReq: UninstallSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<UninstallSoftwaresResponse> {
    tmpReq.validate();
    let request = new UninstallSoftwaresShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallSoftwaresResponse>(await this.callApi(params, req, runtime), new UninstallSoftwaresResponse({}));
    } else {
      return $dara.cast<UninstallSoftwaresResponse>(await this.execute(params, req, runtime), new UninstallSoftwaresResponse({}));
    }

  }

  /**
   * Uninstalls software systems from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - UninstallSoftwaresRequest
   * @returns UninstallSoftwaresResponse
   */
  async uninstallSoftwares(request: UninstallSoftwaresRequest): Promise<UninstallSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallSoftwaresWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(tmpReq: UpdateClusterRequest, runtime: $dara.RuntimeOptions): Promise<UpdateClusterResponse> {
    tmpReq.validate();
    let request = new UpdateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clusterCustomConfiguration)) {
      request.clusterCustomConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCustomConfiguration, "ClusterCustomConfiguration", "json");
    }

    if (!$dara.isNull(tmpReq.monitorSpec)) {
      request.monitorSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitorSpec, "MonitorSpec", "json");
    }

    if (!$dara.isNull(tmpReq.schedulerSpec)) {
      request.schedulerSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerSpec, "SchedulerSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.clusterCustomConfigurationShrink)) {
      query["ClusterCustomConfiguration"] = request.clusterCustomConfigurationShrink;
    }

    if (!$dara.isNull(request.clusterDescription)) {
      query["ClusterDescription"] = request.clusterDescription;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.enableScaleIn)) {
      query["EnableScaleIn"] = request.enableScaleIn;
    }

    if (!$dara.isNull(request.enableScaleOut)) {
      query["EnableScaleOut"] = request.enableScaleOut;
    }

    if (!$dara.isNull(request.growInterval)) {
      query["GrowInterval"] = request.growInterval;
    }

    if (!$dara.isNull(request.idleInterval)) {
      query["IdleInterval"] = request.idleInterval;
    }

    if (!$dara.isNull(request.maxCoreCount)) {
      query["MaxCoreCount"] = request.maxCoreCount;
    }

    if (!$dara.isNull(request.maxCount)) {
      query["MaxCount"] = request.maxCount;
    }

    if (!$dara.isNull(request.monitorSpecShrink)) {
      query["MonitorSpec"] = request.monitorSpecShrink;
    }

    if (!$dara.isNull(request.schedulerSpecShrink)) {
      query["SchedulerSpec"] = request.schedulerSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateClusterResponse>(await this.callApi(params, req, runtime), new UpdateClusterResponse({}));
    } else {
      return $dara.cast<UpdateClusterResponse>(await this.execute(params, req, runtime), new UpdateClusterResponse({}));
    }

  }

  /**
   * Modifies the configurations of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of compute nodes in an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param tmpReq - UpdateNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodesResponse
   */
  async updateNodesWithOptions(tmpReq: UpdateNodesRequest, runtime: $dara.RuntimeOptions): Promise<UpdateNodesResponse> {
    tmpReq.validate();
    let request = new UpdateNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instancesShrink)) {
      query["Instances"] = request.instancesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateNodesResponse>(await this.callApi(params, req, runtime), new UpdateNodesResponse({}));
    } else {
      return $dara.cast<UpdateNodesResponse>(await this.execute(params, req, runtime), new UpdateNodesResponse({}));
    }

  }

  /**
   * Updates the configurations of compute nodes in an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - UpdateNodesRequest
   * @returns UpdateNodesResponse
   */
  async updateNodes(request: UpdateNodesRequest): Promise<UpdateNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - UpdateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQueueResponse
   */
  async updateQueueWithOptions(tmpReq: UpdateQueueRequest, runtime: $dara.RuntimeOptions): Promise<UpdateQueueResponse> {
    tmpReq.validate();
    let request = new UpdateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateQueueResponse>(await this.callApi(params, req, runtime), new UpdateQueueResponse({}));
    } else {
      return $dara.cast<UpdateQueueResponse>(await this.execute(params, req, runtime), new UpdateQueueResponse({}));
    }

  }

  /**
   * Modifies the configurations of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - UpdateQueueRequest
   * @returns UpdateQueueResponse
   */
  async updateQueue(request: UpdateQueueRequest): Promise<UpdateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQueueWithOptions(request, runtime);
  }

  /**
   * Updates the information of a user in an Elastic High Performance Computing (E-HPC) cluster, including the user group and password.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
    } else {
      return $dara.cast<UpdateUserResponse>(await this.execute(params, req, runtime), new UpdateUserResponse({}));
    }

  }

  /**
   * Updates the information of a user in an Elastic High Performance Computing (E-HPC) cluster, including the user group and password.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
