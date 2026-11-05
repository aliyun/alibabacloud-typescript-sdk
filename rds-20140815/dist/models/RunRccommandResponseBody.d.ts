import * as $dara from '@darabonba/typescript';
export declare class RunRCCommandResponseBody extends $dara.Model {
    commandId?: string;
    invokeId?: string;
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
