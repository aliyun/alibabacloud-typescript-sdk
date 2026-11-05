import * as $dara from '@darabonba/typescript';
export declare class DeleteApplicationAssignmentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * ABA822EE-85C2-4418-9577-A1831FC8466D
     */
    requestId?: string;
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
