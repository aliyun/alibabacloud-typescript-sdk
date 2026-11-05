import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationParametersShrinkRequest extends $dara.Model {
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
     * A list of subcomponent IDs. If you specify this parameter, the operation returns the parameters and parameter templates for only these components.
     */
    componentIdListShrink?: string;
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
