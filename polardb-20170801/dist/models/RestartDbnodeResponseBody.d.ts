import * as $dara from '@darabonba/typescript';
export declare class RestartDBNodeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D0CEC6AC-7760-409A-A0D5-E6CD86******
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
