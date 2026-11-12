import * as $dara from '@darabonba/typescript';
export declare class VerifyConnectorRequestBody extends $dara.Model {
    /**
     * @remarks
     * The JSON string of the connector configuration to be validated. Set site to global or cn. The serviceAccountKeys field must contain at least one item with a serviceAccountKey.
     *
     * This parameter is required.
     *
     * @example
     * {"site":"global","organizationId":"org-xxxx","apiKey":"ak-xxxx","serviceAccountKeys":[{"name":"default","serviceAccountKey":"sk-xxxx"}]}
     */
    metadata?: string;
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
export declare class VerifyConnectorRequest extends $dara.Model {
    /**
     * @remarks
     * The validation request body.
     *
     * This parameter is required.
     */
    body?: VerifyConnectorRequestBody;
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
