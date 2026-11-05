import * as $dara from '@darabonba/typescript';
export declare class GetAppSandboxPreviewUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
     */
    conversationId?: string;
    /**
     * @remarks
     * Specifies whether to restart the application process. Default value: false.
     *
     * @example
     * true
     */
    restart?: boolean;
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
