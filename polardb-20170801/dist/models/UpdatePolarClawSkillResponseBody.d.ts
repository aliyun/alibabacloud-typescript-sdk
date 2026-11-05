import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawSkillResponseBodyConfig extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the skill is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The environment variable configuration.
     */
    env?: {
        [key: string]: string;
    };
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
export declare class UpdatePolarClawSkillResponseBody extends $dara.Model {
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
     * The status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The updated skill configuration. Sensitive values are masked.
     */
    config?: UpdatePolarClawSkillResponseBodyConfig;
    /**
     * @remarks
     * The message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation is successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
    /**
     * @remarks
     * The skill identifier key.
     *
     * @example
     * alibacloud-rds-copilot
     */
    skillKey?: string;
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
