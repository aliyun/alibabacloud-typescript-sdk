// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleResultsValue } from "./ModuleResultsValue";


export class BatchCheckResourceMeasureResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all checks passed.
   */
  allPassed?: boolean;
  /**
   * @remarks
   * The check results for each resource, where the key is the resourceCode.
   */
  results?: { [key: string]: ModuleResultsValue };
  static names(): { [key: string]: string } {
    return {
      allPassed: 'AllPassed',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allPassed: 'boolean',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleResultsValue },
    };
  }

  validate() {
    if(this.results) {
      $dara.Model.validateMap(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckResourceMeasureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reasons for access denial.
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
   * The name of the app.
   * 
   * @example
   * watermark
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
   * The dynamic error message.
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
   * The returned object.
   */
  module?: BatchCheckResourceMeasureResponseBodyModule;
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
   * Specifies whether synchronous processing is used.
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
      module: BatchCheckResourceMeasureResponseBodyModule,
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

