import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceKeywordsRequest extends $dara.Model {
    /**
     * @remarks
     * The type of the reserved keyword, which indicates whether the keyword is reserved for account names or database names. Valid values:
     *
     * - **account**
     *
     * - **database**
     *
     * > This parameter is required.
     *
     * @example
     * account
     */
    key?: string;
    ownerAccount?: string;
    ownerId?: number;
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
