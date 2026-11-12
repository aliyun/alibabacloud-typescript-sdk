import * as $dara from '@darabonba/typescript';
export declare class DescribeActivationCodeDetailsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The effective period.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    activateAt?: string;
    /**
     * @remarks
     * The content of the activation code. Decode this content from Base64 and save it to the license.lic file for PolarDB to read during startup.
     *
     * @example
     * AAEAA******AAA=
     */
    certContentB64?: string;
    /**
     * @remarks
     * The description of the activation code.
     *
     * @example
     * testCode
     */
    description?: string;
    /**
     * @remarks
     * The expiration time.
     *
     * @example
     * 2054-10-09 16:46:20
     */
    expireAt?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtModified?: string;
    /**
     * @remarks
     * The activation code ID.
     *
     * @example
     * 123
     */
    id?: number;
    /**
     * @remarks
     * The MAC address.
     *
     * @example
     * 12:34:56:78:98:00
     */
    macAddress?: string;
    /**
     * @remarks
     * The name of the activation code.
     *
     * @example
     * testName
     */
    name?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F2A9EFA7-915F-4572-8299-85A307******
     */
    requestId?: string;
    /**
     * @remarks
     * The unique identifier of the database.
     *
     * @example
     * 1234567890123456
     */
    systemIdentifier?: string;
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
