// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLlmAccessProfileRequestProfile extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * example-api-key
   */
  apiKey?: string;
  /**
   * @remarks
   * The model service registration URL.
   * 
   * @example
   * wss://example.com/api/realtime
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * Sample configuration
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endpoint: 'Endpoint',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endpoint: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLlmAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The access profile ID.
   * 
   * @example
   * ed06946e-dcbb-4f3a-baf8-a5feae0198e9
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * The language model access configuration.
   */
  profile?: UpdateLlmAccessProfileRequestProfile;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      instanceId: 'InstanceId',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      instanceId: 'string',
      profile: UpdateLlmAccessProfileRequestProfile,
    };
  }

  validate() {
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

