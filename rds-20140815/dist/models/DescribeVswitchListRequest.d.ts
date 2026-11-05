import * as $dara from '@darabonba/typescript';
export declare class DescribeVSwitchListRequest extends $dara.Model {
    pageNumber?: string;
    pageSize?: string;
    regionId?: string;
    vSwitchIds?: string[];
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
