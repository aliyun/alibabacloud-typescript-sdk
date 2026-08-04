// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpIdaas2SubConfig extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the application within the IDaaS instance.
   */
  applicationId?: string;
  /**
   * @remarks
   * The client ID of the application registered with the identity provider.
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret used to authenticate the application with the identity provider.
   */
  clientSecret?: string;
  /**
   * @remarks
   * The AES encryption key for securing event data.
   */
  eventAesKey?: string;
  /**
   * @remarks
   * A label that identifies the event subscription.
   */
  eventLabel?: string;
  /**
   * @remarks
   * The unique identifier of the IDaaS instance.
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the endpoint providing the public key for token signature verification.
   */
  publicKeyEndpoint?: string;
  /**
   * @remarks
   * The deployment region of the IDaaS instance.
   */
  region?: string;
  /**
   * @remarks
   * The SAML metadata in XML format. It specifies the identity provider\\"s configuration, including endpoints and certificates.
   */
  samlMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      eventAesKey: 'EventAesKey',
      eventLabel: 'EventLabel',
      instanceId: 'InstanceId',
      publicKeyEndpoint: 'PublicKeyEndpoint',
      region: 'Region',
      samlMetadata: 'SamlMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientId: 'string',
      clientSecret: 'string',
      eventAesKey: 'string',
      eventLabel: 'string',
      instanceId: 'string',
      publicKeyEndpoint: 'string',
      region: 'string',
      samlMetadata: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

