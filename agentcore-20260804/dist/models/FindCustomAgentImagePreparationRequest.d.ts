import * as $dara from '@darabonba/typescript';
export declare class FindCustomAgentImagePreparationRequest extends $dara.Model {
    /**
     * @remarks
     * The idempotency token passed as a query parameter. This parameter is required when you explicitly submit customImage or container.type=custom, and optional for ACR image and code package submissions. The value must be 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens. Reuse the same token for retries of the same submission. If the same token is used for different parameters, the request will be rejected.
     *
     * This parameter is required.
     *
     * @example
     * image-update-20261022-001
     */
    clientToken?: string;
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
