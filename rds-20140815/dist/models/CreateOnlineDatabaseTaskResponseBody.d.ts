import * as $dara from '@darabonba/typescript';
export declare class CreateOnlineDatabaseTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 1B2EBD14-36F6-4645-A3F9-DE19D321C18F
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
