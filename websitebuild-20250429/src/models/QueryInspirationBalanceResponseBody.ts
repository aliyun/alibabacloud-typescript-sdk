// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationBalanceResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The remaining quota (totalQuota - totalUsed).
   * 
   * @example
   * 8
   */
  remaining?: number;
  /**
   * @remarks
   * The string format of the remaining quota.
   * 
   * @example
   * 8
   */
  remainingStr?: string;
  /**
   * @remarks
   * The total quota (the sum of initQuota of all valid accounts).
   * 
   * @example
   * 10
   */
  totalQuota?: number;
  /**
   * @remarks
   * The string format of the total quota.
   * 
   * @example
   * 10
   */
  totalQuotaStr?: string;
  /**
   * @remarks
   * The consumed quota (the sum of used of all valid accounts).
   * 
   * @example
   * 1
   */
  totalUsed?: number;
  /**
   * @remarks
   * The string format of the consumed quota.
   * 
   * @example
   * 1
   */
  totalUsedStr?: string;
  static names(): { [key: string]: string } {
    return {
      remaining: 'Remaining',
      remainingStr: 'RemainingStr',
      totalQuota: 'TotalQuota',
      totalQuotaStr: 'TotalQuotaStr',
      totalUsed: 'TotalUsed',
      totalUsedStr: 'TotalUsedStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remaining: 'number',
      remainingStr: 'string',
      totalQuota: 'number',
      totalQuotaStr: 'string',
      totalUsed: 'number',
      totalUsedStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInspirationBalanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Specifies whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * dewuApp
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: QueryInspirationBalanceResponseBodyModule;
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
   * Specifies whether the processing is synchronous.
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
      module: QueryInspirationBalanceResponseBodyModule,
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

