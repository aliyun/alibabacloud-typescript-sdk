import * as $dara from '@darabonba/typescript';
export declare class ListApplicationAssignmentsRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * 472457090344041****
     */
    appId?: string;
    /**
     * @remarks
     * The maximum number of items per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to retrieve the next page of results. This field is not required for the first API call.
     *
     * @example
     * caeba0bbb2be03f84eb48b699f0a****
     */
    nextToken?: string;
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
