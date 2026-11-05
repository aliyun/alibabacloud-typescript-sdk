import * as $dara from '@darabonba/typescript';
export declare class UpdateSkillBizTagsRequestBody extends $dara.Model {
    /**
     * @remarks
     * The JSON array string of business tags.
     *
     * This parameter is required.
     *
     * @example
     * ["cs","qa","support"]
     */
    bizTags?: string;
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
export declare class UpdateSkillBizTagsRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateSkillBizTagsRequestBody;
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
