import * as $dara from '@darabonba/typescript';
export declare class RemoveTagsFromResourceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * AE00ACCD-1CF9-4920-9BB9-0175EFF43405
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
