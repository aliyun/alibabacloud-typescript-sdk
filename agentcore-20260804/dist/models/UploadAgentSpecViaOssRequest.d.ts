import * as $dara from '@darabonba/typescript';
export declare class UploadAgentSpecViaOssRequestBody extends $dara.Model {
    /**
     * @remarks
     * The name of the OSS object, including the full path.
     *
     * This parameter is required.
     *
     * @example
     * agentspec/export/user1/ns1/2024-01-01/uuid/123456.zip
     */
    ossObjectName?: string;
    /**
     * @remarks
     * Specifies whether to overwrite the existing draft. Default value: false.
     *
     * @example
     * false
     */
    overwrite?: boolean;
    /**
     * @remarks
     * Specifies whether to publish and bring the agent online immediately after the upload. Default value: false.
     *
     * @example
     * false
     */
    publish?: boolean;
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
export declare class UploadAgentSpecViaOssRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UploadAgentSpecViaOssRequestBody;
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
