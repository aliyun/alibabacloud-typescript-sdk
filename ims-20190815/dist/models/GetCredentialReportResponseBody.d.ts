import * as $dara from '@darabonba/typescript';
export declare class GetCredentialReportResponseBody extends $dara.Model {
    /**
     * @remarks
     * The content of the user credential report. The content is Base64-encoded. After decoding, the content is in CSV format.
     *
     * @example
     * OVZWK4RMOVZW****
     */
    content?: string;
    /**
     * @remarks
     * The time when the user credential report was generated. The time is displayed in the RFC 3339 format in UTC. Example: 2020-10-19T15:06:52Z.
     *
     * @example
     * 2020-10-19T15:06:52Z
     */
    generatedTime?: string;
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     * - false
     *
     * @example
     * true
     */
    isTruncated?: string;
    /**
     * @remarks
     * The token used to retrieve the next set of results. This parameter takes effect only when IsTruncated is set to true.
     *
     * @example
     * EXAMPLE
     */
    nextToken?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 7A01826E-7601-44B0-B4DF-2B0C509836DE
     */
    requestId?: string;
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
