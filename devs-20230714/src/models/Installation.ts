// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Installation extends $dara.Model {
  /**
   * @example
   * https://github.com/login/oauth/authorize?client_id=86059a1b2bb20d3e5fc3&scope=repo,repo:status,delete_repo
   */
  actionUri?: string;
  /**
   * @example
   * Please click \"actionUri\" to complete the OAuth authorization process
   */
  message?: string;
  /**
   * @example
   * finished
   */
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      actionUri: 'actionUri',
      message: 'message',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUri: 'string',
      message: 'string',
      stage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

