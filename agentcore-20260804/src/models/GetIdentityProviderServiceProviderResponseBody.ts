// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderServiceProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The SAML assertion consumer service (ACS) URL of the SP. Configure this URL in the external IdP.
   * 
   * @example
   * https://sp.example.com/saml/acs
   */
  acsUrl?: string;
  /**
   * @remarks
   * The entity ID of the SP. Configure this ID in the external IdP. This is not the entity ID of the external IdP.
   * 
   * @example
   * https://sp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The SP metadata XML for the external IdP to import. You cannot submit this XML as the IdP XML for SAML configuration.
   * 
   * @example
   * <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://sp.example.com/entity"><SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://sp.example.com/saml/acs" index="0"/></SPSSODescriptor></EntityDescriptor>
   */
  metadataXml?: string;
  /**
   * @remarks
   * The query parameter is required and only supports the exact value SAML. The response returns SAML.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      acsUrl: 'acsUrl',
      entityId: 'entityId',
      metadataXml: 'metadataXml',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsUrl: 'string',
      entityId: 'string',
      metadataXml: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderServiceProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the request fails, handle the error based on the HTTP status code and the message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is completed.
   */
  data?: GetIdentityProviderServiceProviderResponseBodyData;
  /**
   * @remarks
   * The processing status of the current request. This is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request acceptance or error message. For the result of an asynchronous task, check the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID used to associate the current call with troubleshooting. Keep this ID if the request fails.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * A value of true indicates that the current request is processed successfully. For asynchronous writes, you must continue to query the task result.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIdentityProviderServiceProviderResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

