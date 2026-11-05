import * as $dara from '@darabonba/typescript';
export declare class GetAppWorkspaceDirectoryRequest extends $dara.Model {
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 5b7105a2-2999-430b-ba23-ba09149d5434
     */
    conversationId?: string;
    /**
     * @remarks
     * The directory depth. If this parameter is set to null or 0, all levels are returned.
     *
     * @example
     * 1
     */
    deep?: number;
    /**
     * @remarks
     * The directory path.
     *
     * @example
     * 1
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
