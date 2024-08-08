// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AutofeExperimentConfiguration extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  odpsConfig?: AutofeExperimentConfigurationOdpsConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  ossConfig?: AutofeExperimentConfigurationOssConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  ymlConfig?: AutofeExperimentConfigurationYmlConfig;
  static names(): { [key: string]: string } {
    return {
      odpsConfig: 'odps_config',
      ossConfig: 'oss_config',
      ymlConfig: 'yml_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      odpsConfig: AutofeExperimentConfigurationOdpsConfig,
      ossConfig: AutofeExperimentConfigurationOssConfig,
      ymlConfig: AutofeExperimentConfigurationYmlConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfig extends $tea.Model {
  dlcConfig?: HpoExperimentConfigDlcConfig;
  k8sConfig?: HpoExperimentConfigK8sConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  metricConfig?: HpoExperimentConfigMetricConfig;
  monitorConfig?: HpoExperimentConfigMonitorConfig;
  odpsConfig?: HpoExperimentConfigOdpsConfig;
  ossConfig?: HpoExperimentConfigOssConfig;
  outputConfig?: HpoExperimentConfigOutputConfig;
  paiflowConfig?: HpoExperimentConfigPaiflowConfig;
  paramsConfig?: HpoExperimentConfigParamsConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  platformConfig?: HpoExperimentConfigPlatformConfig;
  scheduleConfig?: HpoExperimentConfigScheduleConfig;
  searchSpace?: { [key: string]: any };
  tsConfig?: HpoExperimentConfigTsConfig;
  ymlConfig?: HpoExperimentConfigYmlConfig;
  static names(): { [key: string]: string } {
    return {
      dlcConfig: 'dlc_config',
      k8sConfig: 'k8s_config',
      metricConfig: 'metric_config',
      monitorConfig: 'monitor_config',
      odpsConfig: 'odps_config',
      ossConfig: 'oss_config',
      outputConfig: 'output_config',
      paiflowConfig: 'paiflow_config',
      paramsConfig: 'params_config',
      platformConfig: 'platform_config',
      scheduleConfig: 'schedule_config',
      searchSpace: 'search_space',
      tsConfig: 'ts_config',
      ymlConfig: 'yml_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dlcConfig: HpoExperimentConfigDlcConfig,
      k8sConfig: HpoExperimentConfigK8sConfig,
      metricConfig: HpoExperimentConfigMetricConfig,
      monitorConfig: HpoExperimentConfigMonitorConfig,
      odpsConfig: HpoExperimentConfigOdpsConfig,
      ossConfig: HpoExperimentConfigOssConfig,
      outputConfig: HpoExperimentConfigOutputConfig,
      paiflowConfig: HpoExperimentConfigPaiflowConfig,
      paramsConfig: HpoExperimentConfigParamsConfig,
      platformConfig: HpoExperimentConfigPlatformConfig,
      scheduleConfig: HpoExperimentConfigScheduleConfig,
      searchSpace: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tsConfig: HpoExperimentConfigTsConfig,
      ymlConfig: HpoExperimentConfigYmlConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutofeExperimentRequest extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  autofeExperimentConfiguration?: AutofeExperimentConfiguration;
  /**
   * @example
   * This is an AutoFE experiment.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my experiment x
   */
  name?: string;
  /**
   * @example
   * 283301
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      autofeExperimentConfiguration: 'AutofeExperimentConfiguration',
      description: 'Description',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      autofeExperimentConfiguration: AutofeExperimentConfiguration,
      description: 'string',
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutofeExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @example
   * {}
   */
  detail?: { [key: string]: any };
  /**
   * @example
   * t8cNdMO
   */
  experimentId?: string;
  /**
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @example
   * 22A1EC4E-15A2-51FF-BFA3-10D6735BAA69
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      experimentId: 'ExperimentId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      experimentId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutofeExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAutofeExperimentResponseBody;
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
      body: CreateAutofeExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHpoExperimentRequest extends $tea.Model {
  /**
   * @remarks
   * Experiment accesibility, public or private.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Experiment description.
   * 
   * @example
   * This is an AutoML HPO experiment.
   */
  description?: string;
  /**
   * @remarks
   * The config object of the expriment.
   */
  hpoExperimentConfiguration?: HpoExperimentConfig;
  /**
   * @remarks
   * Experiment Name
   * 
   * @example
   * my experiment x
   */
  name?: string;
  /**
   * @remarks
   * AI Workspace ID
   * 
   * @example
   * default
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      hpoExperimentConfiguration: 'HpoExperimentConfiguration',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      hpoExperimentConfiguration: HpoExperimentConfig,
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHpoExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @remarks
   * Detailed information of the failure.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * sORVEck
   */
  experimentId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      experimentId: 'ExperimentId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      experimentId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHpoExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHpoExperimentResponseBody;
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
      body: CreateHpoExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceIdentityRoleResponseBody extends $tea.Model {
  /**
   * @example
   * ExecutionFailure
   */
  code?: string;
  /**
   * @example
   * Execution failure, please try again.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @example
   * AliyunServiceRoleForPaiAutoml
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceIdentityRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceIdentityRoleResponseBody;
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
      body: CreateServiceIdentityRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHpoExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code when the API call is not successful.
   * 
   * @example
   * INVALID_USER_OR_EXP
   */
  code?: string;
  /**
   * @remarks
   * Extra info on the execution failure.
   * 
   * @example
   * {}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHpoExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHpoExperimentResponseBody;
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
      body: DeleteHpoExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutofeExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * INVALID_USER_OR_EXP
   */
  code?: string;
  /**
   * @example
   * 266977839132045194
   */
  creator?: string;
  detail?: { [key: string]: any };
  /**
   * @example
   * tfKs0Ds
   */
  experimentId?: string;
  /**
   * @example
   * 2023-08-18T09:41:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-11-30T02:05:34.000Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * {"action": "fs_train", "request_id": "6B6D4FB6-87AA-5C0E-94AB-E0F830955D1E", "job_num": 7, "job_runs": [{"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-fqlk86bvk68", "duration": 181, "finish_at": 1719158854000, "create_time": "2024-06-23T16:04:31.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-q18k5jo66h3k", "duration": 233, "finish_at": 1719159106000, "create_time": "2024-06-23T16:07:51.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-g7b38dmqes0nm4le", "duration": 173, "finish_at": 1719159306000, "create_time": "2024-06-23T16:12:12.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-524dab97aazs3jmc", "duration": 199, "finish_at": 1719159527000, "create_time": "2024-06-23T16:15:28.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-a8z56wy2ppwmxx04", "duration": 197, "finish_at": 1719159747000, "create_time": "2024-06-23T16:19:08.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-2cgsbxzzzma1j", "duration": 210, "finish_at": 1719159982000, "create_time": "2024-06-23T16:22:51.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-3cgsvf3ien1cw7", "duration": 184, "finish_at": 1719160188000, "create_time": "2024-06-23T16:26:43.000Z", "status": "Succeeded"}], "workspace_id": "86006"}{"action": "fs_train", "request_id": "6B6D4FB6-87AA-5C0E-94AB-E0F830955D1E", "job_num": 7, "job_runs": [{"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-fqlk86betchc69vk68", "duration": 181, "finish_at": 1719158854000, "create_time": "2024-06-23T16:04:31.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-q18ijqak558jo66h3k", "duration": 233, "finish_at": 1719159106000, "create_time": "2024-06-23T16:07:51.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-g7b38df7mqes0nm4le", "duration": 173, "finish_at": 1719159306000, "create_time": "2024-06-23T16:12:12.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-524zedab97aazs3jmc", "duration": 199, "finish_at": 1719159527000, "create_time": "2024-06-23T16:15:28.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-a8z56wy2ppm6wmxx04", "duration": 197, "finish_at": 1719159747000, "create_time": "2024-06-23T16:19:08.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-2cgsbxzx9i35zzma1j", "duration": 210, "finish_at": 1719159982000, "create_time": "2024-06-23T16:22:51.000Z", "status": "Succeeded"}, {"job_url": "https://pai.console.aliyun.com/?projectId=&regionId=cn-beijing#/studio/task/detail/flow-3cgsvf3bprlien1cw7", "duration": 184, "finish_at": 1719160188000, "create_time": "2024-06-23T16:26:43.000Z", "status": "Succeeded"}], "workspace_id": "86006"}
   */
  jobMeta?: string;
  /**
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  name?: string;
  /**
   * @example
   * 071A904D-5A49-597F-9F69-81C7701D04AC
   */
  requestId?: string;
  /**
   * @example
   * age,sex,education
   */
  selectedFeatures?: string;
  /**
   * @example
   * FINISHED, FAILED, USER_CANCELED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creator: 'Creator',
      detail: 'Detail',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobMeta: 'JobMeta',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      selectedFeatures: 'SelectedFeatures',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creator: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      jobMeta: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      selectedFeatures: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutofeExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutofeExperimentResponseBody;
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
      body: GetAutofeExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHpoExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Accessibility of expriment, public or private.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Error when the API call is not success.
   * 
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @remarks
   * Experiment run environment configurations.
   * 
   * @example
   * [odps_config]
   * access_id=foo
   * access_key=bar
   * end_point=http://service.odps.aliyun.com/api
   * log_view_host=http://logview.odps.aliyun.com
   * project_name=my_project
   */
  configIni?: string;
  /**
   * @remarks
   * HPO search config yaml.
   * 
   * @example
   * assessor:
   *   classArgs:
   *     optimize_mode: maximize
   *     start_step: 1
   *   name: PAIAssessor
   * debug: true
   * experimentName: maxcompute_kmeans_monitor
   * experimentWorkingDirectory: ../expdir
   * logLevel: debug
   * maxTrialNumber: 10
   * searchSpaceFile: search_space.json
   * trainingService:
   *   platform: local
   * trialCommand: python3 -m hpo_tools.core.utils.run --config=./config.ini
   * trialConcurrency: 2
   * tuner:
   *   classArgs:
   *     optimize_mode: maximize
   *   name: TPE
   */
  configYml?: string;
  /**
   * @remarks
   * The one who created the experiment.
   * 
   * @example
   * 123456789
   */
  creator?: string;
  /**
   * @remarks
   * If the Experiment if deleted.
   * 
   * @example
   * 0
   */
  deleted?: boolean;
  /**
   * @remarks
   * Description of the experiment.
   * 
   * @example
   * This is experiment is for tune the LR of model.
   */
  description?: string;
  /**
   * @remarks
   * Extra error message info.
   * 
   * @example
   * TBD
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * Experiment ID.
   * 
   * @example
   * sX5O9Q8
   */
  experimentId?: string;
  /**
   * @remarks
   * Experiment create time.
   * 
   * @example
   * 2024-01-01 08:30:11
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Experiment last update time.
   * 
   * @example
   * 2024-01-01 08:30:11
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Experiment configuration in json format.
   * 
   * @example
   * {
   *     "output_config": {
   *         "model_path": "bi_ps_${exp_id}_${trial_id}"
   *     },
   *     "platform_config": {
   *         "cmd": [
   *             "PAI -name ps_smart\\n    -project foo",
   *             "PAI -name prediction\\n    -project foo",
   *             "PAI -name evaluate -project foo",
   *             "INSERT OVERWRITE TABLE my_table;"
   *         ],
   *         "name": "MaxCompute"
   *     },
   *     "metric_config": {
   *         "metric_dict": {
   *             "recall": 0.5,
   *             "auc": 0.25,
   *             "precision": 0.25
   *         },
   *         "metric_source": [
   *             "select * from my_metrics where pt=\\"${exp_id}_${trial_id}\\";"
   *         ],
   *         "metric_type": "table",
   *         "final_mode": "best"
   *     },
   *     "odps_config": {
   *         "project_name": "my_project",
   *         "role_arn": "acs:ram::123456789:role/aliyunserviceroleforfoo",
   *         "region": "cn-shanghai",
   *         "end_point": "http://service.cn.maxcompute.aliyun-inc.com/api",
   *         "log_view_host": "http://logview.odps.aliyun.com"
   *     },
   *     "yml_config": {
   *         "max_trial_number": 5,
   *         "assessor": {
   *             "name": "PAIAssessor",
   *             "class_args": {
   *                 "earlystop": true,
   *                 "start_step": 5,
   *                 "optimize_mode": "maximize"
   *             }
   *         },
   *         "experiment_name": "my_exp",
   *         "tuner": {
   *             "name": "TPE",
   *             "class_args": {
   *                 "optimize_mode": "maximize"
   *             }
   *         },
   *         "trial_concurrency": 2
   *     },
   *     "search_space": {
   *         "${max_depth}": {
   *             "_type": "choice",
   *             "_value": [
   *                 1,
   *                 3,
   *                 5
   *             ]
   *         },
   *         "${tree_count}": {
   *             "_value": [
   *                 50,
   *                 100,
   *                 150
   *             ],
   *             "_type": "choice"
   *         }
   *     }
   * }
   */
  hpoExperimentConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * Experiment  Job type.
   * 
   * @example
   * 1
   */
  jobType?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * Experiment name.
   * 
   * @example
   * my_hpo_exp_1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @remarks
   * HPO hyperparameter search space.
   * 
   * @example
   * {"${centerCount}":{"_type":"choice","_value":[2,3,4,5]},"${distanceType}":{"_type":"choice","_value":["euclidean","cosine","cityblock"]}}
   */
  searchSpace?: string;
  /**
   * @remarks
   * Experiment status.
   * 
   * @example
   * INVALID_USER_OR_EXP, SUCCESS, or EXECUTION_FAILURE
   */
  status?: string;
  /**
   * @remarks
   * Trials amount run till now.
   * 
   * @example
   * 3
   */
  trialCount?: number;
  /**
   * @remarks
   * Status if a trial
   */
  trialStatus?: { [key: string]: string };
  /**
   * @remarks
   * AI Workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      code: 'Code',
      configIni: 'ConfigIni',
      configYml: 'ConfigYml',
      creator: 'Creator',
      deleted: 'Deleted',
      description: 'Description',
      detail: 'Detail',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hpoExperimentConfiguration: 'HpoExperimentConfiguration',
      jobType: 'JobType',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      searchSpace: 'SearchSpace',
      status: 'Status',
      trialCount: 'TrialCount',
      trialStatus: 'TrialStatus',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      code: 'string',
      configIni: 'string',
      configYml: 'string',
      creator: 'string',
      deleted: 'boolean',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hpoExperimentConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobType: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      searchSpace: 'string',
      status: 'string',
      trialCount: 'number',
      trialStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHpoExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHpoExperimentResponseBody;
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
      body: GetHpoExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHpoTrialResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * Experiment ID.
   * 
   * @example
   * abcde
   */
  experimentId?: string;
  /**
   * @remarks
   * Final metric of the trial.
   * 
   * @example
   * {"default":0.087745,"type":"FINAL","val_loss=([0-9\\\\\\\\.]+)":0.087745}
   */
  finalMetric?: string;
  /**
   * @remarks
   * Trial create time.
   * 
   * @example
   * 2024-01-02 12:34:56
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Trial last update time.
   * 
   * @example
   * 2024-01-02 21:32:56
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Hyperparameters used to run the trial.
   * 
   * @example
   * {"${centerCount}": 5, "${distanceType}": "cosine"}
   */
  hyperparam?: string;
  /**
   * @remarks
   * trial meta infomation.
   * 
   * @example
   * {"nni_trial_id": "asdf", "nni_exp_id": "abcde", "nni_trial_sequence_id": 2}
   */
  jobMeta?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * metric details uploaded during running.
   * 
   * @example
   * [{"default":0.087745,"val_loss=([0-9\\\\\\\\.]+)":0.087745},
   * {"default":1.085841,"val_loss=([0-9\\\\\\\\.]+)":0.085841},
   * {"default":0.087745,"type":"FINAL","val_loss=([0-9\\\\\\\\.]+)":0.087745}]
   */
  metric?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * AUC or F1, Accuracy etc.
   */
  metricName?: string;
  /**
   * @remarks
   * Trial output model.
   * 
   * @example
   * model_table_name_foo
   */
  model?: string;
  /**
   * @remarks
   * Parameter id, start from 0.
   * 
   * @example
   * 0
   */
  parameterId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @remarks
   * Trial status.
   * 
   * @example
   * FINISHED, FAILED, USER_CANCELED
   */
  status?: string;
  /**
   * @remarks
   * Trail ID.
   * 
   * @example
   * mf99W4
   */
  trialId?: string;
  /**
   * @remarks
   * User added comments.
   * 
   * @example
   * best trial till now.
   */
  userComment?: string;
  /**
   * @remarks
   * User updated score.
   * 
   * @example
   * 0
   */
  userScore?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      experimentId: 'ExperimentId',
      finalMetric: 'FinalMetric',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperparam: 'Hyperparam',
      jobMeta: 'JobMeta',
      message: 'Message',
      metric: 'Metric',
      metricName: 'MetricName',
      model: 'Model',
      parameterId: 'ParameterId',
      requestId: 'RequestId',
      status: 'Status',
      trialId: 'TrialId',
      userComment: 'UserComment',
      userScore: 'UserScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      experimentId: 'string',
      finalMetric: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hyperparam: 'string',
      jobMeta: 'string',
      message: 'string',
      metric: 'string',
      metricName: 'string',
      model: 'string',
      parameterId: 'number',
      requestId: 'string',
      status: 'string',
      trialId: 'string',
      userComment: 'string',
      userScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHpoTrialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHpoTrialResponseBody;
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
      body: GetHpoTrialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceIdentityRoleResponseBody extends $tea.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * Execution failure, please try again.
   */
  message?: string;
  /**
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @example
   * AliyunServiceRoleForPaiAutoml
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceIdentityRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceIdentityRoleResponseBody;
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
      body: GetServiceIdentityRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentLogsRequest extends $tea.Model {
  /**
   * @remarks
   * Log name to be listed.
   * 
   * @example
   * nnimanager.log
   */
  logName?: string;
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
   * 40
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      logName: 'LogName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Extra error message.
   * 
   * @example
   * {}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The log.
   */
  logs?: string[];
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 071A904D-5A49-597F-9F69-81C7701D04AC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 467
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      logs: 'Logs',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      logs: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHpoExperimentLogsResponseBody;
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
      body: ListHpoExperimentLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentsRequest extends $tea.Model {
  /**
   * @remarks
   * The accessibility of the experiments to be listed.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Who created the expriment.
   * 
   * @example
   * 266977839132045194
   */
  creator?: string;
  /**
   * @remarks
   * Return experiment detailed configuration or not.
   * 
   * @example
   * True, False
   */
  includeConfigData?: string;
  /**
   * @remarks
   * The maximum create time of the experiment.
   * 
   * @example
   * yyyy-mm-dd hh:mm:ss或着yyyy-mm-dd，比如2023-03-31 10:29:30
   */
  maxCreateTime?: string;
  /**
   * @remarks
   * The minimum create time of the experiment.
   * 
   * @example
   * yyyy-mm-dd hh:mm:ss或着yyyy-mm-dd，比如2023-03-31 10:29:30
   */
  minCreateTime?: string;
  /**
   * @remarks
   * Experiment name filter.
   * 
   * @example
   * my_hpo_exp_1
   */
  name?: string;
  /**
   * @remarks
   * ASC, DESC.
   * 
   * @example
   * ASC, DESC.
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Record number on each page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned experiments to be sorted by this column.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Experiment status to be listed.
   * 
   * @example
   * CREATED, RUNNING, FINISHED, FAILED, EARLY_STOPPED, USER_CANCELED, SYS_CANCELED, WAITING, NO_MORE_TRIAL, UNKNOWN
   */
  status?: string;
  /**
   * @remarks
   * The AI workspace ID the experiments belongs to.
   * 
   * @example
   * default
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      includeConfigData: 'IncludeConfigData',
      maxCreateTime: 'MaxCreateTime',
      minCreateTime: 'MinCreateTime',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      includeConfigData: 'string',
      maxCreateTime: 'string',
      minCreateTime: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * experiment array.
   */
  experiments?: ListHpoExperimentsResponseBodyExperiments[];
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @remarks
   * Total qualified experiment count.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      experiments: 'Experiments',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      experiments: { 'type': 'array', 'itemType': ListHpoExperimentsResponseBodyExperiments },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHpoExperimentsResponseBody;
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
      body: ListHpoExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialCommandsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * INVALID_USER_OR_EXP
   */
  code?: string;
  /**
   * @remarks
   * The list of commands.
   */
  commands?: ListHpoTrialCommandsResponseBodyCommands[];
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 071A904D-5A49-597F-9F69-81C7701D04AC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      commands: 'Commands',
      detail: 'Detail',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      commands: { 'type': 'array', 'itemType': ListHpoTrialCommandsResponseBodyCommands },
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialCommandsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHpoTrialCommandsResponseBody;
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
      body: ListHpoTrialCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialLogNamesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * Existing log files.
   */
  logNames?: string[];
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      logNames: 'LogNames',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      logNames: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialLogNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHpoTrialLogNamesResponseBody;
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
      body: ListHpoTrialLogNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialLogsRequest extends $tea.Model {
  /**
   * @remarks
   * Log file name.
   * 
   * @example
   * trial.log
   */
  logName?: string;
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      logName: 'LogName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   * 
   * @example
   * {}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The log.
   */
  logs?: string[];
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      logs: 'Logs',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      logs: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHpoTrialLogsResponseBody;
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
      body: ListHpoTrialLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialsRequest extends $tea.Model {
  /**
   * @remarks
   * The trial results order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The results to be sorted by which column.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * INVALID_USER_OR_EXP
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries qualified.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * Trial array.
   */
  trials?: ListHpoTrialsResponseBodyTrials[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trials: 'Trials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
      trials: { 'type': 'array', 'itemType': ListHpoTrialsResponseBodyTrials },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHpoTrialsResponseBody;
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
      body: ListHpoTrialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHpoTrialsRequest extends $tea.Model {
  /**
   * @remarks
   * A hyperparameter combination instance.
   * 
   * @example
   * ‘{"${batch_size}": "32", "${lr}": "0.01"}\\"
   */
  trialHyperParameters?: string;
  /**
   * @remarks
   * Trial ID array.
   */
  trialIds?: string[];
  static names(): { [key: string]: string } {
    return {
      trialHyperParameters: 'TrialHyperParameters',
      trialIds: 'TrialIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trialHyperParameters: 'string',
      trialIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHpoTrialsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * INVALID_USER_OR_EXP
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  /**
   * @remarks
   * Restart status of all the trial IDs.
   * 
   * @example
   * {
   * \\"xrYq99\\": TrialJobInfo text,
   * \\"xrYq9N\\":TrialJobInfo text
   * }
   */
  results?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHpoTrialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartHpoTrialsResponseBody;
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
      body: RestartHpoTrialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHpoExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * INVALID_INPUT_PARAMS
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * sHpITOH
   */
  expId?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 071A904D-5A49-597F-9F69-81C7701D04AC
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      expId: 'ExpId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      expId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHpoExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopHpoExperimentResponseBody;
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
      body: StopHpoExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHpoTrialsRequest extends $tea.Model {
  /**
   * @remarks
   * Trial Ids to be stopped.
   */
  trialIds?: string[];
  static names(): { [key: string]: string } {
    return {
      trialIds: 'TrialIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trialIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHpoTrialsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * INVALID_USER_OR_EXP
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   */
  detail?: { [key: string]: string };
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * failed to stop any trial
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 071A904D-5A49-597F-9F69-81C7701D04AC
   */
  requestId?: string;
  /**
   * @remarks
   * The results of trial stop.
   * 
   * @example
   * {
   *     \\"xrYq99\\":\\"successfully stopped trial,\\",
   *     \\"xrYq9N\\":\\"failed to stop trial,\\"
   * }
   */
  results?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHpoTrialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopHpoTrialsResponseBody;
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
      body: StopHpoTrialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHpoExperimentRequest extends $tea.Model {
  /**
   * @remarks
   * Experiment accessibility, private or public.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Experiment description.
   * 
   * @example
   * This is an AutoML HPO experiment.
   */
  description?: string;
  /**
   * @remarks
   * Experiment configuration.
   */
  hpoExperimentConfiguration?: HpoExperimentConfig;
  /**
   * @remarks
   * Experiment name.
   * 
   * @example
   * my experiment x
   */
  name?: string;
  /**
   * @remarks
   * Expeirment\\"s AI workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      hpoExperimentConfiguration: 'HpoExperimentConfiguration',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      hpoExperimentConfiguration: HpoExperimentConfig,
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHpoExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Extra error information.
   * 
   * @example
   * {}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Missing \\"user_id\\" in request.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F190916-B3E5-5D1E-AD0C-35C0DF105F51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHpoExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHpoExperimentResponseBody;
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
      body: UpdateHpoExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutofeExperimentConfigurationOdpsConfig extends $tea.Model {
  odpsAccessId?: string;
  odpsAccessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://service.cn-beijing.maxcompute.aliyun.com/api
   */
  odpsEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  odpsProjectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  odpsRegionId?: string;
  odpsRoleArn?: string;
  static names(): { [key: string]: string } {
    return {
      odpsAccessId: 'odps_access_id',
      odpsAccessKey: 'odps_access_key',
      odpsEndpoint: 'odps_endpoint',
      odpsProjectName: 'odps_project_name',
      odpsRegionId: 'odps_region_id',
      odpsRoleArn: 'odps_role_arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      odpsAccessId: 'string',
      odpsAccessKey: 'string',
      odpsEndpoint: 'string',
      odpsProjectName: 'string',
      odpsRegionId: 'string',
      odpsRoleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutofeExperimentConfigurationOssConfig extends $tea.Model {
  ossAccessId?: string;
  ossAccessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * autofe-service
   */
  ossBucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  ossRoleArn?: string;
  static names(): { [key: string]: string } {
    return {
      ossAccessId: 'oss_access_id',
      ossAccessKey: 'oss_access_key',
      ossBucket: 'oss_bucket',
      ossEndpoint: 'oss_endpoint',
      ossRoleArn: 'oss_role_arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossAccessId: 'string',
      ossAccessKey: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossRoleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutofeExperimentConfigurationYmlConfig extends $tea.Model {
  /**
   * @example
   * train
   */
  action?: string;
  /**
   * @example
   * true
   */
  aggregateOnly?: string;
  analyzeExpId?: string;
  /**
   * @example
   * 2
   */
  cpu?: string;
  dataPartition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * odps_table_name
   */
  dataSource?: string;
  /**
   * @example
   * odps
   */
  dataType?: string;
  /**
   * @example
   * false
   */
  debugMode?: string;
  excludeColumns?: string;
  featureSelection?: string;
  /**
   * @example
   * 10
   */
  filterThresh?: string;
  /**
   * @example
   * 0.02
   */
  ivThresh?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * label
   */
  label?: string;
  /**
   * @example
   * 4000
   */
  memory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://bucket_name/
   */
  outputConfigOssDir?: string;
  pipelineExpId?: string;
  /**
   * @example
   * false
   */
  reuseResults?: string;
  /**
   * @example
   * 0
   */
  sampleRatio?: string;
  /**
   * @example
   * 5000000
   */
  sampleSize?: string;
  selectionExpId?: string;
  /**
   * @example
   * true
   */
  skipSelect?: string;
  /**
   * @example
   * 10
   */
  workers?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      aggregateOnly: 'aggregate_only',
      analyzeExpId: 'analyze_exp_id',
      cpu: 'cpu',
      dataPartition: 'data_partition',
      dataSource: 'data_source',
      dataType: 'data_type',
      debugMode: 'debug_mode',
      excludeColumns: 'exclude_columns',
      featureSelection: 'feature_selection',
      filterThresh: 'filter_thresh',
      ivThresh: 'iv_thresh',
      label: 'label',
      memory: 'memory',
      outputConfigOssDir: 'output_config_oss_dir',
      pipelineExpId: 'pipeline_exp_id',
      reuseResults: 'reuse_results',
      sampleRatio: 'sample_ratio',
      sampleSize: 'sample_size',
      selectionExpId: 'selection_exp_id',
      skipSelect: 'skip_select',
      workers: 'workers',
      workspaceName: 'workspace_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      aggregateOnly: 'string',
      analyzeExpId: 'string',
      cpu: 'string',
      dataPartition: 'string',
      dataSource: 'string',
      dataType: 'string',
      debugMode: 'string',
      excludeColumns: 'string',
      featureSelection: 'string',
      filterThresh: 'string',
      ivThresh: 'string',
      label: 'string',
      memory: 'string',
      outputConfigOssDir: 'string',
      pipelineExpId: 'string',
      reuseResults: 'string',
      sampleRatio: 'string',
      sampleSize: 'string',
      selectionExpId: 'string',
      skipSelect: 'string',
      workers: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigDlcConfig extends $tea.Model {
  accessId?: string;
  accessKey?: string;
  endpoint?: string;
  protocol?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'access_id',
      accessKey: 'access_key',
      endpoint: 'endpoint',
      protocol: 'protocol',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endpoint: 'string',
      protocol: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigK8sConfig extends $tea.Model {
  nniContainerCpuLimit?: string;
  nniContainerMemoryLimit?: string;
  nniContainerRequestedCpu?: string;
  nniContainerRequestedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      nniContainerCpuLimit: 'nni_container_cpu_limit',
      nniContainerMemoryLimit: 'nni_container_memory_limit',
      nniContainerRequestedCpu: 'nni_container_requested_cpu',
      nniContainerRequestedMemory: 'nni_container_requested_memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nniContainerCpuLimit: 'string',
      nniContainerMemoryLimit: 'string',
      nniContainerRequestedCpu: 'string',
      nniContainerRequestedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigMetricConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  finalMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricDict?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  metricSource?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  metricType?: string;
  sourceListFinalMode?: string;
  static names(): { [key: string]: string } {
    return {
      finalMode: 'final_mode',
      metricDict: 'metric_dict',
      metricSource: 'metric_source',
      metricType: 'metric_type',
      sourceListFinalMode: 'source_list_final_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalMode: 'string',
      metricDict: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metricSource: { 'type': 'array', 'itemType': 'string' },
      metricType: 'string',
      sourceListFinalMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigMonitorConfig extends $tea.Model {
  atMobiles?: string;
  atUserIds?: string;
  isAtAll?: string;
  keyword?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      atMobiles: 'at_mobiles',
      atUserIds: 'at_user_ids',
      isAtAll: 'is_at_all',
      keyword: 'keyword',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atMobiles: 'string',
      atUserIds: 'string',
      isAtAll: 'string',
      keyword: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigOdpsConfig extends $tea.Model {
  accessId?: string;
  accessKey?: string;
  endPoint?: string;
  logViewHost?: string;
  projectName?: string;
  region?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'access_id',
      accessKey: 'access_key',
      endPoint: 'end_point',
      logViewHost: 'log_view_host',
      projectName: 'project_name',
      region: 'region',
      roleArn: 'role_arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endPoint: 'string',
      logViewHost: 'string',
      projectName: 'string',
      region: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigOssConfig extends $tea.Model {
  accessKeyID?: string;
  accessKeySecret?: string;
  endpoint?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyID: 'accessKeyID',
      accessKeySecret: 'accessKeySecret',
      endpoint: 'endpoint',
      roleArn: 'role_arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyID: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigOutputConfig extends $tea.Model {
  modelPath?: string;
  summaryPath?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'model_path',
      summaryPath: 'summary_path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      summaryPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigPaiflowConfig extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  regionId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'access_key_id',
      accessKeySecret: 'access_key_secret',
      regionId: 'region_id',
      workspaceId: 'workspace_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigParamsConfig extends $tea.Model {
  /**
   * @example
   * src_path,dst_file_path
   */
  paramsSrcDstFilepath?: string[];
  static names(): { [key: string]: string } {
    return {
      paramsSrcDstFilepath: 'params_src_dst_filepath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsSrcDstFilepath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigPlatformConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cmd?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DLC, MC,paiflow, etc
   */
  name?: string;
  resume?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      name: 'name',
      resume: 'resume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      resume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigScheduleConfig extends $tea.Model {
  day?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'day',
      endTime: 'end_time',
      startTime: 'start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigTsConfig extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  endpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'access_key_id',
      accessKeySecret: 'access_key_secret',
      endpoint: 'endpoint',
      regionId: 'region_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigYmlConfigAssessorClassArgs extends $tea.Model {
  earlystop?: boolean;
  movingAvg?: string;
  optimizeMode?: string;
  proportion?: number;
  startStep?: number;
  static names(): { [key: string]: string } {
    return {
      earlystop: 'earlystop',
      movingAvg: 'moving_avg',
      optimizeMode: 'optimize_mode',
      proportion: 'proportion',
      startStep: 'start_step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      earlystop: 'boolean',
      movingAvg: 'string',
      optimizeMode: 'string',
      proportion: 'number',
      startStep: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigYmlConfigAssessor extends $tea.Model {
  classArgs?: HpoExperimentConfigYmlConfigAssessorClassArgs;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      classArgs: 'class_args',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classArgs: HpoExperimentConfigYmlConfigAssessorClassArgs,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigYmlConfigTuner extends $tea.Model {
  classArgs?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      classArgs: 'class_args',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HpoExperimentConfigYmlConfig extends $tea.Model {
  assessor?: HpoExperimentConfigYmlConfigAssessor;
  debug?: boolean;
  experimentName?: string;
  logLevel?: string;
  maxTrialNumber?: number;
  trialConcurrency?: number;
  tuner?: HpoExperimentConfigYmlConfigTuner;
  static names(): { [key: string]: string } {
    return {
      assessor: 'assessor',
      debug: 'debug',
      experimentName: 'experiment_name',
      logLevel: 'log_level',
      maxTrialNumber: 'max_trial_number',
      trialConcurrency: 'trial_concurrency',
      tuner: 'tuner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessor: HpoExperimentConfigYmlConfigAssessor,
      debug: 'boolean',
      experimentName: 'string',
      logLevel: 'string',
      maxTrialNumber: 'number',
      trialConcurrency: 'number',
      tuner: HpoExperimentConfigYmlConfigTuner,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoExperimentsResponseBodyExperiments extends $tea.Model {
  /**
   * @remarks
   * Experiment accessibility, private or public.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * Experiment job run environment configurations.
   * 
   * @example
   * [odps_config]
   * key1 = value1
   * key2 = value2
   */
  configIni?: string;
  /**
   * @remarks
   * HPO experiment run configuration.
   * 
   * @example
   * experimentName: dlc_oss_mnist
   * experimentWorkingDirectory: ../expdir
   * searchSpaceFile: search_space.json
   * trialCommand: python3 -m hpo_tools.core.utils.run --config=./trial.ini
   * trialConcurrency: 1
   * maxTrialNumber: 4
   * tuner:
   *   name: TPE
   *   classArgs:
   *     optimize_mode: maximize
   * trainingService:
   *   platform: local
   * assessor:
   *   name: PAIAssessor
   *   classArgs:
   *     optimize_mode: maximize
   *     start_step: 2
   */
  configYml?: string;
  /**
   * @remarks
   * The one who created the experiment.
   * 
   * @example
   * 1049310008714189
   */
  creator?: string;
  /**
   * @remarks
   * If the experiment is deleted.
   * 
   * @example
   * 1
   */
  deleted?: boolean;
  /**
   * @remarks
   * The description of the experiment.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * Experiment ID.
   * 
   * @example
   * sORVEck
   */
  experimentId?: string;
  /**
   * @remarks
   * Experiment Create Time.
   * 
   * @example
   * 2023-03-31T10:29:30Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 2022-10-27T00:55:54Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Experimetn job type.
   * 
   * @example
   * 1
   */
  jobType?: string;
  /**
   * @remarks
   * Experiment name
   * 
   * @example
   * my experiment x
   */
  name?: string;
  /**
   * @remarks
   * Experiment hyperparameter search space.
   * 
   * @example
   * {\\"foo\\":\\"bar\\"}
   */
  searchSpace?: string;
  /**
   * @remarks
   * Experiment status.
   * 
   * @example
   * CREATED, RUNNING, FINISHED, FAILED, EARLY_STOPPED, USER_CANCELED, SYS_CANCELED, WAITING, NO_MORE_TRIAL, UNKNOWN
   */
  status?: string;
  /**
   * @remarks
   * How many trials the experiment have.
   * 
   * @example
   * 20
   */
  trialCount?: number;
  /**
   * @remarks
   * Trial status map.
   */
  trialStatus?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the AI workspace.
   * 
   * @example
   * foo
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      configIni: 'ConfigIni',
      configYml: 'ConfigYml',
      creator: 'Creator',
      deleted: 'Deleted',
      description: 'Description',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobType: 'JobType',
      name: 'Name',
      searchSpace: 'SearchSpace',
      status: 'Status',
      trialCount: 'TrialCount',
      trialStatus: 'TrialStatus',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      configIni: 'string',
      configYml: 'string',
      creator: 'string',
      deleted: 'boolean',
      description: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      jobType: 'string',
      name: 'string',
      searchSpace: 'string',
      status: 'string',
      trialCount: 'number',
      trialStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialCommandsResponseBodyCommands extends $tea.Model {
  /**
   * @remarks
   * The command that you want to run.
   * 
   * @example
   * dlc submit pytorch --name=test_nni_foo_bar
   */
  command?: string;
  /**
   * @remarks
   * The id of the command.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The output of the above command
   * 
   * @example
   * dlc job submitted.
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      id: 'Id',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      id: 'number',
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHpoTrialsResponseBodyTrials extends $tea.Model {
  experimentId?: string;
  finalMetric?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  hyperparam?: string;
  jobMeta?: string;
  metric?: string;
  metricName?: string;
  model?: string;
  parameterId?: number;
  status?: string;
  trialId?: string;
  userComment?: string;
  userScore?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      finalMetric: 'FinalMetric',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperparam: 'Hyperparam',
      jobMeta: 'JobMeta',
      metric: 'Metric',
      metricName: 'MetricName',
      model: 'Model',
      parameterId: 'ParameterId',
      status: 'Status',
      trialId: 'TrialId',
      userComment: 'UserComment',
      userScore: 'UserScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      finalMetric: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hyperparam: 'string',
      jobMeta: 'string',
      metric: 'string',
      metricName: 'string',
      model: 'string',
      parameterId: 'number',
      status: 'string',
      trialId: 'string',
      userComment: 'string',
      userScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paiautoml", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * CreateAutofeExperiment
   * 
   * @param request - CreateAutofeExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutofeExperimentResponse
   */
  async createAutofeExperimentWithOptions(request: CreateAutofeExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAutofeExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.autofeExperimentConfiguration)) {
      body["AutofeExperimentConfiguration"] = request.autofeExperimentConfiguration;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAutofeExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/autofe/experiment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAutofeExperimentResponse>(await this.callApi(params, req, runtime), new CreateAutofeExperimentResponse({}));
  }

  /**
   * CreateAutofeExperiment
   * 
   * @param request - CreateAutofeExperimentRequest
   * @returns CreateAutofeExperimentResponse
   */
  async createAutofeExperiment(request: CreateAutofeExperimentRequest): Promise<CreateAutofeExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAutofeExperimentWithOptions(request, headers, runtime);
  }

  /**
   * Create an HyperParameter Optimization experiment.
   * 
   * @param request - CreateHpoExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHpoExperimentResponse
   */
  async createHpoExperimentWithOptions(request: CreateHpoExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateHpoExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.hpoExperimentConfiguration)) {
      body["HpoExperimentConfiguration"] = request.hpoExperimentConfiguration;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHpoExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateHpoExperimentResponse>(await this.callApi(params, req, runtime), new CreateHpoExperimentResponse({}));
  }

  /**
   * Create an HyperParameter Optimization experiment.
   * 
   * @param request - CreateHpoExperimentRequest
   * @returns CreateHpoExperimentResponse
   */
  async createHpoExperiment(request: CreateHpoExperimentRequest): Promise<CreateHpoExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHpoExperimentWithOptions(request, headers, runtime);
  }

  /**
   * CreateServiceIdentityRole
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRoleWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceIdentityRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceIdentityRole",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/serviceidentityrole`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceIdentityRoleResponse({}));
  }

  /**
   * CreateServiceIdentityRole
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRole(): Promise<CreateServiceIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceIdentityRoleWithOptions(headers, runtime);
  }

  /**
   * Delete an HPO experiment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHpoExperimentResponse
   */
  async deleteHpoExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteHpoExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteHpoExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/delete`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteHpoExperimentResponse>(await this.callApi(params, req, runtime), new DeleteHpoExperimentResponse({}));
  }

  /**
   * Delete an HPO experiment
   * @returns DeleteHpoExperimentResponse
   */
  async deleteHpoExperiment(ExperimentId: string): Promise<DeleteHpoExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHpoExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * Get AutoFE Experiment。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutofeExperimentResponse
   */
  async getAutofeExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAutofeExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAutofeExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/autofe/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAutofeExperimentResponse>(await this.callApi(params, req, runtime), new GetAutofeExperimentResponse({}));
  }

  /**
   * Get AutoFE Experiment。
   * @returns GetAutofeExperimentResponse
   */
  async getAutofeExperiment(ExperimentId: string): Promise<GetAutofeExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAutofeExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * get hpo experiment by user id and exp id
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHpoExperimentResponse
   */
  async getHpoExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHpoExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetHpoExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHpoExperimentResponse>(await this.callApi(params, req, runtime), new GetHpoExperimentResponse({}));
  }

  /**
   * get hpo experiment by user id and exp id
   * @returns GetHpoExperimentResponse
   */
  async getHpoExperiment(ExperimentId: string): Promise<GetHpoExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHpoExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * Get trial detail information
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHpoTrialResponse
   */
  async getHpoTrialWithOptions(ExperimentId: string, TrialId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHpoTrialResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetHpoTrial",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/trial/${OpenApiUtil.getEncodeParam(TrialId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHpoTrialResponse>(await this.callApi(params, req, runtime), new GetHpoTrialResponse({}));
  }

  /**
   * Get trial detail information
   * @returns GetHpoTrialResponse
   */
  async getHpoTrial(ExperimentId: string, TrialId: string): Promise<GetHpoTrialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHpoTrialWithOptions(ExperimentId, TrialId, headers, runtime);
  }

  /**
   * GetServiceIdentityRole, return role name if SLR exists, empty otherwise
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRoleWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceIdentityRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetServiceIdentityRole",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/serviceidentityrole`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new GetServiceIdentityRoleResponse({}));
  }

  /**
   * GetServiceIdentityRole, return role name if SLR exists, empty otherwise
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRole(): Promise<GetServiceIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceIdentityRoleWithOptions(headers, runtime);
  }

  /**
   * list the content of a specified hpo experiment log
   * 
   * @param request - ListHpoExperimentLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHpoExperimentLogsResponse
   */
  async listHpoExperimentLogsWithOptions(ExperimentId: string, request: ListHpoExperimentLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHpoExperimentLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logName)) {
      query["LogName"] = request.logName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHpoExperimentLogs",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHpoExperimentLogsResponse>(await this.callApi(params, req, runtime), new ListHpoExperimentLogsResponse({}));
  }

  /**
   * list the content of a specified hpo experiment log
   * 
   * @param request - ListHpoExperimentLogsRequest
   * @returns ListHpoExperimentLogsResponse
   */
  async listHpoExperimentLogs(ExperimentId: string, request: ListHpoExperimentLogsRequest): Promise<ListHpoExperimentLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHpoExperimentLogsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * List HPO experiments
   * 
   * @param request - ListHpoExperimentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHpoExperimentsResponse
   */
  async listHpoExperimentsWithOptions(request: ListHpoExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHpoExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.includeConfigData)) {
      query["IncludeConfigData"] = request.includeConfigData;
    }

    if (!Util.isUnset(request.maxCreateTime)) {
      query["MaxCreateTime"] = request.maxCreateTime;
    }

    if (!Util.isUnset(request.minCreateTime)) {
      query["MinCreateTime"] = request.minCreateTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHpoExperiments",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHpoExperimentsResponse>(await this.callApi(params, req, runtime), new ListHpoExperimentsResponse({}));
  }

  /**
   * List HPO experiments
   * 
   * @param request - ListHpoExperimentsRequest
   * @returns ListHpoExperimentsResponse
   */
  async listHpoExperiments(request: ListHpoExperimentsRequest): Promise<ListHpoExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHpoExperimentsWithOptions(request, headers, runtime);
  }

  /**
   * 返回一个trial所对应的任务里所有已经执行的命令
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHpoTrialCommandsResponse
   */
  async listHpoTrialCommandsWithOptions(ExperimentId: string, TrialId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHpoTrialCommandsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListHpoTrialCommands",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/trial/${OpenApiUtil.getEncodeParam(TrialId)}/commands`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHpoTrialCommandsResponse>(await this.callApi(params, req, runtime), new ListHpoTrialCommandsResponse({}));
  }

  /**
   * 返回一个trial所对应的任务里所有已经执行的命令
   * @returns ListHpoTrialCommandsResponse
   */
  async listHpoTrialCommands(ExperimentId: string, TrialId: string): Promise<ListHpoTrialCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHpoTrialCommandsWithOptions(ExperimentId, TrialId, headers, runtime);
  }

  /**
   * List all log file names a trial have.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHpoTrialLogNamesResponse
   */
  async listHpoTrialLogNamesWithOptions(ExperimentId: string, TrialId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHpoTrialLogNamesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListHpoTrialLogNames",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/trial/${OpenApiUtil.getEncodeParam(TrialId)}/lognames`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHpoTrialLogNamesResponse>(await this.callApi(params, req, runtime), new ListHpoTrialLogNamesResponse({}));
  }

  /**
   * List all log file names a trial have.
   * @returns ListHpoTrialLogNamesResponse
   */
  async listHpoTrialLogNames(ExperimentId: string, TrialId: string): Promise<ListHpoTrialLogNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHpoTrialLogNamesWithOptions(ExperimentId, TrialId, headers, runtime);
  }

  /**
   * List Trial log lines
   * 
   * @param request - ListHpoTrialLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHpoTrialLogsResponse
   */
  async listHpoTrialLogsWithOptions(ExperimentId: string, TrialId: string, request: ListHpoTrialLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHpoTrialLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logName)) {
      query["LogName"] = request.logName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHpoTrialLogs",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/trial/${OpenApiUtil.getEncodeParam(TrialId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHpoTrialLogsResponse>(await this.callApi(params, req, runtime), new ListHpoTrialLogsResponse({}));
  }

  /**
   * List Trial log lines
   * 
   * @param request - ListHpoTrialLogsRequest
   * @returns ListHpoTrialLogsResponse
   */
  async listHpoTrialLogs(ExperimentId: string, TrialId: string, request: ListHpoTrialLogsRequest): Promise<ListHpoTrialLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHpoTrialLogsWithOptions(ExperimentId, TrialId, request, headers, runtime);
  }

  /**
   * List HPO trials
   * 
   * @param request - ListHpoTrialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHpoTrialsResponse
   */
  async listHpoTrialsWithOptions(ExperimentId: string, request: ListHpoTrialsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHpoTrialsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHpoTrials",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/trials`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHpoTrialsResponse>(await this.callApi(params, req, runtime), new ListHpoTrialsResponse({}));
  }

  /**
   * List HPO trials
   * 
   * @param request - ListHpoTrialsRequest
   * @returns ListHpoTrialsResponse
   */
  async listHpoTrials(ExperimentId: string, request: ListHpoTrialsRequest): Promise<ListHpoTrialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHpoTrialsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Restart HPO trials
   * 
   * @param request - RestartHpoTrialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartHpoTrialsResponse
   */
  async restartHpoTrialsWithOptions(ExperimentId: string, request: RestartHpoTrialsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartHpoTrialsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.trialHyperParameters)) {
      body["TrialHyperParameters"] = request.trialHyperParameters;
    }

    if (!Util.isUnset(request.trialIds)) {
      body["TrialIds"] = request.trialIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RestartHpoTrials",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/restart_trials`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartHpoTrialsResponse>(await this.callApi(params, req, runtime), new RestartHpoTrialsResponse({}));
  }

  /**
   * Restart HPO trials
   * 
   * @param request - RestartHpoTrialsRequest
   * @returns RestartHpoTrialsResponse
   */
  async restartHpoTrials(ExperimentId: string, request: RestartHpoTrialsRequest): Promise<RestartHpoTrialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartHpoTrialsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * calling hpo StopExperiment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopHpoExperimentResponse
   */
  async stopHpoExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopHpoExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopHpoExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopHpoExperimentResponse>(await this.callApi(params, req, runtime), new StopHpoExperimentResponse({}));
  }

  /**
   * calling hpo StopExperiment
   * @returns StopHpoExperimentResponse
   */
  async stopHpoExperiment(ExperimentId: string): Promise<StopHpoExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopHpoExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * Stop an HPO trial.
   * 
   * @param request - StopHpoTrialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopHpoTrialsResponse
   */
  async stopHpoTrialsWithOptions(ExperimentId: string, request: StopHpoTrialsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopHpoTrialsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.trialIds)) {
      body["TrialIds"] = request.trialIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopHpoTrials",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/stop_trials`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopHpoTrialsResponse>(await this.callApi(params, req, runtime), new StopHpoTrialsResponse({}));
  }

  /**
   * Stop an HPO trial.
   * 
   * @param request - StopHpoTrialsRequest
   * @returns StopHpoTrialsResponse
   */
  async stopHpoTrials(ExperimentId: string, request: StopHpoTrialsRequest): Promise<StopHpoTrialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopHpoTrialsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Update a running HPO experiment\\"s configuration
   * 
   * @param request - UpdateHpoExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHpoExperimentResponse
   */
  async updateHpoExperimentWithOptions(ExperimentId: string, request: UpdateHpoExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHpoExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.hpoExperimentConfiguration)) {
      body["HpoExperimentConfiguration"] = request.hpoExperimentConfiguration;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHpoExperiment",
      version: "2022-08-28",
      protocol: "HTTPS",
      pathname: `/api/automl/v1/hpo/experiment/${OpenApiUtil.getEncodeParam(ExperimentId)}/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateHpoExperimentResponse>(await this.callApi(params, req, runtime), new UpdateHpoExperimentResponse({}));
  }

  /**
   * Update a running HPO experiment\\"s configuration
   * 
   * @param request - UpdateHpoExperimentRequest
   * @returns UpdateHpoExperimentResponse
   */
  async updateHpoExperiment(ExperimentId: string, request: UpdateHpoExperimentRequest): Promise<UpdateHpoExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHpoExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

}
