import * as $dara from '@darabonba/typescript';
export declare class CreateRbacPermissionRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250821161210000001
     */
    bizId?: string;
    /**
     * @remarks
     * The permission parameters.
     *
     * @example
     * {"resource":"post","action":"read","description":"read post"}
     */
    permissionData?: string;
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
