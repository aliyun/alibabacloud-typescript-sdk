// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPublishHistoryResponseBodyModuleHistory extends $dara.Model {
  /**
   * @remarks
   * Indicates whether quick rollback is supported.
   * 
   * @example
   * true
   */
  canQuickRevert?: string;
  commitHash?: string;
  /**
   * @remarks
   * Current step.
   * 
   * @example
   * PRE_CHECK
   */
  currentStep?: string;
  /**
   * @remarks
   * Deployment channel.
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * Application description.
   * 
   * @example
   * PSKB
   */
  description?: string;
  /**
   * @remarks
   * Publishing procedure.
   * 
   * @example
   * error
   */
  errorStep?: string;
  /**
   * @remarks
   * Indicates whether the process is complete.
   */
  isFinish?: boolean;
  /**
   * @remarks
   * Indicates whether resource allocation to the cost center succeeded.
   * - true indicates success.
   * - false indicates failure.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Sorting type: ASC or DESC.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * Transcoding progress.
   * 
   * @example
   * true
   */
  percent?: number;
  /**
   * @remarks
   * Publish number.
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @remarks
   * Publish order ID.
   * 
   * @example
   * 123
   */
  publishOrderId?: number;
  /**
   * @remarks
   * Published At.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026
   */
  publishTime?: string;
  /**
   * @remarks
   * Specific widget configuration.
   */
  steps?: string[];
  subchannel?: string;
  static names(): { [key: string]: string } {
    return {
      canQuickRevert: 'CanQuickRevert',
      commitHash: 'CommitHash',
      currentStep: 'CurrentStep',
      deployChannel: 'DeployChannel',
      description: 'Description',
      errorStep: 'ErrorStep',
      isFinish: 'IsFinish',
      isSuccess: 'IsSuccess',
      msg: 'Msg',
      orderType: 'OrderType',
      percent: 'Percent',
      publishNumber: 'PublishNumber',
      publishOrderId: 'PublishOrderId',
      publishTime: 'PublishTime',
      steps: 'Steps',
      subchannel: 'Subchannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canQuickRevert: 'string',
      commitHash: 'string',
      currentStep: 'string',
      deployChannel: 'string',
      description: 'string',
      errorStep: 'string',
      isFinish: 'boolean',
      isSuccess: 'boolean',
      msg: 'string',
      orderType: 'string',
      percent: 'number',
      publishNumber: 'string',
      publishOrderId: 'number',
      publishTime: 'string',
      steps: { 'type': 'array', 'itemType': 'string' },
      subchannel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPublishHistoryResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Current publish order ID
   * 
   * @example
   * 123
   */
  currentPublishOrderId?: number;
  /**
   * @remarks
   * Indicates whether to display the history of applying the alert template to application groups. Valid values:
   * 
   * - true: Display.
   * 
   * - false (default): Do not display.
   */
  history?: ListAppPublishHistoryResponseBodyModuleHistory[];
  /**
   * @remarks
   * Page number. Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Paging size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPublishOrderId: 'CurrentPublishOrderId',
      history: 'History',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPublishOrderId: 'number',
      history: { 'type': 'array', 'itemType': ListAppPublishHistoryResponseBodyModuleHistory },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPublishHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * frontend application Name.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * dynamic message, not currently used. Please ignore.
   * 
   * @example
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * fault parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results per query.  
   * 
   * Value range: 10 to 100. Default Value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Data Table module.  
   * 
   * - ABTest: experiment Data Table  
   * 
   * - ExperimentTool: experiment tool table  
   * 
   * - DataDiagnosis: Data Diagnosis
   */
  module?: ListAppPublishHistoryResponseBodyModule;
  /**
   * @remarks
   * Token for the start of the next query. It is empty if there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      module: ListAppPublishHistoryResponseBodyModule,
      nextToken: 'string',
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

