import * as $dara from '@darabonba/typescript';
export declare class UpdateGroupResponseBodyGroup extends $dara.Model {
    /**
     * @remarks
     * The comments.
     *
     * @example
     * Test team
     */
    comments?: string;
    /**
     * @remarks
     * The creation time.
     *
     * Format: RFC 3339 (UTC). Example: 2020-10-19T16:15:17Z.
     *
     * @example
     * 2020-10-19T16:15:17Z
     */
    createDate?: string;
    /**
     * @remarks
     * The display name of the user group.
     *
     * @example
     * Test-Team
     */
    displayName?: string;
    /**
     * @remarks
     * The ID of the user group.
     *
     * @example
     * 740317625433843****
     */
    groupId?: string;
    /**
     * @remarks
     * The name of the user group.
     *
     * @example
     * Test-Team
     */
    groupName?: string;
    /**
     * @remarks
     * The update time.
     *
     * Format: RFC 3339 (UTC). Example: 2020-10-20T03:44:27Z.
     *
     * @example
     * 2020-10-20T03:44:27Z
     */
    updateDate?: string;
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
export declare class UpdateGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The user group information.
     */
    group?: UpdateGroupResponseBodyGroup;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDA656E3-3CE9-4A03-A8A3-B42A0C3C3287
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
