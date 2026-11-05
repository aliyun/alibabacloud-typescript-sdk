import * as $dara from '@darabonba/typescript';
export declare class RevokeContextDatabaseApiKeyRequest extends $dara.Model {
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
