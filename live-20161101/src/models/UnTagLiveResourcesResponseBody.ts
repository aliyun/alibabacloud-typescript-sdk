// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagLiveResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 97C68796-EB7F-4D41-9D5B-12B909D76508
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

