// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDesktopOversoldUserGroupResponseBodyData } from "./AddDesktopOversoldUserGroupResponseBodyData";


export class AddDesktopOversoldUserGroupResponseBody extends $dara.Model {
  data?: AddDesktopOversoldUserGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddDesktopOversoldUserGroupResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

