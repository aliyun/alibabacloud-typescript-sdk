import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceVectorSupportStatusRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-2vc2bn5c5b7g6****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The status of the vector storage feature. Valid values:
     *
     * - **ON**: Enabled.
     * - **OFF**: Disabled.
     *
     * This parameter is required.
     *
     * @example
     * Scheduled
     */
    status?: string;
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
