import * as $dara from '@darabonba/typescript';
export declare class CreateDdrInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The endpoint of the new instance.
     * > The **DBInstanceNetType** parameter determines whether the endpoint is an internal endpoint or a public endpoint.
     *
     * @example
     * rm-****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The ID of the new instance.
     *
     * @example
     * rm-****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 2038691****
     */
    orderId?: string;
    /**
     * @remarks
     * The port used to connect to the new instance.
     * > The **DBInstanceNetType** parameter determines whether the port is an internal port or a public port.
     *
     * @example
     * 3306
     */
    port?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E52666CC-330E-418A-8E5B-A19E3FB42D13
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
