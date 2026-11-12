import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBProjectRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the AgenticDB cluster. The ID must have the pagc- prefix. You can obtain the ID after calling CreateDBCluster and specifying AgenticDbType=dedicated and ServerlessType=AgileServerless. A regular cluster ID with the pc- prefix is not supported. If an invalid ID is provided, the InvalidDBClusterId.NotFound error may be returned.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the default branch. Default value: main.
     *
     * @example
     * main
     */
    defaultBranchName?: string;
    /**
     * @remarks
     * The description of the project.
     *
     * @example
     * Production analytics database
     */
    description?: string;
    /**
     * @remarks
     * The retention period of historical data, in seconds.
     *
     * @example
     * 604800
     */
    historyRetentionSeconds?: number;
    /**
     * @remarks
     * The name of the project. The name must be unique within the same tenant.
     *
     * This parameter is required.
     *
     * @example
     * analytics-prod
     */
    projectName?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the tenant. You can obtain the ID from the response after calling CreateAgenticDBTenant to create a tenant.
     *
     * This parameter is required.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
    /**
     * @remarks
     * The ID of the zone where the project storage resides. The zone must be the same as the zone where the cluster compute resides. If this parameter is not specified, the zone where the cluster compute resides is used by default.
     *
     * @example
     * cn-shanghai-l
     */
    zoneId?: string;
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
