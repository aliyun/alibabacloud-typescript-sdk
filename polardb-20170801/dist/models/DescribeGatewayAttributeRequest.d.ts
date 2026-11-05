import * as $dara from '@darabonba/typescript';
export declare class DescribeGatewayAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the gateway instance. Example: pg-xxxxxxx.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
