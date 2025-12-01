// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaskOssImageResponseBody extends $dara.Model {
  /**
   * @example
   * 136082B3-B21F-5E9D-B68E-991FFD205D24
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

