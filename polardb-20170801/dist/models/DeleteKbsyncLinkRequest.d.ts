import * as $dara from '@darabonba/typescript';
export declare class DeleteKBSyncLinkRequest extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge base. You can obtain it from the response of the CreateKnowledgeBase operation.
     *
     * This parameter is required.
     *
     * @example
     * pkb-xxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The ID of the synchronization link to delete. You can obtain it from the response of the CreateKBSyncLink operation.
     *
     * This parameter is required.
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
