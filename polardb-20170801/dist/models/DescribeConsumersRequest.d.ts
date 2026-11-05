import * as $dara from '@darabonba/typescript';
export declare class DescribeConsumersRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the consumer group.
     *
     * @example
     * cg-xxxxxxxx
     */
    consumerGroupId?: string;
    /**
     * @remarks
     * The ID of the consumer.
     *
     * @example
     * c-mqveroemc***
     */
    consumerId?: string;
    /**
     * @remarks
     * The name used to filter consumers.
     *
     * @example
     * test
     */
    consumerName?: string;
    /**
     * @remarks
     * The list of names used to filter consumers.
     */
    consumerNameList?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxxxx
     */
    gwClusterId?: string;
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
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
