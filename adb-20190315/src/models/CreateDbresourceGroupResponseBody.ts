// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3A8F6106-6AFD-5A34-9C80-8DE2C42D06E8
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

