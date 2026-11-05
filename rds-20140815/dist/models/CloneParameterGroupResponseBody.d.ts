import * as $dara from '@darabonba/typescript';
export declare class CloneParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1D3D5995-6BDD-43B5-93B8-2C41A2ACD6AA
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
