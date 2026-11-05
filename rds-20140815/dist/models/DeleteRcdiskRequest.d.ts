import * as $dara from '@darabonba/typescript';
export declare class DeleteRCDiskRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cloud disk to be released.
     *
     * This parameter is required.
     *
     * @example
     * rcd-wz9c8isqly8637zw****
     */
    diskId?: string;
    /**
     * @remarks
     * The region ID of the instance.
     *
     * @example
     * cn-hangzhou
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
