// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAirflowResponseBodyRoot extends $dara.Model {
  /**
   * @remarks
   * The ID of the Airflow instance.
   * 
   * @example
   * af-7a6ygsh80dx1jn****
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
   * The specifications of the Airflow instance.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * AIRFLOW
   */
  appType?: string;
  /**
   * @remarks
   * The custom configurations.
   */
  customAirflowCfg?: string[];
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
   * The deployment error message.
   * 
   * @example
   * Deployed
   */
  deployErrorMsg?: string;
  /**
   * @remarks
   * The description of the Airflow instance.
   * 
   * @example
   * test airflow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether data lineage is enabled.
   */
  enableLineage?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-08-12T05:46:01.000+0000
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The number of replicas for the lineage service. The default value is 1 when enabled. If omitted during an update, the original value is retained.
   * 
   * @example
   * 1
   */
  lineageReplicas?: number;
  /**
   * @remarks
   * The merged lineage service specifications, which use the same tier as the application specifications.
   * 
   * @example
   * SMALL
   */
  lineageSpec?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * osstest
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
   * The plugin directory scanned by Airflow.
   * 
   * @example
   * default/plugins
   */
  pluginsDir?: string;
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
   * The configuration file for dependency packages.
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
   * sg-2ze9gj646bkv****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The script loaded before Airflow starts.
   * 
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
   * The Airflow instance status.
   * 
   * @example
   * DEPLOYED
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1931trfxkvf74v****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zevqv4obraqd5p****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of worker nodes.
   * 
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
   * The Data Management (DMS) workspace ID.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The zone ID in the region.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowId: 'AirflowId',
      airflowName: 'AirflowName',
      appSpec: 'AppSpec',
      appType: 'AppType',
      customAirflowCfg: 'CustomAirflowCfg',
      dagsDir: 'DagsDir',
      deployErrorMsg: 'DeployErrorMsg',
      description: 'Description',
      enableLineage: 'EnableLineage',
      gmtCreated: 'GmtCreated',
      lineageReplicas: 'LineageReplicas',
      lineageSpec: 'LineageSpec',
      ossBucketName: 'OssBucketName',
      ossPath: 'OssPath',
      pluginsDir: 'PluginsDir',
      regionId: 'RegionId',
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
      appSpec: 'string',
      appType: 'string',
      customAirflowCfg: { 'type': 'array', 'itemType': 'string' },
      dagsDir: 'string',
      deployErrorMsg: 'string',
      description: 'string',
      enableLineage: 'boolean',
      gmtCreated: 'string',
      lineageReplicas: 'number',
      lineageSpec: 'string',
      ossBucketName: 'string',
      ossPath: 'string',
      pluginsDir: 'string',
      regionId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAirflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
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
   * E0D21075-CD3E-4D98-8264-****
   */
  requestId?: string;
  /**
   * @remarks
   * The data details.
   */
  root?: GetAirflowResponseBodyRoot;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.                                 
   * - **false**: The request fails.
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
      root: GetAirflowResponseBodyRoot,
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

