// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The effective strategy version number after the update for the memory type. If the strategy remains unchanged, the version number is the same as before the update.
   * 
   * @example
   * 2
   */
  strategyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      strategyVersion: 'strategyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

