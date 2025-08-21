// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDSEntityResponseBody extends $dara.Model {
  /**
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @example
   * 4dfghf56235asdf452
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
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

