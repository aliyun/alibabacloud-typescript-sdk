import * as $dara from '@darabonba/typescript';
export declare class UploadSkillViaOssRequestBody extends $dara.Model {
    /**
     * @remarks
     * The commit message. This parameter is optional.
     *
     * @example
     * Update documentation
     */
    commitMsg?: string;
    /**
     * @remarks
     * The OSS object name (path).
     *
     * This parameter is required.
     *
     * @example
     * imports/example.zip
     */
    ossObjectName?: string;
    /**
     * @remarks
     * Specifies whether to overwrite an existing Skill. Default value: false.
     *
     * @example
     * false
     */
    overwrite?: boolean;
    /**
     * @remarks
     * The target upload version number. This parameter is optional and serves as a fallback when the ZIP package does not contain version information.
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
