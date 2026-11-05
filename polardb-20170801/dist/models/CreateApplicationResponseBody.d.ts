import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationResponseBodyComponents extends $dara.Model {
    /**
     * @remarks
     * The subcomponent ID.
     *
     * @example
     * pac-********************
     */
    componentId?: string;
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
export declare class CreateApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-********************
     */
    applicationId?: string;
    /**
     * @remarks
     * The list of subcomponents.
     */
    components?: CreateApplicationResponseBodyComponents[];
    /**
     * @remarks
     * The application description.
     *
     * @example
     * myapp
     */
    description?: string;
    /**
     * @remarks
     * The generated order ID.
     *
     * @example
     * 2148126708*****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the resources are sufficient. This parameter is returned only when DryRun is set to true.
     *
     * @example
     * true
     */
    resourceAvailable?: boolean;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-********************
     */
    resourceGroupId?: string;
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
