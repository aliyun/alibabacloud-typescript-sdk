import * as $dara from '@darabonba/typescript';
export declare class SyncAppInstanceForPartnerShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The website instance object data.
     */
    appInstanceShrink?: string;
    /**
     * @remarks
     * The type of the system event. Valid values: CREATE, UPDATE, and COMPLETE.
     *
     * @example
     * CREATE
     */
    eventType?: string;
    /**
     * @remarks
     * The employee ID of the operator.
     *
     * @example
     * system
     */
    operator?: string;
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
     * The source. Set this parameter to MARKET_CLOUD_DREAM.
     *
     * @example
     * MARKET_CLOUD_DREAM
     */
    sourceType?: string;
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
