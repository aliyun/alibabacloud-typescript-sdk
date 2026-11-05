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
     * A token to retrieve more results. This parameter is returned if a query does not return all results. You can use the token in a subsequent query to continue retrieving results.
     *
     * @example
     * 212db86sca4384811e0b5e8707e******
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 688C04E4-23F8-409F-8A38-B954D5******
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
