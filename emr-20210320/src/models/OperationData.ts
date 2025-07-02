// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationData extends $dara.Model {
  actualDeliveredAmounts?: number;
  toBeDeliveredAmounts?: number;
  static names(): { [key: string]: string } {
    return {
      actualDeliveredAmounts: 'actualDeliveredAmounts',
      toBeDeliveredAmounts: 'toBeDeliveredAmounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualDeliveredAmounts: 'number',
      toBeDeliveredAmounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

