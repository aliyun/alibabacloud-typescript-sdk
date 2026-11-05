import * as $dara from '@darabonba/typescript';
export declare class ListGroupsResponseBodyGroupsGroup extends $dara.Model {
    comments?: string;
    createDate?: string;
    displayName?: string;
    groupId?: string;
    groupName?: string;
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
export declare class ListGroupsResponseBodyGroups extends $dara.Model {
    group?: ListGroupsResponseBodyGroupsGroup[];
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
export declare class ListGroupsResponseBody extends $dara.Model {
    groups?: ListGroupsResponseBodyGroups;
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 065527AA-2F2E-AD7C-7484-F2626CFE4934
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
