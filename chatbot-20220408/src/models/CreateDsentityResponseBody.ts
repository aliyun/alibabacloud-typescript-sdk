// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDSEntityResponseBody extends $dara.Model {
  /**
   * @example
   * 23436345
   */
  entityId?: number;
  /**
   * @example
   * adfad2343f1f2r
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

