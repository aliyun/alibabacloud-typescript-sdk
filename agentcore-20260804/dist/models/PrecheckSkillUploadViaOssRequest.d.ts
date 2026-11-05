import * as $dara from '@darabonba/typescript';
export declare class PrecheckSkillUploadViaOssRequestBody extends $dara.Model {
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
export declare class PrecheckSkillUploadViaOssRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: PrecheckSkillUploadViaOssRequestBody;
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
