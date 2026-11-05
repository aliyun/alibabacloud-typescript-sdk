import * as $dara from '@darabonba/typescript';
export declare class StopRCInstancesShrinkRequest extends $dara.Model {
    batchOptimization?: string;
    forceStop?: boolean;
    instanceIdsShrink?: string;
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
