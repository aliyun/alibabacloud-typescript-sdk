// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
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

