// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPublishStatusResponseBodyModule extends $dara.Model {
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
   * PC,WEAPP
   */
  deployChannel?: string;
  /**
   * @example
   * /bak->serverless.handler(2020091300200279)
   */
  description?: string;
  /**
   * @example
   * abc
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
   * common notify successfully.
   */
  msg?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @example
   * 20
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
   * 123123
   */
  publishTime?: string;
  /**
   * @example
   * 865181640657408
   */
  siteId?: string;
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
      siteId: 'SiteId',
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
      siteId: 'string',
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

export class GetAppPublishStatusResponseBody extends $dara.Model {
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
   * or
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  module?: GetAppPublishStatusResponseBodyModule;
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
      module: 'Module',
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
      module: GetAppPublishStatusResponseBodyModule,
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

