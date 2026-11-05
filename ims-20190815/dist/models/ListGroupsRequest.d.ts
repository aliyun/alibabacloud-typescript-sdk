import * as $dara from '@darabonba/typescript';
export declare class ListGroupsRequest extends $dara.Model {
    /**
     * @remarks
     * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
     *
     * Valid values: 1 to 100. Default value: 100.
     *
     * @example
     * 100
     */
    maxItems?: number;
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
