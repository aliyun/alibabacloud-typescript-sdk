import * as $dara from '@darabonba/typescript';
export declare class ListUsersInRecycleBinRequest extends $dara.Model {
    /**
     * @remarks
     * The filter condition that is used to query information about a specified RAM user in the recycle bin.
     *
     * You must specify this parameter in the `UserPrincipalName eq <username>@<AccountAlias>.onaliyun.com` format.
     *
     * @example
     * UserPrincipalName eq test@example.onaliyun.com
     */
    filter?: string;
    /**
     * @remarks
     * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.
     *
     * Valid values: 1 to 100. Default value: 100.
     *
     * @example
     * 100
     */
    maxItems?: number;
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
