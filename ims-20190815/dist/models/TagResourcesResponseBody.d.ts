import * as $dara from '@darabonba/typescript';
export declare class TagResourcesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3687BD52-49FD-585B-AB14-CD05B7C76963
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
