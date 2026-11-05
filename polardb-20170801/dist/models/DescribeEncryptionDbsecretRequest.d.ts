import * as $dara from '@darabonba/typescript';
export declare class DescribeEncryptionDBSecretRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-wz9fb5nn44u1d****
     */
    DBClusterId?: string;
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
