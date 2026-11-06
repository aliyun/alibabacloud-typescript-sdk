import * as $dara from '@darabonba/typescript';
export declare class DescribeReplicationSlotsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB cluster to query.
     *
     * This parameter is required.
     *
     * @example
     * pc-test123456
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The child node name of the distributed instance, which is used to filter replication slots.
     *
     * @example
     * testGroup
     */
    subGroupName?: string;
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
