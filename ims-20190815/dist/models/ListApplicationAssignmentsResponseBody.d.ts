import * as $dara from '@darabonba/typescript';
export declare class ListApplicationAssignmentsResponseBodyApplicationAssignmentApplicationAssignmentInfo extends $dara.Model {
    appId?: string;
    createTime?: string;
    principalName?: string;
    principalType?: string;
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
export declare class ListApplicationAssignmentsResponseBodyApplicationAssignment extends $dara.Model {
    applicationAssignmentInfo?: ListApplicationAssignmentsResponseBodyApplicationAssignmentApplicationAssignmentInfo[];
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
export declare class ListApplicationAssignmentsResponseBody extends $dara.Model {
    applicationAssignment?: ListApplicationAssignmentsResponseBodyApplicationAssignment;
    /**
     * @remarks
     * The maximum number of items per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * This parameter is returned only when the response is truncated. To retrieve the remaining content in subsequent API calls, use the NextToken value.
     *
     * @example
     * caeba0bbb2be03f84eb48b699f0a****
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
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
