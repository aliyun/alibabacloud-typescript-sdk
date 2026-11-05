import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterParametersRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**********
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The kernel parameters. Valid values:
     *
     * - **Normal**: The list of kernel parameters.
     *
     * - **MigrationFromRDS**: Compares parameters with those of an ApsaraDB RDS instance.
     *
     * @example
     * Normal
     */
    describeType?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
