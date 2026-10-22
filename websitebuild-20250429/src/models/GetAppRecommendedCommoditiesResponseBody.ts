// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRecommendedCommoditiesResponseBodyModuleCommodities extends $dara.Model {
  /**
   * @remarks
   * The click action type. Valid values: CONSULT, BUY, and AUTO.
   * 
   * @example
   * CONSULT
   */
  actionType?: string;
  /**
   * @remarks
   * The commodity code. This parameter applies to both resource plans and marketing commodities.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The display description of the recommendation.
   * 
   * @example
   * Add a WeCom consultant to receive inspiration points for free
   */
  description?: string;
  /**
   * @remarks
   * The extended fields, such as unsupportedReason.
   */
  extend?: { [key: string]: string };
  /**
   * @remarks
   * The order type. Valid values: BUY and UPGRADE.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The sort priority. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the marketing commodity. This parameter is returned only for new purchases.
   * 
   * @example
   * 12345
   */
  promotionCommodityId?: string;
  /**
   * @remarks
   * The recommendation type. Valid values: COMMODITY and ACTIVITY.
   * 
   * @example
   * COMMODITY
   */
  recommendType?: string;
  /**
   * @remarks
   * The redirect URL. This parameter is returned when a redirect is required in scenarios such as upgrades.
   * 
   * @example
   * https://ecs-workbench-disposable.aliyun.com/account/disposable/login/sst/1291612921555690/edvo2gevfh
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The status of the commodity.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The display title of the recommendation.
   * 
   * @example
   * Add a consultant as a friend to receive an extra 1,000 inspiration points
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      commodityCode: 'CommodityCode',
      description: 'Description',
      extend: 'Extend',
      orderType: 'OrderType',
      priority: 'Priority',
      promotionCommodityId: 'PromotionCommodityId',
      recommendType: 'RecommendType',
      redirectUrl: 'RedirectUrl',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      commodityCode: 'string',
      description: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderType: 'string',
      priority: 'number',
      promotionCommodityId: 'string',
      recommendType: 'string',
      redirectUrl: 'string',
      status: 'string',
      title: 'string',
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
   * The list of marketing commodities.
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter. If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The data table module. Valid values:
   * 
   * - ABTest: Experiment data table.
   * 
   * - ExperimentTool: Experiment tool table.
   * 
   * - DataDiagnosis: Data diagnosis.
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
   * System exception
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

