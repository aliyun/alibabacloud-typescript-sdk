import * as $dara from '@darabonba/typescript';
export declare class DescribeConsumerGroupsRequest extends $dara.Model {
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
     * The ID of the gateway instance. Usage note: The description of the GwClusterId parameter in DescribeConsumerGroups is updated to specify that it is the AI gateway instance ID. You can obtain a valid ID by calling the CreateGateway or DescribeGatewayList operation.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxx
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
     *
     * Default value: 30.
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
