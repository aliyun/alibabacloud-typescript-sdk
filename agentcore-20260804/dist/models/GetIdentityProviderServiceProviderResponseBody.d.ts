import * as $dara from '@darabonba/typescript';
export declare class GetIdentityProviderServiceProviderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The SAML assertion consumer URL of the local SP. Configure it in the external IdP.
     *
     * @example
     * https://sp.example.com/saml/acs
     */
    acsUrl?: string;
    /**
     * @remarks
     * The entity identifier of the local SP. Configure it in the external IdP. This is not the Entity ID of the external IdP.
     *
     * @example
     * https://sp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * The SP metadata XML of the local SP. Use it for import in the external IdP. Do not submit it as the IdP XML for SAML configuration.
     *
     * @example
     * <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://sp.example.com/entity"><SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://sp.example.com/saml/acs" index="0"/></SPSSODescriptor></EntityDescriptor>
     */
    metadataXml?: string;
    /**
     * @remarks
     * Required. The query parameter. Only the exact value SAML is supported. The response returns SAML.
     *
     * @example
     * SAML
     */
    protocol?: string;
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
export declare class GetIdentityProviderServiceProviderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If the request fails, handle the error based on the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The SP information. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, which does not guarantee that the background task is complete.
     */
    data?: GetIdentityProviderServiceProviderResponseBodyData;
    /**
     * @remarks
     * The processing status of the current request. This status is not equivalent to the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message about request acceptance or errors. Check the asynchronous task result by calling the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request. You can use the ID to associate the call with troubleshooting. Keep the ID if the request fails.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous write operations, you must continue to query the task results.
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
