// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPublishStatusResponseBodyModule extends $dara.Model {
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
   * Current operation step of the job.
   * 
   * @example
   * PRE_CHECK
   */
  currentStep?: string;
  /**
   * @remarks
   * Deployment channel
   * 
   * @example
   * PC,WEAPP
   */
  deployChannel?: string;
  /**
   * @remarks
   * Application description
   * 
   * @example
   * /bak->serverless.handler(2020091300200279)
   */
  description?: string;
  /**
   * @remarks
   * Publishing procedure
   * 
   * @example
   * abc
   */
  errorStep?: string;
  /**
   * @remarks
   * Indicates whether the job is finished.
   */
  isFinish?: boolean;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. Valid values:
   * 
   * - `true`: The invocation succeeded.
   * 
   * - `false`: Failed to invoke.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Additional description information.
   * 
   * @example
   * common notify successfully.
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
   * Job completion percentage.
   * 
   * @example
   * 20
   */
  percent?: number;
  /**
   * @remarks
   * Publish number
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @remarks
   * Publish order ID
   * 
   * @example
   * 123
   */
  publishOrderId?: number;
  /**
   * @remarks
   * Scheduled publish time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 123123
   */
  publishTime?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by invoking the [ListSites](~~ListSites~~) API.
   * 
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @remarks
   * Error Level, including FATAL, ERROR, WARNING, and CRITICAL.
   */
  steps?: string[];
  subchannel?: string;
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
      subchannel: 'Subchannel',
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

export class GetAppPublishStatusResponseBody extends $dara.Model {
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
   * Is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic message.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Response data
   */
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
   * @remarks
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
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

