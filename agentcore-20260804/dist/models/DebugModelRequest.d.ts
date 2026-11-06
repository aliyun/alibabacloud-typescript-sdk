import * as $dara from '@darabonba/typescript';
export declare class DebugModelRequestBody extends $dara.Model {
    /**
     * @remarks
     * The prompt used to verify the model invocation pipeline.
     *
     * This parameter is required.
     *
     * @example
     * hello
     */
    prompt?: string;
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
export declare class DebugModelRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: DebugModelRequestBody;
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
