import * as $dara from '@darabonba/typescript';
export declare class CheckResourceMeasureRequest extends $dara.Model {
    /**
     * @remarks
     * The owner ID, which can be a website ID or an Alibaba Cloud user ID.
     *
     * @example
     * 123456
     */
    belongId?: string;
    /**
     * @remarks
     * The type of the owner ID. Valid values: siteId and uid.
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
     * 1
     */
    bizType?: string;
    /**
     * @remarks
     * The optional compatible total for APP_WORKSPACE, with a range of 0 to 100000. When provided, it takes precedence over ResourceValue and does not repeatedly add the used amount. New calls only require ResourceValue. This field is not used for APP or USER.
     *
     * @example
     * 21
     */
    desiredTotal?: number;
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
     * The order component information. If this parameter is empty, EspBizId and BizType must not be empty.
     *
     * @example
     * {"siteversion":"test"}
     */
    orderComponentParams?: string;
    /**
     * @remarks
     * The resource identifier.
     *
     * @example
     * InspirationTokens
     */
    resourceCode?: string;
    /**
     * @remarks
     * The resource value. This parameter is empty by default and is required only for feature resources. A value of 0 indicates not supported, and 1 indicates supported.
     *
     * @example
     * 1
     */
    resourceValue?: number;
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
