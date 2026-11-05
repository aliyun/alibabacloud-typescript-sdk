import * as $dara from '@darabonba/typescript';
export declare class ValidateAgentCodePackageFromOssRequestBody extends $dara.Model {
    /**
     * @remarks
     * The name of the source OSS bucket.
     *
     * This parameter is required.
     *
     * @example
     * my-agent-bucket
     */
    ossBucketName?: string;
    /**
     * @remarks
     * The full object key of the source code package.
     *
     * This parameter is required.
     *
     * @example
     * packages/main.zip
     */
    ossObjectName?: string;
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
export declare class ValidateAgentCodePackageFromOssRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     *
     * This parameter is required.
     */
    body?: ValidateAgentCodePackageFromOssRequestBody;
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
