// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDdosToAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance associated with the Global Accelerator (GA) instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   * 
   * @deprecated
   */
  ddosId?: string;
  /**
   * @remarks
   * The ID of the Global Accelerator (GA) instance with which the Anti-DDoS Pro or Anti-DDoS Premium instance is associated.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  gaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      gaId: 'GaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      gaId: 'string',
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

