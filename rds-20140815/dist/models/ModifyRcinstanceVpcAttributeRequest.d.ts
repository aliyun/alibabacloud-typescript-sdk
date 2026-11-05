import * as $dara from '@darabonba/typescript';
export declare class ModifyRCInstanceVpcAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * rc-u65p1qjg249t3a30738
     */
    instanceId?: string;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * vsw-bp1s5fnvk4gn3tw12****
     */
    vSwitchId?: string;
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
