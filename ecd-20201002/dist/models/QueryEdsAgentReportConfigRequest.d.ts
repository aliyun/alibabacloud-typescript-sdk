import * as $dara from '@darabonba/typescript';
export declare class QueryEdsAgentReportConfigRequest extends $dara.Model {
    aliUid?: number;
    desktopId?: string;
    ecsInstanceId?: string;
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
