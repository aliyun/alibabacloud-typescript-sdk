// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientSecretRequest extends $dara.Model {
  /**
   * @example
   * client-xxxxxxxxxxxxxxxxxxxx
   */
  clientId?: string;
  /**
   * @example
   * my-web-app
   */
  clientName?: string;
  /**
   * @example
   * secret-xxxxxxxxxxxxxxxxxxxx
   */
  clientSecretId?: string;
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientSecretId: 'ClientSecretId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientName: 'string',
      clientSecretId: 'string',
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

