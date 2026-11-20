// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateInstanceZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: The operation is successful.
   * - false: The operation fails.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

