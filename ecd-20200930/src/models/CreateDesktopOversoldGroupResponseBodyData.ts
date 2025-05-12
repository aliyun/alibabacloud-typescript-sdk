// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopOversoldGroupResponseBodyData extends $dara.Model {
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

