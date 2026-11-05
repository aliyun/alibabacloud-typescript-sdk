import * as $dara from '@darabonba/typescript';
export declare class DescribeRCNetworkInterfacesRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * rc-m5sc1271fv344a1r****
     */
    instanceId?: string;
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
