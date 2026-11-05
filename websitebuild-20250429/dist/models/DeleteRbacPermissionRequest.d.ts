import * as $dara from '@darabonba/typescript';
export declare class DeleteRbacPermissionRequest extends $dara.Model {
    /**
     * @remarks
     * The business instance ID.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The permission ID.
     *
     * @example
     * 804a6b2a-82ac-49f2-960a-a6c2ed9e73dd
     */
    permissionId?: string;
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
