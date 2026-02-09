import * as $dara from '@darabonba/typescript';
export declare class IsFirstBbsTicketResponseBody extends $dara.Model {
    code?: string;
    data?: boolean;
    message?: string;
    requestId?: string;
    success?: boolean;
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
