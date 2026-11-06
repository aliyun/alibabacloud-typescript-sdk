import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationPromptsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the prompt is enabled.
     *
     * @example
     * 1
     */
    promptEnabled?: number;
    /**
     * @remarks
     * The prompt ID.
     *
     * @example
     * papt-58z96zl691otf356o4
     */
    promptId?: string;
    /**
     * @remarks
     * The prompt name.
     *
     * @example
     * prompt name
     */
    promptName?: string;
    /**
     * @remarks
     * The prompt type.
     *
     * @example
     * DELETE_RELATIONS_SYSTEM_PROMPT
     */
    promptType?: string;
    /**
     * @remarks
     * The prompt content.
     *
     * @example
     * prompt value
     */
    promptValue?: string;
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
export declare class DescribeApplicationPromptsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list.
     */
    items?: DescribeApplicationPromptsResponseBodyItems[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 10
     */
    totalRecordCount?: string;
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
