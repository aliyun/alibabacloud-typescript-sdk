import * as $dara from '@darabonba/typescript';
export declare class GetIdentityProviderServiceProviderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The SAML assertion consumer service (ACS) URL of the local SP, which is configured in the external IdP.
     *
     * @example
     * https://sp.example.com/saml/acs
     */
    acsUrl?: string;
    /**
     * @remarks
     * The entity ID of the local SP, which is configured in the external IdP. This is not the Entity ID of the external IdP.
     *
     * @example
     * https://sp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * The metadata XML of the local SP, which is imported by the external IdP. You cannot submit this XML as the IdP XML for SAML configuration.
     *
     * @example
     * <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://sp.example.com/entity"><SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://sp.example.com/saml/acs" index="0"/></SPSSODescriptor></EntityDescriptor>
     */
    metadataXml?: string;
    /**
     * @remarks
     * Required. The query parameter supports only the exact value SAML. The response returns SAML.
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
     * The business result code. Handle failures by combining the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The result structure is described in the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, which does not ensure that the background node is completed.
     */
    data?: GetIdentityProviderServiceProviderResponseBodyData;
    /**
     * @remarks
     * The processing status of this request, which is not equivalent to the final result of the background node.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or fault message. For asynchronous node results, check by using the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID used to associate this call with troubleshooting. Retain this ID when a failure occurs.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. A value of true indicates that the request is processed successfully. For asynchronous writes, you must continue to query the task results.
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
