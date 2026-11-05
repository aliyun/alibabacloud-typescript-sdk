import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The AI cluster ID.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3F9E6A3B-C13E-4064-A010-18582A******
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
