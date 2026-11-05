import * as $dara from '@darabonba/typescript';
export declare class TranslateChannelDraftRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the channel draft.
     *
     * This parameter is required.
     *
     * @example
     * draft-789
     */
    draftId?: string;
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
