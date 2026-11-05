import * as $dara from '@darabonba/typescript';
export declare class DeleteAppInstanceFileRequest extends $dara.Model {
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
     */
    conversationId?: string;
    /**
     * @remarks
     * The file path.
     *
     * @example
     * sdms-test/static/
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
