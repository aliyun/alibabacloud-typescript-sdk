// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientSecretsRequest extends $dara.Model {
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
      clientName: 'ClientName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

