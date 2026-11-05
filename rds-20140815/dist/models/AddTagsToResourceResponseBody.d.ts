import * as $dara from '@darabonba/typescript';
export declare class AddTagsToResourceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
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
