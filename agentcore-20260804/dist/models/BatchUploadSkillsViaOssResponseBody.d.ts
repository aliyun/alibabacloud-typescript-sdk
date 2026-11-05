import * as $dara from '@darabonba/typescript';
export declare class BatchUploadSkillsViaOssResponseBodyDataResults extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * VALIDATION_FAILED
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * Parameter validation failed
     */
    errorMessage?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * skill-example
     */
    name?: string;
    /**
     * @remarks
     * The resource owner.
     *
     * @example
     * alice
     */
    owner?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
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
export declare class BatchUploadSkillsViaOssResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The batch upload results.
     */
    results?: BatchUploadSkillsViaOssResponseBodyDataResults[];
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
export declare class BatchUploadSkillsViaOssResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: BatchUploadSkillsViaOssResponseBodyData;
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
