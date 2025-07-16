// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDBInstanceSSLResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2209883
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceSSLResponseBody extends $dara.Model {
  data?: UpdateDBInstanceSSLResponseBodyData;
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
      data: UpdateDBInstanceSSLResponseBodyData,
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

