// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAppResponseBody extends $dara.Model {
  /**
   * @example
   * 83A9075B-C646-59A9-8232-CAE41AF4B9E3
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

