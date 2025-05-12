// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDesktopOversoldGroupResponseBodyData } from "./CreateDesktopOversoldGroupResponseBodyData";


export class CreateDesktopOversoldGroupResponseBody extends $dara.Model {
  data?: CreateDesktopOversoldGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDesktopOversoldGroupResponseBodyData,
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

