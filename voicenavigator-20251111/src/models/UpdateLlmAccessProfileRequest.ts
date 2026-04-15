// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLlmAccessProfileRequestProfile extends $dara.Model {
  /**
   * @example
   * akm-091e4c2c-9938-4a0d-ade2-b9c477fbcbdb
   */
  apiKey?: string;
  /**
   * @example
   * api.llm.enpoint.example.com
   */
  endpoint?: string;
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
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4060
   */
  instanceId?: string;
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

