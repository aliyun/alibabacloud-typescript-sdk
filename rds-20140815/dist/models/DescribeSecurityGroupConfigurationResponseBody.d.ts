import * as $dara from '@darabonba/typescript';
export declare class DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
    networkType?: string;
    regionId?: string;
    securityGroupId?: string;
    securityGroupName?: string;
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
export declare class DescribeSecurityGroupConfigurationResponseBodyItems extends $dara.Model {
    ecsSecurityGroupRelation?: DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation[];
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
export declare class DescribeSecurityGroupConfigurationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk****
     */
    DBInstanceName?: string;
    items?: DescribeSecurityGroupConfigurationResponseBodyItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 87BDAE8C-ACB0-4A26-BBCC-7D1DD31D630D
     */
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
