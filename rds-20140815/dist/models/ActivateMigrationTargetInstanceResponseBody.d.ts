import * as $dara from '@darabonba/typescript';
export declare class ActivateMigrationTargetInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The name of the target instance.
     *
     * @example
     * pgm-bp102g323jd4****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 76364A52-E0AB-5CC8-9818-CF1DC482C092
     */
    requestId?: string;
    /**
     * @remarks
     * The internal IP address of the self-managed PostgreSQL database.
     *
     * @example
     * 172.16.XX.XX
     */
    sourceIpAddress?: string;
    /**
     * @remarks
     * The port number of the self-managed PostgreSQL database.
     *
     * @example
     * 5432
     */
    sourcePort?: number;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 440913675
     */
    taskId?: number;
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
