import * as $dara from '@darabonba/typescript';
export declare class DescribeSupportOnlineResizeDiskRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
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
