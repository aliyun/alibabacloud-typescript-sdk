import * as $dara from '@darabonba/typescript';
export declare class IsFirstBbsTicketRequest extends $dara.Model {
    cna?: string;
    distributionChannel?: string;
    referrer?: string;
    subDistributionChannel?: string;
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
