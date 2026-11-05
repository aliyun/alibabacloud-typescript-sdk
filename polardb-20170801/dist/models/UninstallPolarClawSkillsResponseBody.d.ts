import * as $dara from '@darabonba/typescript';
export declare class UninstallPolarClawSkillsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 123456
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
