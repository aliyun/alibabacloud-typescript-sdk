import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceDetailResponseBody extends $dara.Model {
    /**
     * @remarks
     * The activation state.
     *
     * @example
     * Invalid
     */
    activationState?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-bp6wjk5xxxxxxxxxx
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The license type.
     *
     * @example
     * Normal
     */
    licenseType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 06B220E2-EAC5-4DBE-A1FC-1B62DB6A****
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
