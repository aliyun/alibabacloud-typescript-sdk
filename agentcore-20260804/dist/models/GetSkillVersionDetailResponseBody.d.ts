import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";
export declare class GetSkillVersionDetailResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The description.
     *
     * @example
     * A sample description that explains the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * skill-example
     */
    name?: string;
    /**
     * @remarks
     * The resource mapping in which the key is the resource name.
     */
    resource?: {
        [key: string]: DataResourceValue;
    };
    /**
     * @remarks
     * The Skill card content (SKILL.md).
     *
     * @example
     * # Sample Skill
     *
     * Used to demonstrate Skill document content
     */
    skillMd?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1234567890abcdef
     */
    workspaceId?: string;
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
export declare class GetSkillVersionDetailResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response data.
     */
    data?: GetSkillVersionDetailResponseBodyData;
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
