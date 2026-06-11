// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataMountInfo } from "./DataMountInfo";


export class CreateAirflowResponseBodyRoot extends $dara.Model {
  /**
   * @remarks
   * The ID of the Airflow instance.
   * 
   * @example
   * af-****
   */
  airflowId?: string;
  /**
   * @remarks
   * The name of the Airflow instance.
   * 
   * @example
   * testairflow
   */
  airflowName?: string;
  /**
   * @remarks
   * The Airflow version.
   * 
   * @example
   * 3.1
   */
  airflowVersion?: string;
  /**
   * @remarks
   * The specifications of the Airflow instance.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * The application type. This value is always airflow.
   * 
   * @example
   * airflow
   */
  appType?: string;
  /**
   * @remarks
   * Custom Airflow configurations.
   */
  customAirflowCfg?: string[];
  /**
   * @remarks
   * The directory that Airflow scans for DAGs.
   * 
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @remarks
   * A list of data mount configurations.
   */
  dataMountInfoList?: DataMountInfo[];
  /**
   * @remarks
   * The deployment error message.
   * 
   * @example
   * vpc not found
   */
  deployErrorMsg?: string;
  /**
   * @remarks
   * The description of the Airflow instance.
   * 
   * @example
   * order scheduler
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether to enable serverless workers.
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The time the instance was created.
   * 
   * @example
   * 2025-08-12T05:46:01.000+0000
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The timeout period for a graceful shutdown, in seconds.
   * 
   * @example
   * 60
   */
  gracefulShutdownTimeout?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * oss-test
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * /airflow
   */
  ossPath?: string;
  /**
   * @remarks
   * The plugin directory that Airflow scans.
   * 
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @remarks
   * The path to the requirements file.
   * 
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze1nak7h0alg1xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The file that is loaded when the Airflow instance starts. You can use this file to set environment variables.
   * 
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
   * The status of the Airflow instance.
   * 
   * @example
   * DEPLOYING
   */
  status?: string;
  /**
   * @remarks
   * The VSwitch ID.
   * 
   * @example
   * vsw-8vbaf073jawozfpbg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf63r6coyiw9o5gf****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of scaled-out worker nodes.
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
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowId: 'AirflowId',
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
      gmtCreated: 'GmtCreated',
      gracefulShutdownTimeout: 'GracefulShutdownTimeout',
      ossBucketName: 'OssBucketName',
      ossPath: 'OssPath',
      pluginsDir: 'PluginsDir',
      requirementFile: 'RequirementFile',
      securityGroupId: 'SecurityGroupId',
      startupFile: 'StartupFile',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workerServerlessReplicas: 'WorkerServerlessReplicas',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airflowId: 'string',
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
      gmtCreated: 'string',
      gracefulShutdownTimeout: 'number',
      ossBucketName: 'string',
      ossPath: 'string',
      pluginsDir: 'string',
      requirementFile: 'string',
      securityGroupId: 'string',
      startupFile: 'string',
      status: 'string',
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

export class CreateAirflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the access denial.
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
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * The Airflow data dictionary.
   */
  root?: CreateAirflowResponseBodyRoot;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - **true**: The request succeeded.
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
      root: CreateAirflowResponseBodyRoot,
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

