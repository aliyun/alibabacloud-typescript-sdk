import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceMetricsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pgm-bp1s1j103lo6****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * B55934BB-FFAA-5276-80A8-E0FDB12810B3
     */
    requestId?: string;
    /**
     * @remarks
     * The scope of the modification. Valid values:
     * * **instance**: instance level.
     * * **region**: region level.
     *
     * @example
     * instance
     */
    scope?: string;
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
