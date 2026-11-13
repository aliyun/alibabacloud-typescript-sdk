import * as $dara from '@darabonba/typescript';
export declare class ListSkillReferencesRequest extends $dara.Model {
    /**
     * @remarks
     * The page number, starting from 1. Default value: 1.
     *
     * @example
     * 1
     */
    pageNo?: number;
    /**
     * @remarks
     * The number of entries per page. If not specified, the server default value is used.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * Filters by reference strength. Valid values: STRONG, WEAK.
     *
     * @example
     * STRONG
     */
    refType?: string;
    /**
     * @remarks
     * Filters by reference selector type. Valid values: LABEL, VERSION.
     *
     * @example
     * LABEL
     */
    selectorType?: string;
    /**
     * @remarks
     * Filters by reference selector value. Valid values: latest, a named label, HEAD, or a specific version.
     *
     * @example
     * HEAD
     */
    selectorValue?: string;
    /**
     * @remarks
     * Filters by reference source identifier. The value must be agentcore or a configured source.
     *
     * @example
     * agentcore
     */
    sourceId?: string;
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
