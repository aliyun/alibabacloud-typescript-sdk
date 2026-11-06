import * as $dara from '@darabonba/typescript';
export declare class ApplyApplicationPromptsRequest extends $dara.Model {
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
     * The list of prompt IDs to disable. You must provide a non-empty list for at least one of EnabledPromptIds and DisabledPromptIds. Otherwise, the InvalidApplicationPromptId.Malformed error is returned.
     *
     * @example
     * ["papt-************"]
     */
    disabledPromptIds?: string[];
    /**
     * @remarks
     * The list of prompt IDs to enable. You must provide a non-empty list for at least one of EnabledPromptIds and DisabledPromptIds. Otherwise, the InvalidApplicationPromptId.Malformed error is returned.
     *
     * @example
     * ["papt-************"]
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
