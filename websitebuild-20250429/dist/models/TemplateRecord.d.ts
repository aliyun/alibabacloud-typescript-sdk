import * as $dara from '@darabonba/typescript';
export declare class TemplateRecord extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WS20250915163734000001
     */
    bizId?: string;
    /**
     * @remarks
     * The copy status.
     *
     * @example
     * copying
     */
    copyStatus?: string;
    /**
     * @remarks
     * The creation time.
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 2022-12-21T08:27:03Z
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The update time.
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 2025-08-28T02:25:41Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * The record ID.
     *
     * @example
     * 9953352
     */
    id?: number;
    /**
     * @remarks
     * The template ID.
     *
     * @example
     * de10bf7d782392a70f293a3b1f7bb8fc
     */
    templateId?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 12343131221311
     */
    userId?: string;
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
