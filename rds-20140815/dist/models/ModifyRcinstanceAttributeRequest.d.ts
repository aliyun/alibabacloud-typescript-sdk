import * as $dara from '@darabonba/typescript';
export declare class ModifyRCInstanceAttributeRequest extends $dara.Model {
    deletionProtection?: boolean;
    enableJumboFrame?: boolean;
    hostName?: string;
    instanceId?: string;
    instanceIds?: string[];
    /**
     * @example
     * k8s-node
     */
    instanceName?: string;
    password?: string;
    reboot?: boolean;
    regionId?: string;
    securityGroupId?: string;
    securityGroupIds?: string[];
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
