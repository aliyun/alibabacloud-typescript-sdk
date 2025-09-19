// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListStrategyUuidCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of the servers on which the application whitelist policy takes effect.
   * 
   * @example
   * 9
   */
  uuidCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uuidCount: 'UuidCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uuidCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

