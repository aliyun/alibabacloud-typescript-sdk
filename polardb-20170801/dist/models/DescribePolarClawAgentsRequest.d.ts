import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawAgentsRequest extends $dara.Model {
    /**
     * @remarks
     * The list of agent IDs to describe.
     *
     * @example
     * work,research
     */
    agentList?: string[];
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
