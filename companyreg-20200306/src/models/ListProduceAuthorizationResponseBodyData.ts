// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProduceAuthorizationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 12195411612139999
   */
  authorizedUserId?: string;
  /**
   * @example
   * test@alibaba-inc.com
   */
  authorizedUserName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserId: 'AuthorizedUserId',
      authorizedUserName: 'AuthorizedUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserId: 'string',
      authorizedUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

