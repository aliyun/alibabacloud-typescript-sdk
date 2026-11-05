import * as $dara from '@darabonba/typescript';
export declare class GrantOperatorPermissionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 842B73C8-5776-4BD9-9872-69C8C46DD7D3
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
