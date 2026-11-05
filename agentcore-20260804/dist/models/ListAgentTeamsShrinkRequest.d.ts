import * as $dara from '@darabonba/typescript';
export declare class ListAgentTeamsShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request parameters for querying the list of agent teams.
     */
    bodyShrink?: string;
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
