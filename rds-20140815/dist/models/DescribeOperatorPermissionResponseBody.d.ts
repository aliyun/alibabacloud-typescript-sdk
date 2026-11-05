import * as $dara from '@darabonba/typescript';
export declare class DescribeOperatorPermissionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The effective period of the authorization. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
     *
     * @example
     * 2026-10-12T02:27:04Z
     */
    createdTime?: string;
    /**
     * @remarks
     * The time when the authorization expires. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
     *
     * @example
     * 2030-01-01T11:58:17Z
     */
    expiredTime?: string;
    /**
     * @remarks
     * The types of permissions that are granted. Valid values:
     * - **Control**: configuration permissions. Allows you to view and modify instance configurations.
     * - **Data**: database permissions. Allows you to view table schemas, indexes, and SQL statements.
     *
     * @example
     * Control,Data
     */
    privileges?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 4C3535DC-743E-505A-B4F6-ABC***75C3
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
