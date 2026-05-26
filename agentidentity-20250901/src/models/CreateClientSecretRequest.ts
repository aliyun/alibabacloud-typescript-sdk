// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientSecretRequest extends $dara.Model {
  /**
   * @example
   * client_xxxxxxxxxxxxxxxxxxxx
   */
  clientId?: string;
  /**
   * @example
   * my-web-app
   */
  clientName?: string;
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientName: 'ClientName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientName: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

