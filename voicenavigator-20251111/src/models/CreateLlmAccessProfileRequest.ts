// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLlmAccessProfileRequestProfile extends $dara.Model {
  /**
   * @remarks
   * The API key of the third-party model.
   * 
   * @example
   * 70tKleNtMGaaIem7us7Miw-Tf3kPzE6l
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

export class CreateLlmAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter settings.
   */
  profile?: CreateLlmAccessProfileRequestProfile;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      profile: CreateLlmAccessProfileRequestProfile,
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

