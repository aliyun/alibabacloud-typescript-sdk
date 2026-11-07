// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterHealthCheckTaskResponseBodyDataResultRiskList extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * {"desc":"The engine version is outdated and many features are missing. Upgrade to the latest version at the earliest opportunity."}
   */
  description?: string;
  /**
   * @remarks
   * The English description of the risk.
   * 
   * @example
   * Upgrade to the latest version to ensure that all features are available!
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 3426
   */
  id?: number;
  /**
   * @remarks
   * Redundant field.
   * 
   * @example
   * null
   */
  module?: string;
  /**
   * @remarks
   * Specifies whether to disable the notification feature if the risk item occurs.
   * 
   * - true: Disables risk item notifications
   * 
   * - false: Enables risk item notifications
   * 
   * @example
   * false
   */
  mute?: boolean;
  /**
   * @remarks
   * Redundant field.
   * 
   * @example
   * null
   */
  noticeFeature?: boolean;
  /**
   * @remarks
   * The ID of the user to which the cluster belongs.
   * 
   * @example
   * 123456
   */
  primaryUser?: string;
  /**
   * @remarks
   * The risk code.
   * 
   * @example
   * 22020010001
   */
  riskCode?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - HIGH: High risk
   * 
   * - MID: Medium risk
   * 
   * - LOW: Low risk
   * 
   * @example
   * MID
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk name.
   * 
   * @example
   * Engine version too low
   */
  riskName?: string;
  /**
   * @remarks
   * The English name of the risk.
   * 
   * @example
   * Low engine version
   */
  riskNameEn?: string;
  /**
   * @remarks
   * The type of the risk.
   * 
   * @example
   * Version risk
   */
  riskType?: string;
  /**
   * @remarks
   * The current situation.
   * 
   * @example
   * {"desc":"The current engine version is too low with many missing features","links":[{"type":"url","value":"https://xxxx"","desc":"Version notes"}]}
   */
  situation?: string;
  /**
   * @remarks
   * The English description of the current situation.
   * 
   * @example
   * The current engine version is low, and there are many missing features
   */
  situationEn?: string;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * {"desc": "Upgrade to the latest version at the earliest opportunity.", "links":[{"type":"upgrade","desc":"Click to upgrade"}]}
   */
  suggestion?: string;
  /**
   * @remarks
   * The English description of the suggestion.
   * 
   * @example
   * Upgrade to the latest version
   */
  suggestionEn?: string;
  /**
   * @remarks
   * The ID of the associated parent task.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * Redundant field.
   * 
   * @example
   * null
   */
  type?: number;
  /**
   * @remarks
   * Redundant field.
   * 
   * @example
   * null
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      id: 'Id',
      module: 'Module',
      mute: 'Mute',
      noticeFeature: 'NoticeFeature',
      primaryUser: 'PrimaryUser',
      riskCode: 'RiskCode',
      riskLevel: 'RiskLevel',
      riskName: 'RiskName',
      riskNameEn: 'RiskNameEn',
      riskType: 'RiskType',
      situation: 'Situation',
      situationEn: 'SituationEn',
      suggestion: 'Suggestion',
      suggestionEn: 'SuggestionEn',
      taskId: 'TaskId',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      descriptionEn: 'string',
      id: 'number',
      module: 'string',
      mute: 'boolean',
      noticeFeature: 'boolean',
      primaryUser: 'string',
      riskCode: 'string',
      riskLevel: 'string',
      riskName: 'string',
      riskNameEn: 'string',
      riskType: 'string',
      situation: 'string',
      situationEn: 'string',
      suggestion: 'string',
      suggestionEn: 'string',
      taskId: 'number',
      type: 'number',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The complete version number.
   * 
   * @example
   * 1.2.1
   */
  appVersion?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-06-20T06:51:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Redundant field.
   * 
   * @example
   * null
   */
  imageVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse_ingresspost-cn-0jbvrcex****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the user to which the cluster belongs.
   * 
   * @example
   * 123456
   */
  primaryUser?: string;
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * @example
   * 3
   */
  replica?: string;
  /**
   * @remarks
   * The list of risk items.
   */
  riskList?: ListClusterHealthCheckTaskResponseBodyDataResultRiskList[];
  /**
   * @remarks
   * The total score.
   * 
   * @example
   * 60
   */
  score?: number;
  /**
   * @remarks
   * The specifications.
   * 
   * @example
   * MSE_SC_2_4_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The job states.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The total number of inspection items.
   * 
   * @example
   * 10
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of risk items.
   * 
   * @example
   * 3
   */
  totalRisk?: number;
  /**
   * @remarks
   * Redundant field.
   * 
   * @example
   * null
   */
  type?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2022-11-12 15:07:55
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * NACOS_ANS_1_2_1_3
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      chargeType: 'ChargeType',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      id: 'Id',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      primaryUser: 'PrimaryUser',
      replica: 'Replica',
      riskList: 'RiskList',
      score: 'Score',
      spec: 'Spec',
      status: 'Status',
      totalItem: 'TotalItem',
      totalRisk: 'TotalRisk',
      type: 'Type',
      updateTime: 'UpdateTime',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      chargeType: 'string',
      clusterType: 'string',
      createTime: 'string',
      id: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      primaryUser: 'string',
      replica: 'string',
      riskList: { 'type': 'array', 'itemType': ListClusterHealthCheckTaskResponseBodyDataResultRiskList },
      score: 'number',
      spec: 'string',
      status: 'string',
      totalItem: 'number',
      totalRisk: 'number',
      type: 'string',
      updateTime: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the list.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of health check tasks.
   */
  result?: ListClusterHealthCheckTaskResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of queried rules.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListClusterHealthCheckTaskResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code is only used to synchronize with success
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListClusterHealthCheckTaskResponseBodyData;
  /**
   * @remarks
   * The dynamic part in the error message.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message used to replace \\*\\*%s\\*\\* in the **ErrMessage** parameter.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid**, and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code. Take note of the following items:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * 
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * mse-100-000
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
   * The returned message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E9FDCFE-0738-493B-B801-82BDFBCB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListClusterHealthCheckTaskResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

