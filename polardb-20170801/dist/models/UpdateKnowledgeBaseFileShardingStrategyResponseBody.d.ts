import * as $dara from '@darabonba/typescript';
export declare class UpdateKnowledgeBaseFileShardingStrategyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 019F7F29-BF69-1734-AE5A-02D391385BAC
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
