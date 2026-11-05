import * as $dara from '@darabonba/typescript';
export declare class DescribeVSwitchListResponseBodyVSwitches extends $dara.Model {
    availableIpAddressCount?: string;
    cidrBlock?: string;
    description?: string;
    gmtCreate?: string;
    isDefault?: string;
    izNo?: string;
    shareType?: string;
    status?: string;
    vSwitchId?: string;
    vSwitchName?: string;
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
export declare class DescribeVSwitchListResponseBody extends $dara.Model {
    pageNumber?: number;
    pageSize?: number;
    requestId?: string;
    totalCount?: number;
    vSwitches?: DescribeVSwitchListResponseBodyVSwitches[];
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
