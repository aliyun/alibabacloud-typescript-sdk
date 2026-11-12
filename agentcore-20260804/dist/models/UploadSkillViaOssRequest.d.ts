import * as $dara from '@darabonba/typescript';
export declare class UploadSkillViaOssRequestBody extends $dara.Model {
    /**
     * @remarks
     * The commit message.
     *
     * @example
     * Update documentation
     */
    commitMsg?: string;
    /**
     * @remarks
     * The name of the OSS object.
     *
     * This parameter is required.
     *
     * @example
     * imports/example.zip
     */
    ossObjectName?: string;
    /**
     * @remarks
     * Specifies whether to overwrite an existing skill. Default value: false.
     *
     * @example
     * false
     */
    overwrite?: boolean;
    /**
     * @remarks
     * Specifies the target version number for the upload. This parameter is optional and serves as a fallback when no version information is included in the ZIP package.
     *
     * @example
     * 1.0.0
     */
    targetVersion?: string;
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
export declare class UploadSkillViaOssRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UploadSkillViaOssRequestBody;
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
