import * as $dara from '@darabonba/typescript';
export declare class ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
    networkType?: string;
    regionId?: string;
    securityGroupId?: string;
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
export declare class ModifySecurityGroupConfigurationResponseBodyItems extends $dara.Model {
    ecsSecurityGroupRelation?: ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation[];
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
export declare class ModifySecurityGroupConfigurationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceName?: string;
    items?: ModifySecurityGroupConfigurationResponseBodyItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8585861B-8F0D-4D17-9460-C42255EB10C0
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
