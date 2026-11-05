import * as $dara from '@darabonba/typescript';
export declare class DeleteParameterTimedScheduleTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 16C62438-491B-5C02-9B49-BA924A1372A2
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
