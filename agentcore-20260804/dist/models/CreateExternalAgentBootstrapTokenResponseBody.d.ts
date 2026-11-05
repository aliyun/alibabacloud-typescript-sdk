import * as $dara from '@darabonba/typescript';
export declare class CreateExternalAgentBootstrapTokenResponseBodyDataCms extends $dara.Model {
    /**
     * @remarks
     * The CMS reporting endpoint.
     *
     * @example
     * https://public.example.com/apm/trace/opentelemetry
     */
    endpoint?: string;
    /**
     * @remarks
     * The license key used for CMS connection.
     *
     * @example
     * license-key
     */
    licenseKey?: string;
    /**
     * @remarks
     * The CMS workspace name.
     *
     * @example
     * cms-workspace
     */
    workspace?: string;
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
export declare class CreateExternalAgentBootstrapTokenResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The external agent ID.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The Bootstrap token used to onboard the external agent.
     *
     * @example
     * bootstrap-token
     */
    bootstrapToken?: string;
    /**
     * @remarks
     * The CMS configuration used to onboard the external agent.
     */
    cms?: CreateExternalAgentBootstrapTokenResponseBodyDataCms;
    /**
     * @remarks
     * The network type for onboarding. Valid values: INTRANET (internal network) and INTERNET (Internet).
     *
     * @example
     * INTERNET
     */
    networkType?: string;
    /**
     * @remarks
     * The fingerprint of the Bootstrap token.
     *
     * @example
     * fingerprint
     */
    tokenFingerprint?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1
     */
    workspaceId?: string;
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
export declare class CreateExternalAgentBootstrapTokenResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS when the operation is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The Bootstrap token and CMS configuration required to onboard the external agent.
     */
    data?: CreateExternalAgentBootstrapTokenResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 when the operation is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The result message of the request.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
