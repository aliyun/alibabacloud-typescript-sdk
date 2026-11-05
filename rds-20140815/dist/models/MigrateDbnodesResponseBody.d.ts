import * as $dara from '@darabonba/typescript';
export declare class MigrateDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf64oq9381l03w1qp
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     * - **false**: The request failed.
     *
     * @example
     * true
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
