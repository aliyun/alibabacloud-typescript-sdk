import * as $dara from '@darabonba/typescript';
export declare class UpdateAppFileRequest extends $dara.Model {
    /**
     * @remarks
     * The file content.
     *
     * @example
     * verify_46630893e2b5efde444c82b4e3707adb
     */
    content?: string;
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
     * The file path.
     *
     * @example
     * pt3/01/31/pengpeixin.png
     */
    filePath?: string;
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
