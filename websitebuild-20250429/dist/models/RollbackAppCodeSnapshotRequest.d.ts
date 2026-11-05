import * as $dara from '@darabonba/typescript';
export declare class RollbackAppCodeSnapshotRequest extends $dara.Model {
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * 1067072706415168
     */
    siteId?: string;
    /**
     * @remarks
     * The target snapshot version number.
     *
     * @example
     * 1231
     */
    targetLogicalNumber?: number;
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
