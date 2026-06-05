// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPublishHistoryResponseBodyModuleHistory extends $dara.Model {
  /**
   * @example
   * true
   */
  canQuickRevert?: string;
  /**
   * @example
   * PRE_CHECK
   */
  currentStep?: string;
  /**
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @example
   * PSKB
   */
  description?: string;
  /**
   * @example
   * error
   */
  errorStep?: string;
  isFinish?: boolean;
  /**
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @example
   * true
   */
  percent?: number;
  /**
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @example
   * 123
   */
  publishOrderId?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026
   */
  publishTime?: string;
  steps?: string[];
  static names(): { [key: string]: string } {
    return {
      canQuickRevert: 'CanQuickRevert',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      canQuickRevert: 'string',
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
   * @example
   * 123
   */
  currentPublishOrderId?: number;
  history?: ListAppPublishHistoryResponseBodyModuleHistory[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * abc
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppPublishHistoryResponseBodyModule;
  /**
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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

