import * as $dara from '@darabonba/typescript';
export declare class CreateAgentIMChannelShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
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
