import * as $dara from '@darabonba/typescript';
export declare class ModifyRCInstanceNetworkSpecRequest extends $dara.Model {
    instanceId?: string;
    internetMaxBandwidthOut?: string;
    networkChargeType?: string;
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
