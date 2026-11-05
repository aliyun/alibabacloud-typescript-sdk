import * as $dara from '@darabonba/typescript';
export declare class DescribeVSwitchesRequest extends $dara.Model {
    dedicatedHostGroupId?: string;
    ownerAccount?: string;
    ownerId?: number;
    pageNumber?: number;
    pageSize?: number;
    regionId?: string;
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    vpcId?: string;
    zoneId?: string;
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
