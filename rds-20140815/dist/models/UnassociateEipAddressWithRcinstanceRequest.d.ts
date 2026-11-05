import * as $dara from '@darabonba/typescript';
export declare class UnassociateEipAddressWithRCInstanceRequest extends $dara.Model {
    allocationId?: string;
    instanceId?: string;
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
