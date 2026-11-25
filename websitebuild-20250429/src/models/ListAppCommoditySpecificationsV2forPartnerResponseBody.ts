// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleNextComponentsValue } from "./ModuleNextComponentsValue";
import { ModuleNextPropertiesValue } from "./ModuleNextPropertiesValue";
import { ModuleDataComponentsValue } from "./ModuleDataComponentsValue";
import { ModuleDataPropertiesValue } from "./ModuleDataPropertiesValue";


export class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The component mapping for the product specifications, where the key is the component code.
   * 
   * @example
   * {"deploy_area":{"Code":"deploy_area","Name":"Deployment region","ModuleAttrStatus":1,"Properties":{"deploy_area":{"Code":"deploy_area","Name":"Deployment region","Value":"HongKong","Values":[{"Value":"HongKong","Name":"China (Hong Kong)"}]}}}}
   */
  components?: { [key: string]: ModuleDataComponentsValue };
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * File name
   */
  name?: string;
  /**
   * @remarks
   * The property mapping for the product specifications, where the key is the property code.
   * 
   * @example
   * {"version":{"Code":"version","Values":[{"Value":"V2.0"}]}}
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
   * The API status or POP error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The component mapping for the product specifications, where the key is the component code.
   * 
   * @example
   * {"deploy_area":{"Code":"deploy_area","Name":"Deployment region","ModuleAttrStatus":1,"Properties":{"deploy_area":{"Code":"deploy_area","Name":"Deployment region","Value":"HongKong","Values":[{"Value":"HongKong","Name":"China (Hong Kong)"}]}}}}
   */
  components?: { [key: string]: ModuleNextComponentsValue };
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * docs
   */
  name?: string;
  /**
   * @remarks
   * The property mapping for the product specifications, where the key is the property code.
   * 
   * @example
   * {"version":{"Code":"version","Values":[{"Value":"V2.0"}]}}
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
   * The current page number.
   * 
   * @example
   * 12
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The request results.
   */
  data?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData[];
  /**
   * @remarks
   * The next feature ID.
   */
  next?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext;
  /**
   * @remarks
   * Indicates whether a next page exists.
   * 
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is set to **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is set to **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
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
   * The details about the access denial.
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
   * The application name.
   * 
   * @example
   * or
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
   * The dynamic error message used to replace `%s` in the error message returned in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
   * The maximum number of results to return per query. Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule;
  /**
   * @remarks
   * The token used to start the next query. This value is empty if there are no more results.
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

