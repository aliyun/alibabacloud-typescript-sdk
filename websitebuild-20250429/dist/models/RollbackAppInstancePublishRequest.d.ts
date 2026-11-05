import * as $dara from '@darabonba/typescript';
export declare class RollbackAppInstancePublishRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The deployment channel.
     *
     * @example
     * PC
     */
    deployChannel?: string;
    /**
     * @remarks
     * The release number.
     *
     * @example
     * 123
     */
    publishNumber?: string;
    /**
     * @remarks
     * Specifies whether to perform a quick rollback.
     *
     * @example
     * true
     */
    quickRollback?: string;
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
