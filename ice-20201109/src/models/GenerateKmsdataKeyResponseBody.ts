// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateKMSDataKeyResponseBodyDataKey } from "./GenerateKmsdataKeyResponseBodyDataKey";


export class GenerateKMSDataKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data key.
   */
  dataKey?: GenerateKMSDataKeyResponseBodyDataKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataKey: 'DataKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataKey: GenerateKMSDataKeyResponseBodyDataKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataKey && typeof (this.dataKey as any).validate === 'function') {
      (this.dataKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

