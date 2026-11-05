import * as $dara from '@darabonba/typescript';
export declare class UpdateConnectorRequestBody extends $dara.Model {
    /**
     * @remarks
     * The Connector configuration JSON string. The site value must match the value specified when the Connector was enabled. The organizationId value, if provided, must match the value specified when the Connector was enabled. If apiKey is omitted, the original value is retained. If serviceAccountKeys is provided, it represents the complete updated key collection.
     *
     * This parameter is required.
     *
     * @example
     * {"site":"global","organizationId":"org-xxxx"}
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
export declare class UpdateConnectorRequest extends $dara.Model {
    /**
     * @remarks
     * The update request body.
     *
     * This parameter is required.
     */
    body?: UpdateConnectorRequestBody;
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
