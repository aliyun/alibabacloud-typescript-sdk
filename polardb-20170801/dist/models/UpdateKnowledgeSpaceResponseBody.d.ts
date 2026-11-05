import * as $dara from '@darabonba/typescript';
export declare class UpdateKnowledgeSpaceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge space.
     *
     * @example
     * pks-xxxxxx
     */
    knowledgeSpaceId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CD35F3-F3-44CA-AFFF-BAF869******
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the asynchronous workflow task. This parameter is empty when no actual model changes occur.
     *
     * @example
     * 52*****03
     */
    taskId?: number;
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
