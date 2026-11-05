import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterPrimaryZoneResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * ED12C6FF-3261-4571-AB57-3570F6******
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
