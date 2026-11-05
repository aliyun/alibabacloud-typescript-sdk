import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceMonitorResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 52B9805C-432C-4ED1-83FD-2F916B6D2733
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
