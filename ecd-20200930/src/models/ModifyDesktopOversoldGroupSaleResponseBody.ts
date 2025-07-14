// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopOversoldGroupSaleResponseBodyData extends $dara.Model {
  orderId?: number;
  oversoldGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      oversoldGroupId: 'OversoldGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      oversoldGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

