import * as $dara from '@darabonba/typescript';
export declare class QueryMaterialDirectoryTreeRequest extends $dara.Model {
    /**
     * @remarks
     * The application instance ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * Specifies whether to hide shared folders.
     */
    hiddenPublic?: boolean;
    /**
     * @remarks
     * Specifies whether to request the first-level root folder.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    root?: boolean;
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
