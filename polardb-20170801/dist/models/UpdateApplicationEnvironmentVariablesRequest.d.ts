import * as $dara from '@darabonba/typescript';
export declare class UpdateApplicationEnvironmentVariablesRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the update. The default value is true.
     *
     * @example
     * true
     */
    restart?: boolean;
    /**
     * @remarks
     * A mapping from environment variable names to values.
     *
     * @example
     * {
     *     "ENV_TEST": "test-value"
     * }
     */
    variables?: {
        [key: string]: any;
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
