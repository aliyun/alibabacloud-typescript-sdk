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
     * The license key used for CMS access.
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
     * The managed agent ID.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The bootstrap token used for the managed agent onboarding.
     *
     * @example
     * bootstrap-token
     */
    bootstrapToken?: string;
    /**
     * @remarks
     * The CMS configuration used for the managed agent onboarding.
     */
    cms?: CreateExternalAgentBootstrapTokenResponseBodyDataCms;
    /**
     * @remarks
     * The network type for access. Valid values: INTRANET (internal network) and INTERNET (Internet).
     *
     * @example
     * INTERNET
     */
    networkType?: string;
    /**
     * @remarks
     * The fingerprint of the bootstrap token.
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
     * The business status code. A value of SUCCESS indicates success.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The bootstrap token and CMS configuration required for the managed agent onboarding.
     */
    data?: CreateExternalAgentBootstrapTokenResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. A value of 200 indicates success.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message about the request processing result.
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
