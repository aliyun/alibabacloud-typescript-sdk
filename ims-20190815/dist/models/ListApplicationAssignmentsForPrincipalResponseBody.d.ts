import * as $dara from '@darabonba/typescript';
export declare class ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo extends $dara.Model {
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
export declare class ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment extends $dara.Model {
    applicationAssignmentInfo?: ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo[];
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
export declare class ListApplicationAssignmentsForPrincipalResponseBody extends $dara.Model {
    applicationAssignment?: ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment;
    /**
     * @remarks
     * The maximum number of entries per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * This parameter is returned only when the results are truncated. To retrieve the subsequent results, use NextToken in the next call.
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
