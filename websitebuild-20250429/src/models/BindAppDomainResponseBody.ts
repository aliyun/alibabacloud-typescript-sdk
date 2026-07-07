// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAppDomainResponseBodyModuleDnsConflictRecords extends $dara.Model {
  host?: string;
  recordType?: string;
  status?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      recordType: 'RecordType',
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      recordType: 'string',
      status: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAppDomainResponseBodyModuleDnsConflict extends $dara.Model {
  canAutoResolve?: boolean;
  hasConflict?: boolean;
  message?: string;
  records?: BindAppDomainResponseBodyModuleDnsConflictRecords[];
  static names(): { [key: string]: string } {
    return {
      canAutoResolve: 'CanAutoResolve',
      hasConflict: 'HasConflict',
      message: 'Message',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAutoResolve: 'boolean',
      hasConflict: 'boolean',
      message: 'string',
      records: { 'type': 'array', 'itemType': BindAppDomainResponseBodyModuleDnsConflictRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAppDomainResponseBodyModule extends $dara.Model {
  dnsConflict?: BindAppDomainResponseBodyModuleDnsConflict;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dnsConflict: 'DnsConflict',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsConflict: BindAppDomainResponseBodyModuleDnsConflict,
      success: 'boolean',
    };
  }

  validate() {
    if(this.dnsConflict && typeof (this.dnsConflict as any).validate === 'function') {
      (this.dnsConflict as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAppDomainResponseBody extends $dara.Model {
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
   * or
   */
  appName?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the **%s** placeholder in the **ErrMessage** response element.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
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
   * The data table module. Valid values:
   * 
   * - ABTest: experiment data table
   * 
   * - ExperimentTool: experiment tool table
   * 
   * - DataDiagnosis: data modeling diagnostics
   */
  module?: BindAppDomainResponseBodyModule;
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
   * SYSTEM.EROR
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
   * Indicates whether the request is synchronously processed.
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
      module: BindAppDomainResponseBodyModule,
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

