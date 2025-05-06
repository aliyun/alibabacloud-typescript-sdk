// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStoragePerformanceResponseBody extends $dara.Model {
  /**
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @example
   * 2035629******
   */
  orderId?: string;
  /**
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

