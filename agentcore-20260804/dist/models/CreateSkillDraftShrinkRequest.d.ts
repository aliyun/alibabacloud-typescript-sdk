import * as $dara from '@darabonba/typescript';
export declare class CreateSkillDraftShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
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
