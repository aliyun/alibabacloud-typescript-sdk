import * as $dara from '@darabonba/typescript';
export declare class RewriteChannelTitleRequest extends $dara.Model {
    /**
     * @remarks
     * The channel draft ID.
     *
     * This parameter is required.
     *
     * @example
     * 7c80359e-835d-4871-a971-8400d008828b
     */
    draftId?: string;
    /**
     * @remarks
     * The user personalization requirement in free text. This parameter is optional.
     *
     * @example
     * xxx
     */
    userRequirement?: string;
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
