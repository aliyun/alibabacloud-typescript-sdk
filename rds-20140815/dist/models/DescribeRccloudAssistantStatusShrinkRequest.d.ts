import * as $dara from '@darabonba/typescript';
export declare class DescribeRCCloudAssistantStatusShrinkRequest extends $dara.Model {
    instanceIdsShrink?: string;
    /**
     * @example
     * 10
     */
    maxResults?: number;
    nextToken?: string;
    /**
     * @example
     * Linux
     */
    OSType?: string;
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
