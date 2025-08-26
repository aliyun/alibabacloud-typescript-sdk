// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testairflow
   */
  airflowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @example
   * token-****
   */
  clientToken?: string;
  /**
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order scheduler
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-test
   */
  ossBucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-bp108t8ldzeyk1****
   */
  securityGroupId?: string;
  /**
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowName: 'AirflowName',
      appSpec: 'AppSpec',
      clientToken: 'ClientToken',
      dagsDir: 'DagsDir',
      description: 'Description',
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
      appSpec: 'string',
      clientToken: 'string',
      dagsDir: 'string',
      description: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

