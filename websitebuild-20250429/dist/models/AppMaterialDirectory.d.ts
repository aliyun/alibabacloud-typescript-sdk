import * as $dara from '@darabonba/typescript';
export declare class AppMaterialDirectory extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The list of child folders.
     */
    children?: AppMaterialDirectory[];
    /**
     * @remarks
     * The folder ID.
     *
     * @example
     * WS20260206134746000001-system
     */
    directoryId?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * Image Management
     */
    name?: string;
    /**
     * @remarks
     * The sort order.
     *
     * @example
     * 1
     */
    sortNum?: string;
    /**
     * @remarks
     * The folder type.
     *
     * @example
     * CUSTOM
     */
    type?: string;
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
