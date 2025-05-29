// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamingDataServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The real-time data service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

