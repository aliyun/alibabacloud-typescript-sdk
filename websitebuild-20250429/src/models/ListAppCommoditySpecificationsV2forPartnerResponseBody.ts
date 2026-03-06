// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleNextComponentsValue } from "./ModuleNextComponentsValue";
import { ModuleNextPropertiesValue } from "./ModuleNextPropertiesValue";
import { ModuleDataComponentsValue } from "./ModuleDataComponentsValue";
import { ModuleDataPropertiesValue } from "./ModuleDataPropertiesValue";


export class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  components?: { [key: string]: ModuleDataComponentsValue };
  name?: string;
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
   * @example
   * OK
   */
  code?: string;
  components?: { [key: string]: ModuleNextComponentsValue };
  /**
   * @example
   * docs
   */
  name?: string;
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
   * @example
   * 12
   */
  currentPageNum?: number;
  data?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData[];
  next?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext;
  /**
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * False
   */
  prePage?: boolean;
  resultLimit?: boolean;
  /**
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
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
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule;
  /**
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

