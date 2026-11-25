import * as $dara from '@darabonba/typescript';
export declare class BindAppDomainResponseBodyModuleDnsConflictRecords extends $dara.Model {
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class BindAppDomainResponseBodyModuleDnsConflict extends $dara.Model {
    /**
     * @remarks
     * Indicates whether automatic overwrite is supported. A value of true indicates that the domain name belongs to the current Alibaba Cloud account, and a value of false indicates that it belongs to another account.
     */
    canAutoResolve?: boolean;
    /**
     * @remarks
     * Indicates whether a conflict exists.
     */
    hasConflict?: boolean;
    /**
     * @remarks
     * The user-facing prompt message, which generates different guidance text based on the scenario.
     *
     * @example
     * The domain name www.example.com has a conflicting DNS record (A 192.0.2.1). Delete the conflicting record from your DNS service provider and try again
     */
    message?: string;
    /**
     * @remarks
     * The list of conflicting DNS records. This reuses the existing AppDomainDnsRecordDTO.
     */
    records?: BindAppDomainResponseBodyModuleDnsConflictRecords[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class BindAppDomainResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The DNS conflict information, which is returned when a conflict is detected during synchronous verification.
     */
    dnsConflict?: BindAppDomainResponseBodyModuleDnsConflict;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * @example
     * true
     */
    success?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class BindAppDomainResponseBody extends $dara.Model {
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
     * The error code.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic error message, which is used to replace the **%s** in the **ErrMessage** error message of the response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the value of the request parameter **DtsJobId** is invalid.
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
     * The data table module.
     *
     * - ABTest: experiment data table
     *
     * - ExperimentTool: experiment tool table
     *
     * - DataDiagnosis: data diagnosis
     */
    module?: BindAppDomainResponseBodyModule;
    /**
     * @remarks
     * The unique identifier of the request.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
