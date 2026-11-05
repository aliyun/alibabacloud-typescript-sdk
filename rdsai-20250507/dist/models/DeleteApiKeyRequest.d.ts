import * as $dara from '@darabonba/typescript';
export declare class DeleteApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * Api Key
     *
     * This parameter is required.
     *
     * @example
     * sk-rds-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The instance ID.
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
