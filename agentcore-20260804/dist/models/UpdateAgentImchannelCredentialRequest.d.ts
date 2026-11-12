import * as $dara from '@darabonba/typescript';
export declare class UpdateAgentIMChannelCredentialRequestBody extends $dara.Model {
    /**
     * @remarks
     * The channel credentials. All credentials must be provided, and field values must be non-empty strings. DingTalk uses clientID and clientSecret, Lark uses appId and appSecret, and WeCom uses botId and secret.
     *
     * This parameter is required.
     */
    credential?: {
        [key: string]: string;
    };
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
export declare class UpdateAgentIMChannelCredentialRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateAgentIMChannelCredentialRequestBody;
    /**
     * @remarks
     * The reserved idempotency token. The backend does not provide persistent idempotency guarantees in the current phase.
     *
     * @example
     * client-token-1
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
