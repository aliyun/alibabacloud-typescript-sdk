// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The credential value. This is a sensitive field and is not returned in plaintext.
   * 
   * This parameter is required.
   * 
   * @example
   * sk-xxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-1234-567890abcdef
   */
  clientToken?: string;
  /**
   * @remarks
   * The credential description.
   * 
   * @example
   * OpenAI API key for the team
   */
  description?: string;
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ami-2ze8x9c6f
   */
  instanceId?: string;
  /**
   * @remarks
   * The credential key. The value must match the regular expression `^[A-Z_\\][A-Z0-9_\\]*\\$`.
   * 
   * This parameter is required.
   * 
   * @example
   * OPENAI_API_KEY
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
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

