// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleNextComponentsValue } from "./ModuleNextComponentsValue";
import { ModuleNextPropertiesValue } from "./ModuleNextPropertiesValue";
import { ModuleDataComponentsValue } from "./ModuleDataComponentsValue";
import { ModuleDataPropertiesValue } from "./ModuleDataPropertiesValue";


export class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Default Value
   */
  components?: { [key: string]: ModuleDataComponentsValue };
  /**
   * @remarks
   * File name.
   * 
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @remarks
   * Duration.
   */
  properties?: { [key: string]: ModuleDataPropertiesValue };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      components: 'Components',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleDataComponentsValue },
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleDataPropertiesValue },
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Default Value
   */
  components?: { [key: string]: ModuleNextComponentsValue };
  /**
   * @remarks
   * Website Name
   * 
   * @example
   * docs
   */
  name?: string;
  /**
   * @remarks
   * Frame rate.
   */
  properties?: { [key: string]: ModuleNextPropertiesValue };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      components: 'Components',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleNextComponentsValue },
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleNextPropertiesValue },
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 12
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Request result.
   */
  data?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData[];
  /**
   * @remarks
   * Next feature ID
   */
  next?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @remarks
   * Paging size.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether there is a previous page.
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * For the current query, aside from pagination limits, the server-side processes at most the latest 1 000 records. If the result exceeds 1 000 records, **ResultLimit** is **true**. You can narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      next: 'Next',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData },
      next: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      resultLimit: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.next && typeof (this.next as any).validate === 'function') {
      (this.next as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCommoditySpecificationsV2ForPartnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * permission denied information
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
   * App Name.
   * 
   * @example
   * or
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
   * dynamic error message used to replace the `%s` placeholder in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the provided request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * faulty parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Value range: 10–100. Default Value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Response data
   */
  module?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule;
  /**
   * @remarks
   * Token for the start of the next query. It is empty if there is no next query.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
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
   * is synchronous processing enabled
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
      module: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule,
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

