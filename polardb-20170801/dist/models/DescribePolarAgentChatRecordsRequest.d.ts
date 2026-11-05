import * as $dara from '@darabonba/typescript';
export declare class DescribePolarAgentChatRecordsRequest extends $dara.Model {
    /**
     * @remarks
     * The session ID.
     *
     * This parameter is required.
     *
     * @example
     * 1e28530a0da2c4755f165b1b8b9a73c9
     */
    sessionId?: string;
    /**
     * @remarks
     * The product source. Valid value: polardb-console.
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
