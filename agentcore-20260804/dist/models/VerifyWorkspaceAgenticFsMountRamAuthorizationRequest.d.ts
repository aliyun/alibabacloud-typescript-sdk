import * as $dara from '@darabonba/typescript';
export declare class VerifyWorkspaceAgenticFsMountRamAuthorizationRequest extends $dara.Model {
    /**
     * @remarks
     * The domain name of the target AccessPoint, obtained from the DomainName field of NAS ListAccessPoints. Do not include the protocol, port, or path.
     *
     * This parameter is required.
     *
     * @example
     * ap-0123456789abcdef0.0123456789-vlm36.cn-hangzhou.nas.aliyuncs.com
     */
    server?: string;
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
