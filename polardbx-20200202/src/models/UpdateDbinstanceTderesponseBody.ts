// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDBInstanceTDEResponseBodyData } from "./UpdateDbinstanceTderesponseBodyData";


export class UpdateDBInstanceTDEResponseBody extends $dara.Model {
  data?: UpdateDBInstanceTDEResponseBodyData;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDBInstanceTDEResponseBodyData,
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

