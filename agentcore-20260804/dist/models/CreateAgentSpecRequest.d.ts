import * as $dara from '@darabonba/typescript';
export declare class CreateAgentSpecRequestBody extends $dara.Model {
    /**
     * @remarks
     * The unique name of the AgentSpec.
     *
     * This parameter is required.
     *
     * @example
     * my-worker
     */
    agentSpecName?: string;
    /**
     * @remarks
     * Specifies the draft version number. If not specified, the default value is 0.0.1.
     *
     * @example
     * 0.0.1
     */
    targetVersion?: string;
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
export declare class CreateAgentSpecRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateAgentSpecRequestBody;
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
