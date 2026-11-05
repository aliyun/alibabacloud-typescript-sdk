import * as $dara from '@darabonba/typescript';
export declare class DeleteRCInstanceRequest extends $dara.Model {
    force?: boolean;
    /**
     * @remarks
     * This parameter is required.
     */
    instanceId?: string;
    /**
     * @remarks
     * This parameter is required.
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
