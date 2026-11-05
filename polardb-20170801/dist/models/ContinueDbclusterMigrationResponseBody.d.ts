import * as $dara from '@darabonba/typescript';
export declare class ContinueDBClusterMigrationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * D2056BBE-FF76-5825-AB63-5CB1ABB46218
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
