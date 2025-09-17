// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationResponseBody extends $dara.Model {
  /**
   * @example
   * 9e5448c7-edaf-49aa-9887-0fcd0832306c
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

