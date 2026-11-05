import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterApiKeysRequest extends $dara.Model {
    /**
     * @remarks
     * The model space ID.
     *
     * @example
     * pms-xxx
     */
    modelSpaceName?: string;
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
