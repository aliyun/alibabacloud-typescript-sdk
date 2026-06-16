// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRecommendedCommoditiesResponseBodyModuleCommodities extends $dara.Model {
  /**
   * @remarks
   * The commodity code. This code applies to both resource plans and promotional commodities.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The extension field, such as unsupportedReason.
   */
  extend?: { [key: string]: string };
  /**
   * @remarks
   * The order type. Valid values:
   * - BUY: purchase.
   * - UPGRADE: upgrade.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The sorting priority. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The promotional commodity ID. This parameter is returned only for new purchases.
   * 
   * @example
   * 12345
   */
  promotionCommodityId?: string;
  /**
   * @remarks
   * The redirect URL. This parameter is returned when a redirect is required, such as during an upgrade.
   * 
   * @example
   * https://ecs-workbench-disposable.aliyun.com/account/disposable/login/sst/1291612921555690/edvo2gevfh
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The commodity status.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      extend: 'Extend',
      orderType: 'OrderType',
      priority: 'Priority',
      promotionCommodityId: 'PromotionCommodityId',
      redirectUrl: 'RedirectUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderType: 'string',
      priority: 'number',
      promotionCommodityId: 'string',
      redirectUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRecommendedCommoditiesResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The list of promotional commodities.
   */
  commodities?: GetAppRecommendedCommoditiesResponseBodyModuleCommodities[];
  static names(): { [key: string]: string } {
    return {
      commodities: 'Commodities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodities: { 'type': 'array', 'itemType': GetAppRecommendedCommoditiesResponseBodyModuleCommodities },
    };
  }

  validate() {
    if(Array.isArray(this.commodities)) {
      $dara.Model.validateArray(this.commodities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRecommendedCommoditiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
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
   * The data table module. Valid values:
   * 
   * - ABTest: the experiment data table.
   * 
   * - ExperimentTool: the experiment tool table.
   * 
   * - DataDiagnosis: data modeling diagnostics.
   */
  module?: GetAppRecommendedCommoditiesResponseBodyModule;
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
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
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
      module: GetAppRecommendedCommoditiesResponseBodyModule,
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

