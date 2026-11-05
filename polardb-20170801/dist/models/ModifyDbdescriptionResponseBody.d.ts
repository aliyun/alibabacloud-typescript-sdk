import * as $dara from '@darabonba/typescript';
export declare class ModifyDBDescriptionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5F295AAB-B599-4F0E-96D0-DBFAB3******
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
