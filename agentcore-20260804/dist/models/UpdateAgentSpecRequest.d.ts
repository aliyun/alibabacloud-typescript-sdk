import * as $dara from '@darabonba/typescript';
export declare class UpdateAgentSpecRequestBody extends $dara.Model {
    /**
     * @remarks
     * The business tags as a JSON-formatted string.
     *
     * @example
     * ["ai","agent"]
     */
    bizTags?: string;
    /**
     * @remarks
     * The label mapping as a JSON-formatted string.
     *
     * @example
     * {"latest":"0.0.1"}
     */
    labels?: string;
    /**
     * @remarks
     * The visibility scope. Valid values: PUBLIC and PRIVATE.
     *
     * @example
     * PUBLIC
     */
    scope?: string;
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
export declare class UpdateAgentSpecRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateAgentSpecRequestBody;
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
