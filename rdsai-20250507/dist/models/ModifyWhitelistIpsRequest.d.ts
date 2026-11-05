import * as $dara from '@darabonba/typescript';
export declare class ModifyWhitelistIpsRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * IP address whitelist. Before modifying IP address whitelist, call the DescribeInstanceIpWhitelist operation to query the existing IP whitelist of the instance.
     *
     * @example
     * 127.0.0.1,192.168.1.0/24
     */
    ipWhitelist?: string;
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
