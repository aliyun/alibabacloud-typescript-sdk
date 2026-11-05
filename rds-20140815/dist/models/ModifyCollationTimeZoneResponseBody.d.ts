import * as $dara from '@darabonba/typescript';
export declare class ModifyCollationTimeZoneResponseBody extends $dara.Model {
    /**
     * @remarks
     * The system character set collation.
     *
     * @example
     * Chinese_PRC_CS_AS
     */
    collation?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-bp15qi0nd1u27****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 58D48758-F035-52D3-A4FB-80C73DA3E95C
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 56365****
     */
    taskId?: string;
    /**
     * @remarks
     * The time zone.
     *
     * @example
     * China Standard Time
     */
    timezone?: string;
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
