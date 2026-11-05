import * as $dara from '@darabonba/typescript';
export declare class ListPredefinedScopesRequest extends $dara.Model {
    /**
     * @remarks
     * The type of the application. Valid values:
     *
     * - WebApp
     *
     * - NativeApp
     *
     * - ServerApp
     *
     * If this parameter is empty, the permissions on all types of applications are queried.
     *
     * @example
     * WebApp
     */
    appType?: string;
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
