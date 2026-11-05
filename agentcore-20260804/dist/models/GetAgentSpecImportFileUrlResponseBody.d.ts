import * as $dara from '@darabonba/typescript';
export declare class GetAgentSpecImportFileUrlResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The Content-Type used for the OSS PUT request.
     *
     * @example
     * application/zip
     */
    contentType?: string;
    /**
     * @remarks
     * The maximum number of bytes allowed for the upload.
     *
     * @example
     * 10485760
     */
    maxSize?: string;
    /**
     * @remarks
     * The OSS object name.
     *
     * @example
     * imports/example.zip
     */
    ossObjectName?: string;
    /**
     * @remarks
     * The OSS presigned upload URL.
     *
     * @example
     * https://example.com/artifacts/example.zip
     */
    uploadUrl?: string;
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
export declare class GetAgentSpecImportFileUrlResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: GetAgentSpecImportFileUrlResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
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
