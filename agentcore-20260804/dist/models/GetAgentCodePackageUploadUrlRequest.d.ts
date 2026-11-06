import * as $dara from '@darabonba/typescript';
export declare class GetAgentCodePackageUploadUrlRequestBody extends $dara.Model {
    /**
     * @remarks
     * The name of the code package file.
     *
     * This parameter is required.
     *
     * @example
     * main.zip
     */
    fileName?: string;
    /**
     * @remarks
     * The declared compressed size of the code package.
     *
     * This parameter is required.
     *
     * @example
     * 123
     */
    fileSize?: number;
    /**
     * @remarks
     * The format of the code package.
     *
     * This parameter is required.
     *
     * @example
     * zip
     */
    format?: string;
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
export declare class GetAgentCodePackageUploadUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     *
     * This parameter is required.
     */
    body?: GetAgentCodePackageUploadUrlRequestBody;
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
