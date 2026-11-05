import * as $dara from '@darabonba/typescript';
export declare class GetAppTokenServiceResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {\\"deliveryNodeName\\":\\"绑定域名及发布\\",\\"deliveryNodeStatus\\":\\"Finish\\",\\"deliveryOperatorRole\\":\\"Provider\\"}
     */
    extend?: string;
    /**
     * @remarks
     * trial,draft,live,refunded,expired,released
     *
     * @example
     * RUNNING
     */
    status?: string;
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
export declare class GetAppTokenServiceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access denied detail.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retry is allowed. Valid values:
     * - false: Retry is not allowed.
     * - true: Retry is allowed.
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
     * spring-cloud-b
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
     * The dynamic message. This parameter is not in use. Ignore this parameter.
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
     * The application module.
     */
    module?: GetAppTokenServiceResponseBodyModule;
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
     * The root error message.
     *
     * @example
     * 系统异常
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
