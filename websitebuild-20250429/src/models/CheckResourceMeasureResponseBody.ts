// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceMeasureResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The desired total returned only for APP_WORKSPACE. This is the target total for the current check, which is the sum of the existing usage in the saved configuration and ResourceValue. If the compatible DesiredTotal is provided, this total is used directly. The existing usage of issues is the sum of common and word-of-mouth issues in the saved configuration, and the existing usage of competitors is the number of competitors. This parameter is empty for APP and USER checks.
   * 
   * @example
   * 21
   */
  desiredTotal?: number;
  /**
   * @remarks
   * The error code returned when the check fails. This parameter is null when the check passes.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the check fails. This parameter is null when the check passes.
   * 
   * @example
   * stream push failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The limit returned only for APP_WORKSPACE quantity pre-checks. This is the maximum number of issues or competitors allowed by the current commodity edition, not the remaining quota. This parameter is empty for APP and USER checks or when the edition benefits cannot be determined.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * Indicates whether the check is passed.
   * 
   * @example
   * False
   */
  passed?: boolean;
  /**
   * @remarks
   * The resource identifier.
   * 
   * @example
   * TransitRouterVpcAttachment
   */
  resourceCode?: string;
  /**
   * @remarks
   * Indicates whether a purchasable higher edition that can accommodate the DesiredTotal exists. This parameter is true only when the capacity of the current edition is insufficient and a higher edition meets the requirements. Otherwise, this parameter is false. This parameter may be empty for APP and USER checks. This field does not indicate that an upgrade has been performed or an upgrade order has been created.
   * 
   * @example
   * true
   */
  upgradeAvailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      desiredTotal: 'DesiredTotal',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      limit: 'Limit',
      passed: 'Passed',
      resourceCode: 'ResourceCode',
      upgradeAvailable: 'UpgradeAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredTotal: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      limit: 'number',
      passed: 'boolean',
      resourceCode: 'string',
      upgradeAvailable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceMeasureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for access denial.
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
   * The application name.
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The application module.
   */
  module?: CheckResourceMeasureResponseBodyModule;
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
   * The root error code.
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
   * The backup parameter.
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
      module: CheckResourceMeasureResponseBodyModule,
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

