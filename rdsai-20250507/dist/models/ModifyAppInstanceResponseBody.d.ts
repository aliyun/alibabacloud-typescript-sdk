import * as $dara from '@darabonba/typescript';
export declare class ModifyAppInstanceResponseBodyComponents extends $dara.Model {
    /**
     * @remarks
     * The module status.
     *
     * @example
     * enable
     */
    status?: string;
    /**
     * @remarks
     * The module type.
     *
     * @example
     * supabase
     */
    type?: string;
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
export declare class ModifyAppInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    /**
     * @remarks
     * The list of modules.
     */
    components?: ModifyAppInstanceResponseBodyComponents[];
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
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
