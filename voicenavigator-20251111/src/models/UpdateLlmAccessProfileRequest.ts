// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLlmAccessProfileRequestProfile extends $dara.Model {
  /**
   * @remarks
   * The API key of the third-party model.
   * 
   * @example
   * akm-091e4c2c-9938-4a0d-ade2-b9c477fbcbdb
   */
  apiKey?: string;
  /**
   * @remarks
   * The endpoint of the third-party model.
   * 
   * @example
   * api.llm.enpoint.example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the third-party model configuration.
   * 
   * @example
   * Qwen-Omni
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
   * The ID of the third-party model configuration.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4060
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter settings.
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

