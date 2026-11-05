import * as $dara from '@darabonba/typescript';
export declare class DeletePolarOSSAuthorizedAccountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The updated list of RAM role ARNs, separated by commas.
     *
     * @example
     * arn:sts::123456:assumed-role/myrole/*
     */
    authorizedUserArnIds?: string;
    /**
     * @remarks
     * The updated list of UIDs, separated by commas.
     *
     * @example
     * 1234567890,9876543210
     */
    authorizedUserIds?: string;
    /**
     * @remarks
     * The cold storage instance ID.
     *
     * @example
     * pfs-xxxxxxxxxxxxxxxxx
     */
    pfsInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F45FFACC-xxx
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
