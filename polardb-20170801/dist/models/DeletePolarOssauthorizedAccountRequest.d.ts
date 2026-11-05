import * as $dara from '@darabonba/typescript';
export declare class DeletePolarOSSAuthorizedAccountRequest extends $dara.Model {
    /**
     * @remarks
     * The list of authorized accounts to delete, separated by commas. UIDs and RAM role ARNs can be passed in together.
     *
     * This parameter is required.
     *
     * @example
     * 1234567890,acs:ram::123456:role/myrole
     */
    authorizedUserIds?: string;
    /**
     * @remarks
     * The ID of the PolarDB cluster.
     *
     * @example
     * pc-xxxxxxxxxxxxxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The cold storage instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-xxxxxxxxxxxxxxxxx
     */
    pfsInstanceId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
