// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetupBroadcastTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the broadcast table is configured.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

