import * as $dara from '@darabonba/typescript';
export declare class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
    resourceId?: string;
    resourceType?: string;
    tagKey?: string;
    tagValue?: string;
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
export declare class ListTagResourcesResponseBodyTagResources extends $dara.Model {
    tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
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
export declare class ListTagResourcesResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The marker. This parameter is returned only if the value of IsTruncated is true. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.
     *
     * @example
     * caeba0bbb2be03f84eb48b699f0a****
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4BE83135-0B08-467C-B3A2-27B312FD0F57
     */
    requestId?: string;
    tagResources?: ListTagResourcesResponseBodyTagResources;
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
