import * as $dara from '@darabonba/typescript';
export declare class VerifyAgentCodePackageOssRamAuthorizationRequest extends $dara.Model {
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
