import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily extends $dara.Model {
    instanceTypeFamilyDesc?: string;
    instanceTypeFamilyId?: string;
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
export declare class DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies extends $dara.Model {
    instanceTypeFamily?: DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily[];
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
export declare class DescribeRCInstanceTypeFamiliesResponseBody extends $dara.Model {
    instanceTypeFamilies?: DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies;
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
