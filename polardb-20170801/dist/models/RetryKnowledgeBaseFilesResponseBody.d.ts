import * as $dara from '@darabonba/typescript';
export declare class RetryKnowledgeBaseFilesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * AclProjectionNotFound
     */
    errorCode?: string;
    /**
     * @remarks
     * The cause of the failure.
     *
     * @example
     * No active ACL projection exists for the IM document
     */
    errorMessage?: string;
    /**
     * @remarks
     * The file ID.
     *
     * @example
     * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
     */
    fileId?: string;
    /**
     * @remarks
     * The request result. Valid values:
     *
     * - **true**: The request is successful.
     * - **false**: The request failed.
     *
     * @example
     * false
     */
    success?: boolean;
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
export declare class RetryKnowledgeBaseFilesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The number of failed records.
     *
     * @example
     * 0
     */
    failedCount?: number;
    /**
     * @remarks
     * The list of retry results.
     */
    items?: RetryKnowledgeBaseFilesResponseBodyItems[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CED079B7-A408-41A1-BFF1-EC608E******
     */
    requestId?: string;
    /**
     * @remarks
     * The number of successful records.
     *
     * @example
     * 1
     */
    succeededCount?: number;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 1
     */
    totalCount?: number;
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
