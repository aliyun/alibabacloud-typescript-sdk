import * as $dara from '@darabonba/typescript';
export declare class CheckRdsCustomInitRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @example
     * rg-bp67acfmxazb4p****
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * AliyunServiceRoleForRds
     */
    serviceLinkedRole?: string;
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
