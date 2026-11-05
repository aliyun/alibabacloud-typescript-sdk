import * as $dara from '@darabonba/typescript';
export declare class UpdateAgentIMChannelCredentialRequestBody extends $dara.Model {
    /**
     * @remarks
     * The channel credentials. All fields must be provided and the field values must be non-empty strings. For DingTalk, use clientID and clientSecret. For Lark, use appId and appSecret. For WeCom, use botId and secret.
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
     * The reserved idempotence token. The backend does not provide persistent idempotence guarantees in the current phase.
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
