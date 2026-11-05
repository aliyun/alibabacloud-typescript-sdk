import * as $dara from '@darabonba/typescript';
export declare class CreateTempDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 069EB9B1-DE12-54B9-8C20-822****
     */
    requestId?: string;
    /**
     * @remarks
     * The temporary instance ID.
     *
     * @example
     * sub16****_rm-bp13****
     */
    tempDBInstanceId?: string;
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
