import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationServerlessConfResponseBodyServerlessConfItems extends $dara.Model {
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
     * The maximum scaling capacity for a single node. Valid values: 0 PCU to 16 PCU.
     *
     * @example
     * 16
     */
    scaleMax?: string;
    /**
     * @remarks
     * The minimum scaling capacity for a single node, measured in PolarDB Capacity Units (PCU). Valid values: 0 PCU to 16 PCU.
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
export declare class DescribeApplicationServerlessConfResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The list of serverless configurations.
     */
    serverlessConfItems?: DescribeApplicationServerlessConfResponseBodyServerlessConfItems[];
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
