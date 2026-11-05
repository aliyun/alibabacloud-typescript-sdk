import * as $dara from '@darabonba/typescript';
export declare class ListScheduledTasksRequest extends $dara.Model {
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 20. Maximum value: 100.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The ID of the scheduled inspection configuration.
     *
     * @example
     * 847268a4-196f-416b-aa12-bfe0c115****
     */
    scheduledId?: string;
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
