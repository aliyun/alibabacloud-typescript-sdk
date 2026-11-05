import * as $dara from '@darabonba/typescript';
export declare class GetGroupResponseBodyGroup extends $dara.Model {
    /**
     * @remarks
     * The comments.
     *
     * @example
     * Development team
     */
    comments?: string;
    /**
     * @remarks
     * The creation time. Format: RFC 3339 (UTC). Example: 2020-10-19T16:15:17Z.
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
     * Dev-Team
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
     * Dev-Team
     */
    groupName?: string;
    /**
     * @remarks
     * The update time. Format: RFC 3339 (UTC). Example: 2020-10-19T16:15:17Z.
     *
     * @example
     * 2020-10-19T16:15:17Z
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
export declare class GetGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The user group information.
     */
    group?: GetGroupResponseBodyGroup;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 86ECEC3C-7262-4C3C-94B4-A98F7CC1F060
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
