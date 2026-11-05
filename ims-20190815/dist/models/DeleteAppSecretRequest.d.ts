import * as $dara from '@darabonba/typescript';
export declare class DeleteAppSecretRequest extends $dara.Model {
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
    /**
     * @remarks
     * The ID of the application secret.
     *
     * This parameter is required.
     *
     * @example
     * 2efd5004-005c-4f05-83c6-5b1dd176****
     */
    appSecretId?: string;
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
