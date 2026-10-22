// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAppDomainResponseBodyModuleDnsConflictRecords extends $dara.Model {
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * www
   */
  host?: string;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * A
   */
  recordType?: string;
  /**
   * @remarks
   * The status of the conflicting DNS record. A value of ENABLE indicates that the record is enabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 192.0.2.1
   */
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
  /**
   * @remarks
   * Indicates whether automatic overwrite is supported. A value of true indicates the current Alibaba Cloud account, and a value of false indicates other accounts.
   */
  canAutoResolve?: boolean;
  /**
   * @remarks
   * Indicates whether a conflict exists.
   */
  hasConflict?: boolean;
  /**
   * @remarks
   * The user-facing prompt message. Different guidance text is generated based on the scenario.
   * 
   * @example
   * A conflicting DNS record (A 192.0.2.1) exists for the domain name www.example.com. Delete the conflicting record from your DNS provider and try again
   */
  message?: string;
  /**
   * @remarks
   * The list of conflicting DNS records. This reuses the existing AppDomainDnsRecordDTO.
   */
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
  /**
   * @remarks
   * The DNS conflict information. This parameter is returned when a conflict is detected during synchronous verification.
   */
  dnsConflict?: BindAppDomainResponseBodyModuleDnsConflict;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
   * The detailed reason why access was denied.
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
   * The dynamic error message, which is used to replace the **%s** placeholder in the **ErrMessage** response parameter.
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
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
   * The data table module.
   * 
   * - ABTest: experiment data table
   * 
   * - ExperimentTool: experiment tool table
   * 
   * - DataDiagnosis: data diagnostics
   */
  module?: BindAppDomainResponseBodyModule;
  /**
   * @remarks
   * The unique ID of the request.
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

