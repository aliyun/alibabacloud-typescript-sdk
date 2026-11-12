import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawAgentFileResponseBodyFile extends $dara.Model {
    /**
     * @remarks
     * The file content.
     *
     * @example
     * You are a helpful assistant.
     */
    content?: string;
    /**
     * @remarks
     * Indicates whether the file is missing.
     *
     * @example
     * false
     */
    missing?: boolean;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * SOUL.md
     */
    name?: string;
    /**
     * @remarks
     * The file path.
     *
     * @example
     * /home/node/.openclaw/workspace-main/SOUL.md
     */
    path?: string;
    /**
     * @remarks
     * The file size in bytes.
     *
     * @example
     * 1024
     */
    size?: number;
    /**
     * @remarks
     * The last updated timestamp in milliseconds.
     *
     * @example
     * 1716000000000
     */
    updatedAtMs?: number;
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
export declare class DescribePolarClawAgentFileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The PolarClaw agent ID.
     *
     * @example
     * main
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The file details.
     */
    file?: DescribePolarClawAgentFileResponseBodyFile;
    /**
     * @remarks
     * The response message.
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
     * F45FFACC-xxx
     */
    requestId?: string;
    /**
     * @remarks
     * The working directory path.
     *
     * @example
     * /home/node/.openclaw/workspace-main
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
