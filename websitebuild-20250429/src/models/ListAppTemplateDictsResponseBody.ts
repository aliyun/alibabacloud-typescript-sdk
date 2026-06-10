// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplateDictsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Dictionary Code
   * 
   * @example
   * abc
   */
  dictCode?: string;
  /**
   * @remarks
   * Dictionary label
   * 
   * @example
   * label
   */
  dictLabel?: string;
  /**
   * @remarks
   * Enumeration of template dictionary types
   * 
   * @example
   * product_version
   */
  dictType?: string;
  /**
   * @remarks
   * Dictionary value
   * 
   * @example
   * abc
   */
  dictValue?: string;
  /**
   * @remarks
   * Indicates whether a template exists.
   */
  hasTemplates?: boolean;
  /**
   * @remarks
   * Sorting order. The default is descending.  
   * 
   * Enumeration values:  
   * 
   * ASC: ascending.  
   * 
   * DESC: descending.
   * 
   * @example
   * desc
   */
  sortOrder?: number;
  static names(): { [key: string]: string } {
    return {
      dictCode: 'DictCode',
      dictLabel: 'DictLabel',
      dictType: 'DictType',
      dictValue: 'DictValue',
      hasTemplates: 'HasTemplates',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dictCode: 'string',
      dictLabel: 'string',
      dictType: 'string',
      dictValue: 'string',
      hasTemplates: 'boolean',
      sortOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplateDictsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed reason why access was denied.
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
   * application name; queries the application with this name
   * 
   * @example
   * spring-cloud-b
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
   * dynamic error message used to replace the `%s` placeholder in the **ErrMessage** response parameter.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * faulty parameters
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
   * response Data
   */
  module?: ListAppTemplateDictsResponseBodyModule[];
  /**
   * @remarks
   * Token for the start of the next query. It is empty when there is no next query.
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
   * is processing synchronous
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
      module: { 'type': 'array', 'itemType': ListAppTemplateDictsResponseBodyModule },
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
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

