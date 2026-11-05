import * as $dara from '@darabonba/typescript';
export declare class UpdateContextDatabaseApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The new description.
     *
     * @example
     * for nightly cron
     */
    description?: string;
    /**
     * @remarks
     * API Key ID
     *
     * This parameter is required.
     *
     * @example
     * 1024
     */
    keyId?: number;
    /**
     * @remarks
     * The member ID.
     *
     * This parameter is required.
     *
     * @example
     * mb-cz51tnnp8****
     */
    memberId?: string;
    /**
     * @remarks
     * The new display name.
     *
     * @example
     * my-key
     */
    name?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * This parameter is required.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
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
