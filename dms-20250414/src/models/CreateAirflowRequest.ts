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
   * The Airflow version. Valid values: "3.2.2", "3.1.0", "2.10.4", and "3.0.6".
   * 
   * @example
   * 3.2.2
   */
  airflowVersion?: string;
  /**
   * @remarks
   * The specification of the Airflow instance. Valid values: **SMALL**, **MEDIUM**, **LARGE**, **XLARGE**, and **X2LARGE**.
   * 
   * This parameter is required.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * token-****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DAG directory scanned by Airflow.
   * 
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @remarks
   * The list of data mount information.
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
   * Specifies whether to enable Worker elasticity.
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The timeout period for the Worker to gracefully shut down.
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
   * The OSS path for storing logs.
   * 
   * This parameter is required.
   * 
   * @example
   * /airflow
   */
  ossPath?: string;
  /**
   * @remarks
   * The plugin directory scanned by the Airflow instance.
   * 
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @remarks
   * The path of the package installation file.
   * 
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp108t8ldzeyk1****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The startup script of the Airflow container.
   * 
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-8vbaf073jawozfp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf63r6coyiw9o5****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of extended Worker node replicas.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
   * The ID of the Data Management workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The zone ID within the region.
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

