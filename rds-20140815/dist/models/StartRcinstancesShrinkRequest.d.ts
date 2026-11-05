import * as $dara from '@darabonba/typescript';
export declare class StartRCInstancesShrinkRequest extends $dara.Model {
    batchOptimization?: string;
    instanceIdsShrink?: string;
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
