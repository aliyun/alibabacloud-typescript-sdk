import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLCollectorPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the SQL Explorer (SQL Audit) feature. Valid values:
     * * **Enable**: Enabled.
     * * **Disabled**: Disabled.
     *
     * @example
     * Enable
     */
    SQLCollectorStatus?: string;
    /**
     * @remarks
     * A reserved parameter.
     *
     * @example
     * 0
     */
    storagePeriod?: number;
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
