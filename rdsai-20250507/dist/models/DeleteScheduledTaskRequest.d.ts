import * as $dara from '@darabonba/typescript';
export declare class DeleteScheduledTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the scheduled inspection configuration.
     *
     * This parameter is required.
     *
     * @example
     * 847268a4-196f-416b-aa12-bfe0c115****
     */
    scheduledId?: string;
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
