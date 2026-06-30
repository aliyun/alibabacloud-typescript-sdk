// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDdosFromAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance that is detached from the Global Accelerator instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   * 
   * @deprecated
   */
  ddosId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
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

