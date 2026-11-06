import * as $dara from '@darabonba/typescript';
export declare class SubmitSkillVersionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     *
     * @example
     * 1.0.0
     */
    data?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
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
