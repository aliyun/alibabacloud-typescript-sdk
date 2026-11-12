import * as $dara from '@darabonba/typescript';
export declare class ListSkillReferencesRequest extends $dara.Model {
    /**
     * @remarks
     * The page number. Pages start from 1. Default value: 1.
     *
     * @example
     * 1
     */
    pageNo?: number;
    /**
     * @remarks
     * The number of entries per page. If omitted, the server default value is used.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The reference selector type used for filtering. Valid values: LABEL and VERSION.
     *
     * @example
     * LABEL
     */
    selectorType?: string;
    /**
     * @remarks
     * The reference selector value used for filtering. Valid values: latest, a named label, HEAD, or a specific version.
     *
     * @example
     * HEAD
     */
    selectorValue?: string;
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
