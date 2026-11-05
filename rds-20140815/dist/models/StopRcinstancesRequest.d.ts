import * as $dara from '@darabonba/typescript';
export declare class StopRCInstancesRequest extends $dara.Model {
    batchOptimization?: string;
    forceStop?: boolean;
    instanceIds?: string[];
    regionId?: string;
    stoppedMode?: string;
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
