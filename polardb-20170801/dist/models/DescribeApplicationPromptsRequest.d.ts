import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationPromptsRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID. This operation applies only to applications of the mem0 type. If you specify the ID of an application of another type, an error is returned. You can call the DescribeApplications operation to query the application list and filter applications by ApplicationType.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: **30**.
     *
     * @example
     * 50
     */
    pageSize?: number;
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
