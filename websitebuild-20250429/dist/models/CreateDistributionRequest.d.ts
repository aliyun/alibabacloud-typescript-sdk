import * as $dara from '@darabonba/typescript';
export declare class CreateDistributionRequest extends $dara.Model {
    /**
     * @remarks
     * The article ID.
     *
     * This parameter is required.
     *
     * @example
     * 28733
     */
    articleId?: string;
    /**
     * @remarks
     * The list of selected channels.
     *
     * This parameter is required.
     */
    channels?: string[];
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
