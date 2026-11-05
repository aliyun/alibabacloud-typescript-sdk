import * as $dara from '@darabonba/typescript';
export declare class DescribeRCClustersRequest extends $dara.Model {
    profile?: string;
    regionId?: string;
    vpcId?: string;
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
