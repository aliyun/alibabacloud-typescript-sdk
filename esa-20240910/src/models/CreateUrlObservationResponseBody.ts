// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUrlObservationResponseBody extends $dara.Model {
  /**
   * @example
   * 35281609698****
   */
  configId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
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

