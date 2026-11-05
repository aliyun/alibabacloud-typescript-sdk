import * as $dara from '@darabonba/typescript';
export declare class ForcePublishSkillVersionRequestBody extends $dara.Model {
    /**
     * @remarks
     * The commit message recorded on the release version produced by this publish operation. Takes effect in HEAD draft mode. If left empty, the draft message is used. Ignored in version Draft mode.
     *
     * @example
     * First release version
     */
    commitMsg?: string;
    /**
     * @remarks
     * Specifies whether to update the latest label.
     *
     * @example
     * true
     */
    updateLatestLabel?: boolean;
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
export declare class ForcePublishSkillVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: ForcePublishSkillVersionRequestBody;
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
