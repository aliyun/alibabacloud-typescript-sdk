import * as $dara from '@darabonba/typescript';
export declare class DescribePolarAgentChatRecordsRequest extends $dara.Model {
    /**
     * @remarks
     * The session ID. To obtain the SessionId, use Signature Version 3.0 to call GetPolarAgent to initiate a conversation and extract the SessionId from the returned stream.
     *
     * This parameter is required.
     *
     * @example
     * 44dcdf31-04cd-4a44-9bae-834dd6657e29
     */
    sessionId?: string;
    /**
     * @remarks
     * The product type source. Valid value: polardb-console.
     *
     * @example
     * polardb-console
     */
    source?: string;
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
