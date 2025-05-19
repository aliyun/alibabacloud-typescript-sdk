// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMyGroupsResponseBodyGroup } from "./GetMyGroupsResponseBodyGroup";


export class GetMyGroupsResponseBody extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  group?: GetMyGroupsResponseBodyGroup;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      group: 'Group',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      group: GetMyGroupsResponseBodyGroup,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

