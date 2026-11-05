import * as $dara from '@darabonba/typescript';
export declare class RestartPolarClawGatewayRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarClaw application ID. Example: pa-xxx.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The restart mode. Valid values:
     * - in-process: lightweight restart. Environment variables do not take effect. This is the default value.
     * - pkill: cold start. Environment variables take effect.
     *
     * @example
     * in-process
     */
    mode?: string;
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
