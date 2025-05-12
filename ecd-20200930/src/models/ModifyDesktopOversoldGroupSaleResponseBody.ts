// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDesktopOversoldGroupSaleResponseBodyData } from "./ModifyDesktopOversoldGroupSaleResponseBodyData";


export class ModifyDesktopOversoldGroupSaleResponseBody extends $dara.Model {
  data?: ModifyDesktopOversoldGroupSaleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyDesktopOversoldGroupSaleResponseBodyData,
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

