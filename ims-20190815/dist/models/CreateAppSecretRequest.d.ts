import * as $dara from '@darabonba/typescript';
export declare class CreateAppSecretRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * 472457090344041****
     */
    appId?: string;
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
