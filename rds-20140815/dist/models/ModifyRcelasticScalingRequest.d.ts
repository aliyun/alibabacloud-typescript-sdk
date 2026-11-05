import * as $dara from '@darabonba/typescript';
export declare class ModifyRCElasticScalingRequest extends $dara.Model {
    dryRun?: boolean;
    /**
     * @example
     * rc-3ndh4shwes*
     */
    instanceId?: string;
    /**
     * @example
     * mysql.x2.medium.9cm
     */
    instanceType?: string;
    /**
     * @example
     * cn-hanghzou
     */
    regionId?: string;
    scalingEnabled?: boolean;
    /**
     * @example
     * {"rule":[{"beginTime":"09:00","endTime":"17:00","acu":4}]}
     */
    scheduledRule?: string;
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
