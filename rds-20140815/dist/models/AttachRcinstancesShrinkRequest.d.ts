import * as $dara from '@darabonba/typescript';
export declare class AttachRCInstancesShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The list of instance IDs.
     *
     * This parameter is required.
     */
    instanceIdsShrink?: string;
    /**
     * @remarks
     * The key pair of the RDS Custom instance.
     *
     * @example
     * Custom_test
     */
    keyPair?: string;
    /**
     * @remarks
     * The logon password of the RDS Custom instance.
     *
     * @example
     * testPassword
     */
    password?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC).
     *
     * > Reserved parameter.
     *
     * @example
     * None
     */
    vpcId?: string;
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
