// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList } from "./EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList";


export class EnterpriseAccountQueryAccountsInfoResponseBody extends $dara.Model {
  accountInfoDtoList?: EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList[];
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountInfoDtoList: 'AccountInfoDtoList',
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoDtoList: { 'type': 'array', 'itemType': EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList },
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accountInfoDtoList)) {
      $dara.Model.validateArray(this.accountInfoDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

