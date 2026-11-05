import * as $dara from '@darabonba/typescript';
export declare class GetAvailableLLMModelsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The models.
     *
     * @example
     * ["glm-5","deepseek-v3.2"]
     */
    models?: string[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
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
