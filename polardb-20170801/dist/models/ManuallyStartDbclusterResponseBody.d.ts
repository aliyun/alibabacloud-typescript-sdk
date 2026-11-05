import * as $dara from '@darabonba/typescript';
export declare class ManuallyStartDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 73A85BAF-1039-4CDE-A83F-1A140F******
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
