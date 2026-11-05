import * as $dara from '@darabonba/typescript';
export declare class GetOssUploadPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The scenario, such as knowledge.
     *
     * @example
     * default
     */
    scenario?: string;
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
