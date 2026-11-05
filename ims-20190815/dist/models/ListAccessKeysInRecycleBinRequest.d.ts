import * as $dara from '@darabonba/typescript';
export declare class ListAccessKeysInRecycleBinRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the Resource Access Management (RAM) user.
     *
     * @example
     * 20732900249392****
     */
    userId?: string;
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
