import * as $dara from '@darabonba/typescript';
export declare class DescribeRCSecurityGroupPermissionRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    /**
     * @remarks
     * This parameter is required.
     */
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
