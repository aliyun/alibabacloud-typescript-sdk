import * as $dara from '@darabonba/typescript';
export declare class AuthorizeAppProxyOpsRequest extends $dara.Model {
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
     */
    conversationId?: string;
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
