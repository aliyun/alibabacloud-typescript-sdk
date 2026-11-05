import * as $dara from '@darabonba/typescript';
export declare class DeleteDatabaseResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 07F6177E-6DE4-408A-BB4F-0723301340F3
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
