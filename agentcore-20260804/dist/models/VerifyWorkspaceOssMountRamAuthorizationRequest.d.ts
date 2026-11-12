import * as $dara from '@darabonba/typescript';
export declare class VerifyWorkspaceOssMountRamAuthorizationRequest extends $dara.Model {
    /**
     * @remarks
     * The OSS bucket name.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
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
