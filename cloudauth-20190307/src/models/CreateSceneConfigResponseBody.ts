// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSceneConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
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

