import * as $dara from '@darabonba/typescript';
export declare class ListApplicationProvisionInfosRequest extends $dara.Model {
    /**
     * @remarks
     * The source type of the application. Valid values:
     *
     * - inner: applications from the current account.
     * - external: applications from other accounts.
     *
     * @example
     * external
     */
    sourceType?: string;
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
