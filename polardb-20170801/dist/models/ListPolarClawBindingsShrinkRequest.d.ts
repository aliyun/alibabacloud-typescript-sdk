import * as $dara from '@darabonba/typescript';
export declare class ListPolarClawBindingsShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * Filters by a list of agent IDs.
     *
     * @example
     * work,research
     */
    agentListShrink?: string;
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
