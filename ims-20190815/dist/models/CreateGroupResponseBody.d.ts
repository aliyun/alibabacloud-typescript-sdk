import * as $dara from '@darabonba/typescript';
export declare class CreateGroupResponseBodyGroup extends $dara.Model {
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
     * The time when the user group was created.
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
     * The time when the user group was updated.
     *
     * Format: RFC 3339 (UTC). Example: 2020-10-19T16:15:17Z.
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
export declare class CreateGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The user group information.
     */
    group?: CreateGroupResponseBodyGroup;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3C38192B-7BF8-45DA-8F0A-E670EA51426C
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
