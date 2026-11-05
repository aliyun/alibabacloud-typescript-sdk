import * as $dara from '@darabonba/typescript';
export declare class GetWorkspaceAgenticFsMountRamAuthorizeUrlResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The RAM authorization URL. After you open the URL and complete the authorization, call the verification API.
     *
     * @example
     * https://ram.console.aliyun.com/authorize?request=%7B%22referrer%22%3A%22AgentCore%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22AgentCore.CustomRoleForOSSObjectRestore%22%2C%22roleName%22%3A%22AgentCoreWorkspaceRoleExample%22%2C%22rolePolicies%22%3A%5B%7B%22policyName%22%3A%22AgentCoreNasMountExample%22%2C%22policyType%22%3A%22Custom%22%2C%22templateId%22%3A%22NasFileSystemClientMount%22%2C%22templateValue%22%3A%7B%22nasFileSystem%22%3A%22acs%3Anas%3Acn-hangzhou%3A1234567890123456%3Afilesystem%2F0123456789%22%2C%22nasAccessPoint%22%3A%22acs%3Anas%3Acn-hangzhou%3A1234567890123456%3Aaccesspoint%2Fap-0123456789abcdef0%22%7D%7D%5D%7D%5D%7D
     */
    authorizeUrl?: string;
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
export declare class GetWorkspaceAgenticFsMountRamAuthorizeUrlResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The response data.
     */
    data?: GetWorkspaceAgenticFsMountRamAuthorizeUrlResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
