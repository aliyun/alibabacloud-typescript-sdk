import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceAutoUpgradeMinorVersionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * A31818D5-0550-4A81-8D13-B45948D7193F
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
