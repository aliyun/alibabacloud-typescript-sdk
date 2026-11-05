import * as $dara from '@darabonba/typescript';
export declare class RestartAIDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
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
