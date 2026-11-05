import * as $dara from '@darabonba/typescript';
export declare class CancelActiveOperationTasksRequest extends $dara.Model {
    /**
     * @remarks
     * The list of IDs for batch cancellation. Separate multiple IDs with commas (,). Specify no more than 25 IDs at a time.
     *
     * This parameter is required.
     *
     * @example
     * 188****,188****,188****
     */
    ids?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
