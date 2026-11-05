import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceTypesShrinkRequest extends $dara.Model {
    commodityCode?: string;
    engine?: string;
    instanceTypeShrink?: string;
    instanceTypeFamily?: string;
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
