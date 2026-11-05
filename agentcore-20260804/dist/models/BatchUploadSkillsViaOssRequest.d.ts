import * as $dara from '@darabonba/typescript';
export declare class BatchUploadSkillsViaOssRequestBody extends $dara.Model {
    /**
     * @remarks
     * The OSS object name (path).
     *
     * This parameter is required.
     *
     * @example
     * skill/import/user123/ns-123456/2026/04/20/uuid/skills.zip
     */
    ossObjectName?: string;
    /**
     * @remarks
     * Specifies whether to overwrite existing skills. Default value: false.
     *
     * @example
     * false
     */
    overwrite?: boolean;
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
export declare class BatchUploadSkillsViaOssRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: BatchUploadSkillsViaOssRequestBody;
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
