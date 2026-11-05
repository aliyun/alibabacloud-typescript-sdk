import * as $dara from '@darabonba/typescript';
export declare class GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus extends $dara.Model {
    governanceItem?: string;
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
export declare class GetGovernanceReportStatusResponseBodyGovernanceItemsStatus extends $dara.Model {
    governanceItemStatus?: GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus[];
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
export declare class GetGovernanceReportStatusResponseBody extends $dara.Model {
    governanceItemsStatus?: GetGovernanceReportStatusResponseBodyGovernanceItemsStatus;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * F2CE9688-AA85-5F23-8C22-0EC23473405A
     */
    requestId?: string;
    /**
     * @remarks
     * The overall generation status of the report. Valid values:
     *
     * - Started: The report generation has started.
     *
     * - Progressing: The report is being generated.
     *
     * - Completed: The report has been generated.
     *
     * @example
     * Progressing
     */
    wholeReportStatus?: string;
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
