import * as $dara from '@darabonba/typescript';
export declare class GetAppRecommendedCommoditiesRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance. This parameter is required in Scenario 1 and is used to filter instance versions.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {}
     */
    extend?: string;
    /**
     * @remarks
     * The resource filtering conditions.
     *
     * @example
     * []
     */
    resourceConditions?: string;
    /**
     * @remarks
     * The scenarios. Valid values: ai_chat and inspiration.
     *
     * @example
     * DataworksManualTask
     */
    scene?: string;
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
