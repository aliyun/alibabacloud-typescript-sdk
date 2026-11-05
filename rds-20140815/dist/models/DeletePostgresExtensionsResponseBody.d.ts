import * as $dara from '@darabonba/typescript';
export declare class DeletePostgresExtensionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC
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
