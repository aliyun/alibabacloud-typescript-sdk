import * as $dara from '@darabonba/typescript';
export declare class DescribePolarAgentUserSessionsRequest extends $dara.Model {
    /**
     * @remarks
     * The source of the product. The value is \\`polardb-console\\`.
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
