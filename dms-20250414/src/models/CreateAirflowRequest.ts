// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataMountInfo } from "./DataMountInfo";


export class CreateAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Airflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * testairflow
   */
  airflowName?: string;
  /**
   * @remarks
   * The Airflow version. Supported versions: 2.10 and 3.1.
   * 
   * @example
   * 3.1
   */
  airflowVersion?: string;
  /**
   * @remarks
   * The compute specifications for the Airflow instance. Valid values: **SMALL**, **MEDIUM**, **LARGE**, **XLARGE**, or **X2LARGE**.
   * 
   * This parameter is required.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * A client token to ensure request idempotence.
   * 
   * @example
   * token-****
   */
  clientToken?: string;
  /**
   * @remarks
   * The path to the DAG directory for Airflow to scan.
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
   * The description of the Airflow instance.
   * 
   * @example
   * order scheduler
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable worker elasticity.
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The graceful shutdown timeout for workers, in seconds.
   * 
   * @example
   * 60
   */
  gracefulShutdownTimeout?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-test
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The OSS path for log storage.
   * 
   * This parameter is required.
   * 
   * @example
   * /airflow
   */
  ossPath?: string;
  /**
   * @remarks
   * The path to the plugin directory for the Airflow instance to scan.
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
   * The security group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp108t8ldzeyk1****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The path to the startup script in the Airflow container.
   * 
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-8vbaf073jawozfp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf63r6coyiw9o5****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of elastic worker nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
   * The ID of the DMS workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The ID of the zone where the instance will be created.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowName: 'AirflowName',
      airflowVersion: 'AirflowVersion',
      appSpec: 'AppSpec',
      clientToken: 'ClientToken',
      dagsDir: 'DagsDir',
      dataMountInfoList: 'DataMountInfoList',
      description: 'Description',
      enableServerless: 'EnableServerless',
      gracefulShutdownTimeout: 'GracefulShutdownTimeout',
      ossBucketName: 'OssBucketName',
      ossPath: 'OssPath',
      pluginsDir: 'PluginsDir',
      requirementFile: 'RequirementFile',
      securityGroupId: 'SecurityGroupId',
      startupFile: 'StartupFile',
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
      clientToken: 'string',
      dagsDir: 'string',
      dataMountInfoList: { 'type': 'array', 'itemType': DataMountInfo },
      description: 'string',
      enableServerless: 'boolean',
      gracefulShutdownTimeout: 'number',
      ossBucketName: 'string',
      ossPath: 'string',
      pluginsDir: 'string',
      requirementFile: 'string',
      securityGroupId: 'string',
      startupFile: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workerServerlessReplicas: 'number',
      workspaceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataMountInfoList)) {
      $dara.Model.validateArray(this.dataMountInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

