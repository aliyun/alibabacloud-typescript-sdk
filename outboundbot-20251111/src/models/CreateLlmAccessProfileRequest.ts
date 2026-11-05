// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLlmAccessProfileRequestProfile extends $dara.Model {
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
   * https://adbpg-ai-gateway10-cn-beijing.opentrust.net/1383274970238153-193
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

export class CreateLlmAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 33014787-cc13-49d3-ab2f-a98aa8f15fbb
   */
  instanceId?: string;
  /**
   * @remarks
   * The language model access configuration.
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

