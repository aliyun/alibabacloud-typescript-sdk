import * as $dara from '@darabonba/typescript';
export declare class RenameApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * API KEY
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
    /**
     * @remarks
     * The API key name.
     *
     * This parameter is required.
     *
     * @example
     * api-*****
     */
    keyName?: string;
    roleArn?: string;
    roleName?: string;
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
