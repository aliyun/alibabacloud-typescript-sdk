import * as $dara from '@darabonba/typescript';
export declare class ModifyHASwitchConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B6AE1448-D846-4831-B1C7-CFF3E99D5470
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
