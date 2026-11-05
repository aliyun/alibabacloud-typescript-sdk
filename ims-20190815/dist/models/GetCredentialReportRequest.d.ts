import * as $dara from '@darabonba/typescript';
export declare class GetCredentialReportRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of items to return. When the response is truncated because the maximum number of items is reached, the IsTruncated parameter is set to true.
     *
     * Valid values: 1 to 3501. Default value: 3501.
     *
     * @example
     * 1000
     */
    maxItems?: string;
    /**
     * @remarks
     * The token used to retrieve the next set of results when the response is truncated.
     *
     * @example
     * EXAMPLE
     */
    nextToken?: string;
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
