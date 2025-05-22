// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BindProduceAuthorizationResponseBodyDataAuthorizedUserList extends $dara.Model {
  /**
   * @example
   * 2
   */
  accountValidType?: number;
  /**
   * @example
   * 1219541161213058
   */
  userId?: string;
  /**
   * @example
   * test@alibaba-inc.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountValidType: 'AccountValidType',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountValidType: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

