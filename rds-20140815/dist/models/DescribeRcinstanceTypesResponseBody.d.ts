import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
    cpuCoreCount?: number;
    /**
     * @example
     * 16
     */
    diskQuantity?: number;
    instanceTypeFamily?: string;
    instanceTypeId?: string;
    jumboFrameSupport?: boolean;
    memorySize?: number;
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
export declare class DescribeRCInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
    instanceType?: DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType[];
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
export declare class DescribeRCInstanceTypesResponseBody extends $dara.Model {
    instanceTypes?: DescribeRCInstanceTypesResponseBodyInstanceTypes;
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
