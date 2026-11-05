import * as $dara from '@darabonba/typescript';
export declare class DescribeWhitelistIpsRequest extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rds_copilot****_public_cn-4****02
     */
    instanceId?: string;
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
