import * as $dara from '@darabonba/typescript';
export declare class RestartAIDBClusterRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pc-**************
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
