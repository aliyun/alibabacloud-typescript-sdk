import * as $dara from '@darabonba/typescript';
export declare class ModifyResourcePackageRequest extends $dara.Model {
    /**
     * @remarks
     * Indicates whether to enable automatic quotas.
     *
     * @example
     * true
     */
    autoQuota?: boolean;
    /**
     * @remarks
     * The ID of the cross-cloud resource plan.
     *
     * This parameter is required.
     *
     * @example
     * pm-bp11b0i9389******
     */
    resourcePackageId?: string;
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
