// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterHealthCheckTaskResponseBodyDataResultRiskList extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * {\\\\"desc\\\\":\\\\"The engine version is outdated and a large number of features are not supported. Upgrade the engine to the latest version at the earliest opportunity. \\\\"}
   */
  description?: string;
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
   * A redundant parameter.
   * 
   * @example
   * null
   */
  module?: string;
  /**
   * @remarks
   * Indicates whether the risk item notification feature is disabled.
   * 
   * *   true: disabled
   * *   false: enabled
   * 
   * @example
   * false
   */
  mute?: boolean;
  /**
   * @remarks
   * A redundant parameter.
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
   * The severity of the risk. Valid values:
   * 
   * *   HIGH: high risk
   * *   MID: medium risk
   * *   LOW: low risk
   * 
   * @example
   * MID
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the risk.
   * 
   * @example
   * The engine version is outdated.
   */
  riskName?: string;
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
   * The situation.
   * 
   * @example
   * {\\\\"desc\\\\":\\\\"The engine version is outdated and a large number of features are not supported.\\\\",\\\\"links\\\\":[{\\\\"type\\\\":\\\\"url\\\\",\\\\"value\\\\":\\\\"https://xxxx"\\\\",\\\\"desc\\\\":\\\\"Release notes\\\\"}]}
   */
  situation?: string;
  situationEn?: string;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * {"desc": "Upgrade to the latest version at the earliest opportunity.", "links":[{"type": "upgrade", "desc": "Click to upgrade"}]}
   */
  suggestion?: string;
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
   * A redundant parameter.
   * 
   * @example
   * null
   */
  type?: number;
  /**
   * @remarks
   * A redundant parameter.
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
   * The type of the cluster.
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
   * A redundant parameter.
   * 
   * @example
   * null
   */
  imageVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse_ingresspost-cn-0jbvrcex****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the user to which the instance belongs.
   * 
   * @example
   * 123456
   */
  primaryUser?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
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
   * The status of the task.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The total number of check items.
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
   * A redundant parameter.
   * 
   * @example
   * null
   */
  type?: string;
  /**
   * @remarks
   * The last update time.
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
   * The page number of the returned page.
   * 
   * @example
   * 0
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
   * The list of health check tasks.
   */
  result?: ListClusterHealthCheckTaskResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of returned entries.
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
   * The status code. A value of 200 is returned if the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
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
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * > If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed. Take note of the following rules:
   * 
   * *   The **ErrorCode** parameter is not returned if the request is successful.
   * *   The **ErrorCode** parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E9FDCFE-0738-493B-B801-82BDFBCB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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

