import * as $dara from '@darabonba/typescript';
export declare class RedeployRCInstanceRequest extends $dara.Model {
    forceStop?: boolean;
    /**
     * @remarks
     * This parameter is required.
     */
    instanceId?: string;
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
