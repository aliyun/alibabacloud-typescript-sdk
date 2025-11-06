// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRegistrantProfileResponseBody extends $dara.Model {
  /**
   * @example
   * 3600000
   */
  registrantProfileId?: number;
  /**
   * @example
   * D09B153B-294D-42F1-BB61-F1C72136DFD3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileId: 'RegistrantProfileId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileId: 'number',
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

