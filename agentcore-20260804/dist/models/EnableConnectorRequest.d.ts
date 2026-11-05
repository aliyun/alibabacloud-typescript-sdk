import * as $dara from '@darabonba/typescript';
export declare class EnableConnectorRequestBody extends $dara.Model {
    /**
     * @remarks
     * The Connector configuration JSON string. Set site to global or cn. apiKey is required. serviceAccountKeys must contain at least one named service account key. organizationId is optional.
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
     * The enable request body.
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
