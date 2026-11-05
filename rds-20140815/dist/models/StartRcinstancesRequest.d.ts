import * as $dara from '@darabonba/typescript';
export declare class StartRCInstancesRequest extends $dara.Model {
    batchOptimization?: string;
    instanceIds?: string[];
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
