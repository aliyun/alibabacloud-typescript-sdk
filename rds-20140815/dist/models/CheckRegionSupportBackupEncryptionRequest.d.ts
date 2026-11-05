import * as $dara from '@darabonba/typescript';
export declare class CheckRegionSupportBackupEncryptionRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-wz91q53f9*******
     */
    DBInstanceID?: string;
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
    resourceOwnerId?: number;
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
