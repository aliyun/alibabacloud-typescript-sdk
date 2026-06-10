// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDSEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the updated entity.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * df23fgh4hyj67hn56
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

