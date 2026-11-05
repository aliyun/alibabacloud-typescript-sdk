import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationServerlessConfRequestServerlessConfList extends $dara.Model {
    /**
     * @remarks
     * The type of the application sub-component.
     *
     * For Supabase, valid values are:
     *
     * - gateway
     *
     * - backend
     *
     * @example
     * gateway
     */
    componentType?: string;
    /**
     * @remarks
     * The maximum number of PCUs for a single node. Valid values: 0 to 16.
     *
     * @example
     * 16
     */
    scaleMax?: string;
    /**
     * @remarks
     * The minimum number of PolarDB Capacity Units (PCUs) for a single node. Valid values: 0 to 16.
     *
     * @example
     * 1
     */
    scaleMin?: string;
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
export declare class ModifyApplicationServerlessConfRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The list of Serverless configurations.
     *
     * This parameter is required.
     */
    serverlessConfList?: ModifyApplicationServerlessConfRequestServerlessConfList[];
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
