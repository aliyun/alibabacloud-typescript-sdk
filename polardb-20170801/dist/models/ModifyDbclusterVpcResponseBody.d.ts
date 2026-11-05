import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterVpcResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EBEAA83D-1734-42E3-85E3-E25F6E******
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
