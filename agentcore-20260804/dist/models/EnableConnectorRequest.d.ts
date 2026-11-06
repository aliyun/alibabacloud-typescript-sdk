import * as $dara from '@darabonba/typescript';
export declare class EnableConnectorRequestBody extends $dara.Model {
    /**
     * @remarks
     * The JSON string for the connector configuration. The site parameter must be global or cn. The apiKey parameter is required. The serviceAccountKeys parameter must contain at least one named service account key. The organizationId parameter is optional.
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
export declare class EnableConnectorRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for enabling the connector.
     *
     * This parameter is required.
     */
    body?: EnableConnectorRequestBody;
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
