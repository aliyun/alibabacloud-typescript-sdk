// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceLogStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C55A3E5-638A-5D6E-9A2F-C3CE5A677EC5
   */
  requestId?: string;
  /**
   * @remarks
   * The log enabling status of the protected object. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

