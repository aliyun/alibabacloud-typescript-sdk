import * as $dara from '@darabonba/typescript';
export declare class ListImportTasksRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The number of entries per page. Valid values: **1 to 100**.
     *
     * Default value: **30**.
     * > If you specify this parameter, the **PageSize** and **PageNumber** parameters are unavailable.
     *
     * @example
     * 30
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token.
     *
     * @example
     * AAAAAdDWBF2
     */
    nextToken?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
