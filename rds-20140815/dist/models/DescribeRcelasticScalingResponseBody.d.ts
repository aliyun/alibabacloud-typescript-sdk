import * as $dara from '@darabonba/typescript';
export declare class DescribeRCElasticScalingResponseBodyScheduledRuleTemplates extends $dara.Model {
    items?: string[];
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
export declare class DescribeRCElasticScalingResponseBody extends $dara.Model {
    /**
     * @example
     * gn8is
     */
    acuType?: string;
    /**
     * @example
     * rc-a0e466b01tif2pk
     */
    instanceId?: string;
    maxAcu?: number;
    minAcu?: number;
    /**
     * @example
     * 1F7B8B09-36F3-1165-BADB-13E376FE9BD7
     */
    requestId?: string;
    scalingEnabled?: boolean;
    scalingSupported?: boolean;
    /**
     * @example
     * {"rule":[{"beginTime":"09:00","endTime":"17:00","acu":4}]}
     */
    scheduledRule?: string;
    scheduledRuleTemplates?: DescribeRCElasticScalingResponseBodyScheduledRuleTemplates;
    /**
     * @example
     * mysql.x2.medium.9cm
     */
    targetInstanceType?: string;
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
