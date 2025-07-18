// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpIdaas2SubConfig extends $dara.Model {
  applicationId?: string;
  clientId?: string;
  clientSecret?: string;
  eventAesKey?: string;
  eventLabel?: string;
  instanceId?: string;
  publicKeyEndpoint?: string;
  region?: string;
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

