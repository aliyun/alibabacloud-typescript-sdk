import * as $dara from '@darabonba/typescript';
export declare class ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords extends $dara.Model {
    /**
     * @remarks
     * The activity code.
     *
     * @example
     * acwfradoj5u
     */
    activityCode?: string;
    /**
     * @remarks
     * The activity name.
     *
     * @example
     * IP segment filtering statistics
     */
    activityName?: string;
    /**
     * @remarks
     * The employee code.
     *
     * @example
     * 1234
     */
    employeeCode?: string;
    /**
     * @remarks
     * The failure reason.
     *
     * @example
     * SYSTEM_ERROR
     */
    failReason?: string;
    /**
     * @remarks
     * The issuance time. Format: YYYY-MM-DD.
     *
     * @example
     * 2025-06-01
     */
    issuanceTime?: string;
    /**
     * @remarks
     * The benefit snapshot in JSON format.
     *
     * @example
     * {}
     */
    offerSnapshot?: string;
    /**
     * @remarks
     * The record ID.
     *
     * @example
     * 5094
     */
    recordId?: string;
    /**
     * @remarks
     * The operation remark.
     *
     * @example
     * test
     */
    remark?: string;
    /**
     * @remarks
     * The issuance status.
     *
     * @example
     * FE_RUNNING
     */
    status?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 123241414
     */
    userId?: string;
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
export declare class ListPromotionOfferRecordsForPartnerResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The list of issuance records.
     */
    records?: ListPromotionOfferRecordsForPartnerResponseBodyModuleRecords[];
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 30
     */
    totalCount?: number;
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
export declare class ListPromotionOfferRecordsForPartnerResponseBody extends $dara.Model {
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
     * The application name. The application with this name is queried.
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
     * The dynamic error message. This message is used to replace the %s variable in the ErrMessage response parameter.
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
     * The number of entries per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response data.
     */
    module?: ListPromotionOfferRecordsForPartnerResponseBodyModule;
    /**
     * @remarks
     * The token for the next query. This parameter is empty if no more results exist.
     *
     * @example
     * test
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
     * The reserved parameter.
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
