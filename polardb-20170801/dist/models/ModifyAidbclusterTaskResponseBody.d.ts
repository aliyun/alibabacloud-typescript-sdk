import * as $dara from '@darabonba/typescript';
export declare class ModifyAIDBClusterTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * pm-2ze9***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The instance ID of the PolarDB database for the AI model service.
     *
     * @example
     * pc-bp10ze***
     */
    relativeDBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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
