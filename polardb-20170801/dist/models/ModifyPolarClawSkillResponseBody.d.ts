import * as $dara from '@darabonba/typescript';
export declare class ModifyPolarClawSkillResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The evaluation status.
     *
     * @example
     * 2
     */
    evaluateStatus?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
     */
    requestId?: string;
    /**
     * @remarks
     * The baseline risk details.
     *
     * @example
     * riskDetail
     */
    riskDetail?: string;
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
