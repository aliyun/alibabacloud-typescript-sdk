import * as $dara from '@darabonba/typescript';
export declare class PublishSkillVersionRequestBody extends $dara.Model {
    /**
     * @remarks
     * The commit message recorded on the official version produced by this publish operation. Takes effect in HEAD draft mode. If left empty, the draft message is used. Ignored in version Draft mode.
     *
     * @example
     * First official version
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
export declare class PublishSkillVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: PublishSkillVersionRequestBody;
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
