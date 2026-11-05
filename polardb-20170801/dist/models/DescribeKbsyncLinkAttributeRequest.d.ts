import * as $dara from '@darabonba/typescript';
export declare class DescribeKBSyncLinkAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge base.
     *
     * This parameter is required.
     *
     * @example
     * kb-123456
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The unique identifier of the synchronization link.
     *
     * This parameter is required.
     *
     * @example
     * pkbl-123456
     */
    linkId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
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
