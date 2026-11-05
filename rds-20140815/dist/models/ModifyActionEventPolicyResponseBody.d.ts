import * as $dara from '@darabonba/typescript';
export declare class ModifyActionEventPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The status of the historical events feature.
     *
     * @example
     * True
     */
    enableEventLog?: string;
    /**
     * @remarks
     * The region ID for which the historical events feature is enabled or disabled.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * BAC0952C-0EB3-4DE7-A567-B83269BFE43F
     */
    requestId?: string;
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
