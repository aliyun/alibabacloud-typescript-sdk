import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";
export declare class GetAgentSpecVersionResponseBodyData extends $dara.Model {
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
     * Sample description used to illustrate the purpose of the resource
     */
    description?: string;
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
export declare class GetAgentSpecVersionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: GetAgentSpecVersionResponseBodyData;
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
