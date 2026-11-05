import * as $dara from '@darabonba/typescript';
export declare class OperateApplicationRequest extends $dara.Model {
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
     * The operation type. Valid values:
     *
     * * **restart**: restart
     * * **stop**: stop
     * * **start**: start.
     *
     * @example
     * restart
     */
    operation?: string;
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
