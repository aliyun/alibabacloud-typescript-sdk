import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";
export declare class GetAgentSpecLatestResponseBodyDataMcpServers extends $dara.Model {
    /**
     * @remarks
     * The name.
     *
     * @example
     * agentspec-example
     */
    name?: string;
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
export declare class GetAgentSpecLatestResponseBodyDataSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The type of the version selector.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. When the type is LABEL, this is the label name, such as latest. When the type is VERSION, this is the specific version number.
     *
     * @example
     * latest
     */
    value?: string;
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
export declare class GetAgentSpecLatestResponseBodyDataSkills extends $dara.Model {
    /**
     * @remarks
     * The name.
     *
     * @example
     * agentspec-example
     */
    name?: string;
    /**
     * @remarks
     * The source type of the skill.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest.
     */
    versionSelector?: GetAgentSpecLatestResponseBodyDataSkillsVersionSelector;
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
export declare class GetAgentSpecLatestResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The business tags.
     *
     * @example
     * Sample property value
     */
    bizTags?: string;
    /**
     * @remarks
     * The content.
     *
     * @example
     * Sample content
     */
    content?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * A sample description to illustrate the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The number of downloads.
     *
     * @example
     * 10
     */
    downloadCount?: number;
    /**
     * @remarks
     * Indicates whether it is enabled.
     */
    enable?: boolean;
    /**
     * @remarks
     * The list of MCP service references.
     */
    mcpServers?: GetAgentSpecLatestResponseBodyDataMcpServers[];
    /**
     * @remarks
     * The name.
     *
     * @example
     * agentspec-example
     */
    name?: string;
    /**
     * @remarks
     * The resource file mapping.
     */
    resource?: {
        [key: string]: DataResourceValue;
    };
    /**
     * @remarks
     * The visibility scope.
     *
     * @example
     * PRIVATE
     */
    scope?: string;
    /**
     * @remarks
     * The list of skill references.
     */
    skills?: GetAgentSpecLatestResponseBodyDataSkills[];
    /**
     * @remarks
     * The update time. It is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1787671022000
     */
    updateTime?: number;
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
export declare class GetAgentSpecLatestResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: GetAgentSpecLatestResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
     */
    requestId?: string;
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
