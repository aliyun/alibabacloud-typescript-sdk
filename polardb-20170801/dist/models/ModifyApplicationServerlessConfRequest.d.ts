import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationServerlessConfRequestServerlessConfList extends $dara.Model {
    /**
     * @remarks
     * The type of the application subcomponent. For supabase, valid values:
     *
     * - gateway
     * - backend
     *
     * @example
     * gateway
     */
    componentType?: string;
    /**
     * @remarks
     * The upper limit of scaling per node. Valid values: 0 to 16 PCUs.
     *
     * @example
     * 16
     */
    scaleMax?: string;
    /**
     * @remarks
     * The lower limit of scaling per node. Valid values: 0 to 16 PCUs.
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
     * The serverless configuration list.
     *
     * This parameter is required.
     *
     * @example
     * []
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
