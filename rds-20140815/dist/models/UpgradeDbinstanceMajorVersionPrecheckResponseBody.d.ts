import * as $dara from '@darabonba/typescript';
export declare class UpgradeDBInstanceMajorVersionPrecheckResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * pgm-bp1c808s731l****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 99C1FEEE-FB44-5342-8EBA-DC1E1A1557A4
     */
    requestId?: string;
    /**
     * @remarks
     * The major engine version of the target instance.
     *
     * @example
     * 12.0
     */
    targetMajorVersion?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 41698****
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
