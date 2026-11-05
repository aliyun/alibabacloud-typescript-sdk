import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstancePayTypeRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the target instance.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The billing method. Set the value to **Prepaid**, which specifies the subscription billing method.
     *
     * This parameter is required.
     *
     * @example
     * Prepaid
     */
    payType?: string;
    /**
     * @remarks
     * The unit of the subscription duration. Valid values:
     * - **Year**
     * - **Month**
     *
     * This parameter is required.
     *
     * @example
     * Year
     */
    period?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The subscription duration:
     * - If **Period** is set to **Year**, valid values are 1 to 5.
     * - If **Period** is set to **Month**, valid values are 1 to 11.
     *
     * @example
     * 2
     */
    usedTime?: number;
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
