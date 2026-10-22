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
  /**
   * @remarks
   * The commit hash of the code.
   * 
   * @example
   * 890243d5977e74d80eebd4734f7b05f626f84cb1
   */
  commitHash?: string;
  /**
   * @remarks
   * The current step number.
   * 
   * @example
   * PRE_CHECK
   */
  currentStep?: string;
  /**
   * @remarks
   * The code of the current release step.
   * 
   * @example
   * INIT
   */
  currentStepCode?: string;
  /**
   * @remarks
   * The deployment channel.
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * PSKB
   */
  description?: string;
  /**
   * @remarks
   * The release process.
   * 
   * @example
   * error
   */
  errorStep?: string;
  /**
   * @remarks
   * The code of the release step where the error occurred.
   * 
   * @example
   * BUILDING
   */
  errorStepCode?: string;
  /**
   * @remarks
   * Indicates whether the operation is completed.
   */
  isFinish?: boolean;
  /**
   * @remarks
   * Indicates whether the resource allocation for the financial unit is successful. Valid values:
   * - true: The allocation is successful.
   * - false: The allocation fails.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * The sort type. Valid values: ASC and DESC.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The code of the release order type.
   * 
   * @example
   * DEPLOY
   */
  orderTypeCode?: string;
  /**
   * @remarks
   * The transcoding progress.
   * 
   * @example
   * true
   */
  percent?: number;
  /**
   * @remarks
   * The release number.
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @remarks
   * The release order ID.
   * 
   * @example
   * 123
   */
  publishOrderId?: number;
  /**
   * @remarks
   * The release time in the UTC format yyyy-MM-dd\\"T\\"HH:mm:ss.SSS\\"Z\\".
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026
   */
  publishTime?: string;
  /**
   * @remarks
   * The list of release step codes.
   */
  stepCodes?: string[];
  /**
   * @remarks
   * The specific configurations of the component.
   */
  steps?: string[];
  /**
   * @remarks
   * The release subchannel.
   */
  subchannel?: string;
  static names(): { [key: string]: string } {
    return {
      canQuickRevert: 'CanQuickRevert',
      commitHash: 'CommitHash',
      currentStep: 'CurrentStep',
      currentStepCode: 'CurrentStepCode',
      deployChannel: 'DeployChannel',
      description: 'Description',
      errorStep: 'ErrorStep',
      errorStepCode: 'ErrorStepCode',
      isFinish: 'IsFinish',
      isSuccess: 'IsSuccess',
      msg: 'Msg',
      orderType: 'OrderType',
      orderTypeCode: 'OrderTypeCode',
      percent: 'Percent',
      publishNumber: 'PublishNumber',
      publishOrderId: 'PublishOrderId',
      publishTime: 'PublishTime',
      stepCodes: 'StepCodes',
      steps: 'Steps',
      subchannel: 'Subchannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canQuickRevert: 'string',
      commitHash: 'string',
      currentStep: 'string',
      currentStepCode: 'string',
      deployChannel: 'string',
      description: 'string',
      errorStep: 'string',
      errorStepCode: 'string',
      isFinish: 'boolean',
      isSuccess: 'boolean',
      msg: 'string',
      orderType: 'string',
      orderTypeCode: 'string',
      percent: 'number',
      publishNumber: 'string',
      publishOrderId: 'number',
      publishTime: 'string',
      stepCodes: { 'type': 'array', 'itemType': 'string' },
      steps: { 'type': 'array', 'itemType': 'string' },
      subchannel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stepCodes)) {
      $dara.Model.validateArray(this.stepCodes);
    }
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
   * The ID of the current release order.
   * 
   * @example
   * 123
   */
  currentPublishOrderId?: number;
  /**
   * @remarks
   * Specifies whether to display the history of applying alert templates to application groups. Valid values:
   * - true: Display.
   * - false: Do not display. This is the default value.
   */
  history?: ListAppPublishHistoryResponseBodyModuleHistory[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The details of the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the frontend application.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not used and can be ignored.
   * 
   * @example
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The maximum number of entries to return for a single query. Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The data table module. Valid values:
   * - ABTest: experiment data table
   * - ExperimentTool: experiment tool table
   * - DataDiagnosis: data diagnosis
   */
  module?: ListAppPublishHistoryResponseBodyModule;
  /**
   * @remarks
   * The token used to start the next query. This parameter is empty if no next query is available.
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
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * System exception
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
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

