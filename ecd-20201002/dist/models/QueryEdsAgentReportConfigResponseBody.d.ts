import * as $dara from '@darabonba/typescript';
export declare class QueryEdsAgentReportConfigResponseBodyData extends $dara.Model {
    config?: string;
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
export declare class QueryEdsAgentReportConfigResponseBody extends $dara.Model {
    data?: QueryEdsAgentReportConfigResponseBodyData;
    requestId?: string;
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
