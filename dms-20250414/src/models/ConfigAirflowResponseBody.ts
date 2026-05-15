// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigAirflowResponseBodyRoot extends $dara.Model {
  /**
   * @example
   * af-7a6ygsh80dx1jn****
   */
  airflowId?: string;
  /**
   * @example
   * testairflow
   */
  airflowName?: string;
  /**
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @example
   * AIRFLOW
   */
  appType?: string;
  customAirflowCfg?: string[];
  /**
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @example
   * vpc not found
   */
  deployErrorMsg?: string;
  /**
   * @example
   * test airflow
   */
  description?: string;
  /**
   * @example
   * 2025-08-12T05:46:01.000+0000
   */
  gmtCreated?: string;
  /**
   * @example
   * oss-test
   */
  ossBucketName?: string;
  /**
   * @example
   * /airflow
   */
  ossPath?: string;
  /**
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @example
   * sg-2ze1nak7h0alg1xxx
   */
  securityGroupId?: string;
  /**
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @example
   * DEPLOYING
   */
  status?: string;
  /**
   * @example
   * vsw-bp1931trfxkvf74v****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-uf63r6coyiw9o5gf****
   */
  vpcId?: string;
  /**
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @example
   * 86302423828****
   */
  workspaceId?: string;
  /**
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
      gmtCreated: 'GmtCreated',
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
      appSpec: 'string',
      appType: 'string',
      customAirflowCfg: { 'type': 'array', 'itemType': 'string' },
      dagsDir: 'string',
      deployErrorMsg: 'string',
      description: 'string',
      gmtCreated: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAirflowResponseBody extends $dara.Model {
  /**
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance not found.
   */
  message?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  root?: ConfigAirflowResponseBodyRoot;
  /**
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
      root: ConfigAirflowResponseBodyRoot,
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

