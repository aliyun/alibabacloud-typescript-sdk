import * as $dara from '@darabonba/typescript';
export declare class GetTicketTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    categoryId?: number;
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
