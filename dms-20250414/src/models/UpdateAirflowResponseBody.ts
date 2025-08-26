// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAirflowResponseBodyRoot extends $dara.Model {
  /**
   * @example
   * test airflow
   */
  airflowName?: string;
  /**
   * @remarks
   * SMALL。
   * 
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
   * quota exists
   */
  deployErrorMsg?: string;
  /**
   * @example
   * order schedule
   */
  description?: string;
  /**
   * @example
   * k=v
   */
  environments?: string;
  /**
   * @example
   * 2025-01-07T15:10:32+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * osstest
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
   * jieba==0.42
   */
  requirements?: string;
  /**
   * @example
   * sg-2ze1nak7h0alg1w5****
   */
  securityGroupId?: string;
  /**
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @example
   * DEPLOYED
   */
  status?: string;
  /**
   * @example
   * af-xxx
   */
  uuid?: string;
  /**
   * @example
   * vsw-hp3hyga33aur8tj36****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp16ko44pgciwv0****
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
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowName: 'AirflowName',
      appSpec: 'AppSpec',
      appType: 'AppType',
      customAirflowCfg: 'CustomAirflowCfg',
      dagsDir: 'DagsDir',
      deployErrorMsg: 'DeployErrorMsg',
      description: 'Description',
      environments: 'Environments',
      gmtCreated: 'GmtCreated',
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
      appSpec: 'string',
      appType: 'string',
      customAirflowCfg: { 'type': 'array', 'itemType': 'string' },
      dagsDir: 'string',
      deployErrorMsg: 'string',
      description: 'string',
      environments: 'string',
      gmtCreated: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAirflowResponseBody extends $dara.Model {
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
   * Unknown error
   */
  message?: string;
  /**
   * @example
   * E0D21075-CD3E-4D98-8264-F****
   */
  requestId?: string;
  root?: UpdateAirflowResponseBodyRoot;
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

