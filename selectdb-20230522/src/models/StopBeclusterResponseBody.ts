// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopBEClusterResponseBody extends $dara.Model {
  /**
   * @example
   * BC854513-E85E-54F3-9842-B9CCD3308CDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

