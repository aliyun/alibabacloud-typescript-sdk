import * as $dara from '@darabonba/typescript';
export declare class DeleteModelRequest extends $dara.Model {
    /**
     * @remarks
     * The client token for idempotence. Not currently supported.
     *
     * @example
     * client-token-1
     */
    clientToken?: string;
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
