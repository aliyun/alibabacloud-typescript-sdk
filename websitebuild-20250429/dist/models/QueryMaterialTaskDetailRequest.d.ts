import * as $dara from '@darabonba/typescript';
export declare class QueryMaterialTaskDetailRequest extends $dara.Model {
    /**
     * @remarks
     * The task ID.
     *
     * This parameter is required.
     *
     * @example
     * c3r127e325at9yd
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
