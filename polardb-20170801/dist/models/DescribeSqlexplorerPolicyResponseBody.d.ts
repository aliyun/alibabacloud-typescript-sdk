import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLExplorerPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3655211B-4D74-4E13-91E6-FF2AFE******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the SQL Explorer feature is enabled. Valid values:
     * * **Enable**: Enabled.
     * * **Disabled**: Disabled.
     *
     * @example
     * Enable
     */
    SQLCollectorStatus?: string;
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
