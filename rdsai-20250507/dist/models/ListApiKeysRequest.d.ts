import * as $dara from '@darabonba/typescript';
export declare class ListApiKeysRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the instance.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    page?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
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
