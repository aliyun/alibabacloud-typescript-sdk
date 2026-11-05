import * as $dara from '@darabonba/typescript';
export declare class RebootRCInstanceRequest extends $dara.Model {
    dryRun?: boolean;
    forceStop?: boolean;
    /**
     * @remarks
     * This parameter is required.
     */
    instanceId?: string;
    /**
     * @example
     * 2018-01-01T12:05Z
     */
    rebootTime?: string;
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
