import * as $dara from '@darabonba/typescript';
export declare class DescribeMOUsageDetailExportRequest extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * This parameter is required.
     *
     * @example
     * rds_copilot**
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
