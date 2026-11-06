import * as $dara from '@darabonba/typescript';
export declare class DeleteModelConnectionRequest extends $dara.Model {
    /**
     * @remarks
     * The client token used for idempotence. This parameter is not currently supported.
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
