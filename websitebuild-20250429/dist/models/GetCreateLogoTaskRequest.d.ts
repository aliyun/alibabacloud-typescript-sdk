import * as $dara from '@darabonba/typescript';
export declare class GetCreateLogoTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The task ID returned when the call is successful. Keep this ID safe. This ID is required when you query the status of device creation.
     *
     * @example
     * 20051349
     */
    taskId?: string;
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
