import * as $dara from '@darabonba/typescript';
export declare class RestartDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2921D843-433A-5FB3-A03B-4EC093B219F8
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
