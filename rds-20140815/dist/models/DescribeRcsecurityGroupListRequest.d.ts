import * as $dara from '@darabonba/typescript';
export declare class DescribeRCSecurityGroupListRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    securityGroupId?: string;
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
