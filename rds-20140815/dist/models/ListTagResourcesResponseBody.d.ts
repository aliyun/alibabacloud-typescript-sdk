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
     * The token used to return more results. If a query does not return all results, pass in the token returned from the previous query to continue the query.
     *
     * @example
     * 212db86sca4384811e0b5e8707ec21345
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 47A514A1-4B77-4E30-B4C5-2A880650B3FD
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
