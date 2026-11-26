// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAirflowsResponseBodyRootList extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af-7a6ygsh80d****
   */
  airflowId?: string;
  /**
   * @remarks
   * The name of the Airflow instance.
   * 
   * @example
   * test-airflow
   */
  airflowName?: string;
  /**
   * @remarks
   * The specification of the Airflow instance.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * The type.
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
   * quota exists
   */
  deployErrorMsg?: string;
  /**
   * @remarks
   * The description of the Airflow instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether data lineage is enabled.
   */
  enableLineage?: boolean;
  /**
   * @remarks
   * The time when the Airflow instance was created.
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
   * The merged specification of the lineage service, which uses the same tier as the Airflow specification.
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
   * The file path of the dependency package.
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
   * sg-2ze1nak7h0alg1w****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The directory of scripts loaded when Airflow starts.
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
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6sxdc22x7sbdb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-8vbbfm33dy0y1pek****
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
   * The DMS workspace ID.
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

export class ListAirflowsResponseBodyRoot extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: ListAirflowsResponseBodyRootList[];
  /**
   * @remarks
   * The total number of Airflow instances that meet the query conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAirflowsResponseBodyRootList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAirflowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details.
   * 
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code returned when an exception occurs in the request.
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
   * The page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
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
   * The data details.
   */
  root?: ListAirflowsResponseBodyRoot;
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
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
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
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      root: ListAirflowsResponseBodyRoot,
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

