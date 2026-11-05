import * as $dara from '@darabonba/typescript';
export declare class ApplyApplicationPromptsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * An array of prompt IDs to disable.
     *
     * @example
     * papt-************
     */
    disabledPromptIds?: string[];
    /**
     * @remarks
     * An array of prompt IDs to enable.
     *
     * @example
     * papt-************
     */
    enabledPromptIds?: string[];
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
