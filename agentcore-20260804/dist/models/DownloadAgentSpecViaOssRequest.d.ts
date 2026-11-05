import * as $dara from '@darabonba/typescript';
export declare class DownloadAgentSpecViaOssRequest extends $dara.Model {
    /**
     * @remarks
     * The version number. If you do not specify this parameter, the version associated with the latest tag is downloaded.
     *
     * @example
     * 1.0.0
     */
    agentSpecVersion?: string;
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
