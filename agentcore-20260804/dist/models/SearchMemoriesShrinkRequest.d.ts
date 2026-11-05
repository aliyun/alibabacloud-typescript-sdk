import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The semantic retrieval request.
     *
     * This parameter is required.
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
