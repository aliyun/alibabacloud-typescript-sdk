// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GitLabConfig extends $dara.Model {
  /**
   * @example
   * your-token
   */
  token?: string;
  /**
   * @example
   * http://gitlab.c16194660f14898a0810408171302ac.cn-shanghai.alicontainer.com/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

