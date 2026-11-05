import * as $dara from '@darabonba/typescript';
export declare class ModifyParameterTimedScheduleTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 6EF82B07-28D2-48D1-B5D6-7E78FED277C7
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
