// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllMemberResponseBodyData extends $dara.Model {
  memberId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllMemberResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllMemberResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllMemberResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

