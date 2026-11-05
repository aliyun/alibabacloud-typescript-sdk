import * as $dara from '@darabonba/typescript';
export declare class GenerateCredentialReportResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * BBCCA90A-A1F0-4B16-B355-692247197805
     */
    requestId?: string;
    /**
     * @remarks
     * The generation status of the user credential report. Valid values:
     *
     * - STARTED: The system starts to generate the user credential report.
     *
     * - INPROGRESS: The user credential report is being generated.
     *
     * - COMPLETED: The user credential report is generated.
     *
     * @example
     * STARTED
     */
    state?: string;
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
