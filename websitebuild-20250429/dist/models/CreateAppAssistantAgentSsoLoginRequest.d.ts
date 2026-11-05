import * as $dara from '@darabonba/typescript';
export declare class CreateAppAssistantAgentSsoLoginRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250821161210000001
     */
    bizId?: string;
    /**
     * @remarks
     * The platform type.
     *
     * @example
     * all
     */
    platformType?: string;
    /**
     * @remarks
     * The target URL.
     *
     * @example
     * http://172.16.70.16:9410/metrics
     */
    targetUrl?: string;
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
