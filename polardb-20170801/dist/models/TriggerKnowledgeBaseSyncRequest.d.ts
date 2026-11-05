import * as $dara from '@darabonba/typescript';
export declare class TriggerKnowledgeBaseSyncRequest extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge base.
     *
     * This parameter is required.
     *
     * @example
     * pkb-xxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The synchronization link ID.
     *
     * @example
     * pkbl-xxxxx
     */
    linkId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
