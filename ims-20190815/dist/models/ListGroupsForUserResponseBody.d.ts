import * as $dara from '@darabonba/typescript';
export declare class ListGroupsForUserResponseBodyGroupsGroup extends $dara.Model {
    comments?: string;
    displayName?: string;
    groupId?: string;
    groupName?: string;
    joinDate?: string;
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
export declare class ListGroupsForUserResponseBodyGroups extends $dara.Model {
    group?: ListGroupsForUserResponseBodyGroupsGroup[];
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
export declare class ListGroupsForUserResponseBody extends $dara.Model {
    groups?: ListGroupsForUserResponseBodyGroups;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7158A935-FB5E-49A7-8E52-FDA5B2B67247
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
