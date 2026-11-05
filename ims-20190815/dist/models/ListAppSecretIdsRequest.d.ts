import * as $dara from '@darabonba/typescript';
export declare class ListAppSecretIdsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
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
