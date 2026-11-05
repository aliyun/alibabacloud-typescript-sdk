import * as $dara from '@darabonba/typescript';
export declare class DescribeRdsResourceSettingsRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The resource position. Valid values:
     * - noticeBar: The notification bar.
     * - popUp: The pop-up window.
     *
     * This parameter is required.
     *
     * @example
     * noticeBar
     */
    resourceNiche?: string;
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
