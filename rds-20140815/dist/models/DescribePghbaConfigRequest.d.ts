import * as $dara from '@darabonba/typescript';
export declare class DescribePGHbaConfigRequest extends $dara.Model {
    clientToken?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceGroupId?: string;
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
