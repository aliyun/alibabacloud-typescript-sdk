import * as $dara from '@darabonba/typescript';
export declare class ResetApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * Api Key
     *
     * @example
     * sk-rds-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
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
