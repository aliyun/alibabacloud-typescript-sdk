import * as $dara from '@darabonba/typescript';
export declare class ListAgentTeamsRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of agent IDs for which to query team information.
     *
     * This parameter is required.
     */
    agentIds?: string[];
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
export declare class ListAgentTeamsRequest extends $dara.Model {
    /**
     * @remarks
     * The request parameters for querying agent teams.
     */
    body?: ListAgentTeamsRequestBody;
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
