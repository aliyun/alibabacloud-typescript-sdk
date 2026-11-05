import * as $dara from '@darabonba/typescript';
export declare class ModifyCustinsResourceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6B5A6839-31A7-58D4-9F96-772BFAFD1CB5
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 507******
     */
    taskId?: number;
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
