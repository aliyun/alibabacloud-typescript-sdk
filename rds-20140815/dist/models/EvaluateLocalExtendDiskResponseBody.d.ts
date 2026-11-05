import * as $dara from '@darabonba/typescript';
export declare class EvaluateLocalExtendDiskResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the resource is available. Valid values:
     *
     * - **true**: Available.
     *
     * - **false**: Unavailable.
     *
     * @example
     * true
     */
    available?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-wz9s06u4drm******
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The transmission type of the database instance.
     *
     * @example
     * 0
     */
    DBInstanceTransType?: string;
    /**
     * @remarks
     * The maximum capacity of the local disk. Unit: GB.
     *
     * @example
     * 100
     */
    localUpgradeDiskLimit?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * A4C4D26F-E5CE-5A28-8C54-46A6FB318223
     */
    requestId?: string;
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
