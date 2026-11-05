import * as $dara from '@darabonba/typescript';
export declare class UpdateCredentialRequestBodyResourceRefs extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the resource.
     *
     * @example
     * agent-xxxx
     */
    resourceId?: string;
    /**
     * @remarks
     * The resource name. This parameter is empty if the resource is deleted.
     *
     * @example
     * my-agent
     */
    resourceName?: string;
    /**
     * @remarks
     * The resource type, such as agent.
     *
     * @example
     * agent
     */
    resourceType?: string;
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
export declare class UpdateCredentialRequestBody extends $dara.Model {
    /**
     * @remarks
     * The new credential content, which is a JSON string. If credentialType is apiKey, this parameter can only contain the apiKey field, and the value cannot be empty. You must specify at least one of credentialMetadata and description.
     *
     * @example
     * {"apiKey":"sk-example-value"}
     */
    credentialMetadata?: string;
    /**
     * @remarks
     * The new credential description, which can be up to 256 characters in length. You must specify at least one of credentialMetadata and description.
     *
     * @example
     * API key used to call model services in the production environment
     */
    description?: string;
    /**
     * @remarks
     * If resourceScope is SPECIFIED, this parameter must be a non-empty array. Each item must include resourceType and resourceId. resourceName is optional.
     */
    resourceRefs?: UpdateCredentialRequestBodyResourceRefs[];
    /**
     * @remarks
     * The application scope of the credential resources. A value of ALL indicates all resources. A value of SPECIFIED indicates only the resources specified by resourceRefs.
     *
     * @example
     * ALL
     */
    resourceScope?: string;
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
export declare class UpdateCredentialRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating the credential.
     */
    body?: UpdateCredentialRequestBody;
    /**
     * @remarks
     * Not supported.
     *
     * @example
     * Not supported
     */
    clientToken?: string;
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
