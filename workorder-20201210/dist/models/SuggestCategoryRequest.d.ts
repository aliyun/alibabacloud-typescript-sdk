import * as $dara from '@darabonba/typescript';
export declare class SuggestCategoryRequest extends $dara.Model {
    cna?: string;
    content?: string;
    distributionChannel?: string;
    referrer?: string;
    subDistributionChannel?: string;
    ticketId?: string;
    topN?: number;
    useHotSuggestCatchAll?: boolean;
    XGatewayExtendInfo?: string;
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
