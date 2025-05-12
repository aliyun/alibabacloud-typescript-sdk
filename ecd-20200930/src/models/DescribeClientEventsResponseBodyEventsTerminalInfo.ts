// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientEventsResponseBodyEventsTerminalInfo extends $dara.Model {
  model?: string;
  productName?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      productName: 'ProductName',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      productName: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

