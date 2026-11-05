import * as $dara from '@darabonba/typescript';
export declare class ModifyActionEventPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the historical events feature. Valid values:
     * * **True**
     * * **False**
     *
     * This parameter is required.
     *
     * @example
     * True
     */
    enableEventLog?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call DescribeRegions to query the available regions.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
