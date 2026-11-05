import * as $dara from '@darabonba/typescript';
export declare class DescribeModelOperatorRequest extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The region.
     *
     * @example
     * cn-beijing
     */
    region?: string;
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
