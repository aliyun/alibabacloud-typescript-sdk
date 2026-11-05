import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeSpaceAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge space.
     *
     * This parameter is required.
     *
     * @example
     * pks-xxxx
     */
    knowledgeSpaceId?: string;
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
