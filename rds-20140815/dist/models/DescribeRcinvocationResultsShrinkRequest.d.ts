import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInvocationResultsShrinkRequest extends $dara.Model {
    commandId?: string;
    /**
     * @example
     * PlainText
     */
    contentEncoding?: string;
    includeHistory?: boolean;
    instanceId?: string;
    invokeId?: string;
    /**
     * @example
     * Running
     */
    invokeRecordStatus?: string;
    maxResults?: number;
    nextToken?: string;
    /**
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    resourceGroupId?: string;
    tagShrink?: string;
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
