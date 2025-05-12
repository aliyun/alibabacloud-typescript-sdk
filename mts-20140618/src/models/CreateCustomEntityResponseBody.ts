// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomEntityResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  customEntityId?: string;
  /**
   * @example
   * 580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customEntityId: 'CustomEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntityId: 'string',
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

