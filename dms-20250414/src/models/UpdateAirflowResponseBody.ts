// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataMountInfo } from "./DataMountInfo";


export class UpdateAirflowResponseBodyRoot extends $dara.Model {
  /**
   * @remarks
   * The name of the Airflow instance.
   * 
   * @example
   * test airflow
   */
  airflowName?: string;
  /**
   * @remarks
   * The version of Airflow.
   * 
   * @example
   * 3.1
   */
  airflowVersion?: string;
  /**
   * @remarks
   * The instance specification.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * AIRFLOW
   */
  appType?: string;
  /**
   * @remarks
   * A list of custom configuration items.
   */
  customAirflowCfg?: string[];
  /**
   * @remarks
   * The directory where DAGs are scanned.
   * 
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @remarks
   * A data mount item.
   */
  dataMountInfoList?: DataMountInfo[];
  /**
   * @remarks
   * The error message returned upon deployment failure.
   * 
   * @example
   * quota exists
   */
  deployErrorMsg?: string;
  /**
   * @remarks
   * The description of the Airflow instance.
   * 
   * @example
   * order schedule
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether serverless mode is enabled.
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * k=v
   */
  environments?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2025-01-07T15:10:32+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The graceful shutdown timeout, in seconds.
   * 
   * @example
   * 60
   */
  gracefulShutdownTimeout?: number;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * osstest
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The path in OSS where logs are stored.
   * 
   * @example
   * /airflow
   */
  ossPath?: string;
  /**
   * @remarks
   * The directory where Airflow plugins are scanned.
   * 
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @remarks
   * The path to the Python requirements file.
   * 
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @remarks
   * The Python package requirements.
   * 
   * @example
   * jieba==0.42
   */
  requirements?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2ze1nak7h0alg1w5****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The startup script for the Airflow container.
   * 
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * DEPLOYED
   */
  status?: string;
  /**
   * @remarks
   * The Airflow instance ID.
   * 
   * @example
   * af-xxx
   */
  uuid?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-hp3hyga33aur8tj36****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp16ko44pgciwv0****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of worker node replicas.
   * 
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 86302423828****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowName: 'AirflowName',
      airflowVersion: 'AirflowVersion',
      appSpec: 'AppSpec',
      appType: 'AppType',
      customAirflowCfg: 'CustomAirflowCfg',
      dagsDir: 'DagsDir',
      dataMountInfoList: 'DataMountInfoList',
      deployErrorMsg: 'DeployErrorMsg',
      description: 'Description',
      enableServerless: 'EnableServerless',
      environments: 'Environments',
      gmtCreated: 'GmtCreated',
      gracefulShutdownTimeout: 'GracefulShutdownTimeout',
      ossBucketName: 'OssBucketName',
      ossPath: 'OssPath',
      pluginsDir: 'PluginsDir',
      requirementFile: 'RequirementFile',
      requirements: 'Requirements',
      securityGroupId: 'SecurityGroupId',
      startupFile: 'StartupFile',
      status: 'Status',
      uuid: 'Uuid',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workerServerlessReplicas: 'WorkerServerlessReplicas',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airflowName: 'string',
      airflowVersion: 'string',
      appSpec: 'string',
      appType: 'string',
      customAirflowCfg: { 'type': 'array', 'itemType': 'string' },
      dagsDir: 'string',
      dataMountInfoList: { 'type': 'array', 'itemType': DataMountInfo },
      deployErrorMsg: 'string',
      description: 'string',
      enableServerless: 'boolean',
      environments: 'string',
      gmtCreated: 'string',
      gracefulShutdownTimeout: 'number',
      ossBucketName: 'string',
      ossPath: 'string',
      pluginsDir: 'string',
      requirementFile: 'string',
      requirements: 'string',
      securityGroupId: 'string',
      startupFile: 'string',
      status: 'string',
      uuid: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workerServerlessReplicas: 'number',
      workspaceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customAirflowCfg)) {
      $dara.Model.validateArray(this.customAirflowCfg);
    }
    if(Array.isArray(this.dataMountInfoList)) {
      $dara.Model.validateArray(this.dataMountInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAirflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
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
   * The error message.
   * 
   * @example
   * Unknown error
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-F****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the updated Airflow instance.
   */
  root?: UpdateAirflowResponseBodyRoot;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      root: UpdateAirflowResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

