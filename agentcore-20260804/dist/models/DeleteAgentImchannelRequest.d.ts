import * as $dara from '@darabonba/typescript';
export declare class DeleteAgentIMChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The reserved idempotence token. The backend does not provide persistent idempotence guarantee in the current version.
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
