// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRecommendedCommoditiesResponseBodyModuleCommodities extends $dara.Model {
  /**
   * @remarks
   * Commodity code (used for both resource plans and Marketing Products)
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * Extension fields (such as unsupportedReason)
   */
  extend?: { [key: string]: string };
  /**
   * @remarks
   * Order Type: BUY - Purchase, UPGRADE - upgrade
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * Sorting Priority (the smaller the number, the higher the priority)
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * Marketing Product ID (returned only for new purchases)
   * 
   * @example
   * 12345
   */
  promotionCommodityId?: string;
  /**
   * @remarks
   * Hyperlink URL (returned when a redirect is required, such as during an upgrade)
   * 
   * @example
   * https://ecs-workbench-disposable.aliyun.com/account/disposable/login/sst/1291612921555690/edvo2gevfh
   */
  redirectUrl?: string;
  /**
   * @remarks
   * Product Status
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
   * Marketing product list
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
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App Name.
   * 
   * @example
   * spring-cloud-b
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
   * Dynamic error message used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it means the provided request parameter **DtsJobId** is invalid.
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
   * Data table module.  
   * 
   * - ABTest: Experiment Data Table  
   * 
   * - ExperimentTool: Experiment Tool Table  
   * 
   * - DataDiagnosis: Data Diagnosis
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
   * Indicates whether processing is synchronous
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

