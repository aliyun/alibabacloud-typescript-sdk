import * as $dara from '@darabonba/typescript';
export declare class AppAiStaff extends $dara.Model {
    /**
     * @remarks
     * The employee ID.
     *
     * @example
     * 370196
     */
    staffId?: string;
    /**
     * @remarks
     * The employee name.
     */
    staffName?: string;
    /**
     * @remarks
     * The employee type.
     */
    staffType?: string;
    /**
     * @remarks
     * Valid values: unknown, init, testing, and online.
     *
     * @example
     * online
     */
    status?: string;
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
