import * as $dara from '@darabonba/typescript';
export declare class GetSkillRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to obtain a temporary download URL for the specified version. Default value: false.
     */
    download?: boolean;
    /**
     * @remarks
     * The supported language. Valid values:
     * * zh-CN: Simplified Chinese
     * * zh-TW: Traditional Chinese
     * * en-US: English
     * * ja-JP: Japanese
     *
     * @example
     * zh-CN
     */
    language?: string;
    /**
     * @remarks
     * The file path within the package, such as SKILL.md. The body is in File.text, and the full Markdown is in SkillMarkdown.
     *
     * @example
     * SKILL.md
     */
    path?: string;
    /**
     * @remarks
     * The unique identifier of the skill.
     *
     * This parameter is required.
     *
     * @example
     * 550e8400-e29b-41d4-a716-44665544****
     */
    skillId?: string;
    /**
     * @remarks
     * The version UUID (Versions[].Id), not a version number such as 1.0.0. If omitted, the currently active version is read.
     *
     * @example
     * 00000000-0000-4000-8000-000000000002
     */
    versionId?: string;
    /**
     * @remarks
     * The ContextDB workspace ID.
     *
     * @example
     * 00000000-0000-4000-8000-000000000001
     */
    workspaceId?: string;
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
