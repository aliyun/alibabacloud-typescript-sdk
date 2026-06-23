// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualPhysicalConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7035627E-1C1D-5BC7-A830-F897A35912D1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the VLAN ID of the virtual physical connection was successfully modified.
   * 
   * - **true**: The VLAN ID was modified.
   * 
   * - **false**: The VLAN ID was not modified.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

