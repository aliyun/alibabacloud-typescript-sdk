import * as $dara from '@darabonba/typescript';
export declare class BatchCheckResourceMeasureRequest extends $dara.Model {
    /**
     * @remarks
     * The ownership ID, which can be a website ID or an Alibaba Cloud user ID.
     *
     * @example
     * 123456
     */
    belongId?: string;
    /**
     * @remarks
     * The type of the ownership ID, such as siteId or uid.
     *
     * @example
     * USER
     */
    belongIdType?: string;
    /**
     * @remarks
     * The ESP business type.
     *
     * @example
     * 4
     */
    bizType?: string;
    /**
     * @remarks
     * The ESP business ID.
     *
     * @example
     * p20202933455
     */
    espBizId?: string;
    /**
     * @remarks
     * The order component information. This parameter is automatically populated if left empty.
     *
     * @example
     * {"siteversion":"test"}
     */
    orderComponentParams?: string;
    /**
     * @remarks
     * The list of resource check items in JSON array format.
     *
     * @example
     * [
     *                   {
     *                     "resourceCode": "InspirationTokens",
     *                     "resourceValue": "0"
     *                   }
     *                 ]
     */
    resourceCheckItems?: string;
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
