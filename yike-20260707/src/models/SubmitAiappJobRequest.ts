// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAppJobRequest extends $dara.Model {
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  appId?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * ******20b48fb04***
   */
  clientToken?: string;
  /**
   * @remarks
   * The task inputs.
   * 
   * @example
   * {
   *   "InputPrompt": "xxxx"
   * }
   */
  inputs?: string;
  /**
   * @remarks
   * The custom fields.
   * 
   * @example
   * {\\"Key\\":\\"Value\\"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      inputs: 'Inputs',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      inputs: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

