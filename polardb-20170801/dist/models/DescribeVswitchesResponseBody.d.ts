import * as $dara from '@darabonba/typescript';
export declare class DescribeVSwitchesResponseBodyVSwitchs extends $dara.Model {
    availableIpAddressCount?: number;
    cidrBlock?: string;
    description?: string;
    isDefault?: boolean;
    izNo?: string;
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
export declare class DescribeVSwitchesResponseBody extends $dara.Model {
    pageNumber?: number;
    pageSize?: number;
    requestId?: string;
    totalCount?: number;
    vSwitchs?: DescribeVSwitchesResponseBodyVSwitchs[];
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
