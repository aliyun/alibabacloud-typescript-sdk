import * as $dara from '@darabonba/typescript';
export declare class ListTagResourcesForRegionResponseBodyTagResourcesTagResource extends $dara.Model {
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
export declare class ListTagResourcesForRegionResponseBodyTagResources extends $dara.Model {
    tagResource?: ListTagResourcesForRegionResponseBodyTagResourcesTagResource[];
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
export declare class ListTagResourcesForRegionResponseBody extends $dara.Model {
    /**
     * @remarks
     * If the response does not return all results, this parameter is returned. You can use this token in the next request to continue the query.
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
    tagResources?: ListTagResourcesForRegionResponseBodyTagResources;
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
