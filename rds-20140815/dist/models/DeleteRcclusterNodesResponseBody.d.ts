import * as $dara from '@darabonba/typescript';
export declare class DeleteRCClusterNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7E0970A1-0434-5C83-B560-613EBA11B525
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 238028563
     */
    taskId?: string;
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
