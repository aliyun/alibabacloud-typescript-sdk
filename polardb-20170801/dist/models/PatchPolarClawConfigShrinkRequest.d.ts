import * as $dara from '@darabonba/typescript';
export declare class PatchPolarClawConfigShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The JSON merge patch object.
     *
     * @example
     * {
     *     "tools": {
     *         "web": {
     *             "search": {
     *                 "enabled": false
     *             }
     *         }
     *     }
     * }
     */
    configPatchShrink?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the patch is applied. Default value: true.
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
