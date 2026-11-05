import * as $dara from '@darabonba/typescript';
export declare class CopyAppPluginConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The source business ID.
     *
     * @example
     * 31104757
     */
    sourceBizId?: string;
    /**
     * @remarks
     * The target business ID.
     *
     * @example
     * 31104758
     */
    targetBizId?: string;
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
