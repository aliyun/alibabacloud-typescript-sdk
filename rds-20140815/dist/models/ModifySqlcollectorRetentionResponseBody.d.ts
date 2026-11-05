import * as $dara from '@darabonba/typescript';
export declare class ModifySQLCollectorRetentionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 21383BB3-3845-4628-B422-B4FB5C83DEBD
     */
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
