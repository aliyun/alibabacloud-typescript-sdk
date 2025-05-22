// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindProduceAuthorizationResponseBodyDataAuthorizedUserList } from "./BindProduceAuthorizationResponseBodyDataAuthorizedUserList";


export class BindProduceAuthorizationResponseBodyData extends $dara.Model {
  authorizedUserList?: BindProduceAuthorizationResponseBodyDataAuthorizedUserList[];
  message?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      authorizedUserList: 'AuthorizedUserList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserList: { 'type': 'array', 'itemType': BindProduceAuthorizationResponseBodyDataAuthorizedUserList },
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedUserList)) {
      $dara.Model.validateArray(this.authorizedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

