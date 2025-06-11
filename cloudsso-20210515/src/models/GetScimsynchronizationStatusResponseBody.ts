// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSCIMSynchronizationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C086C2F-1C66-57B3-B14E-2C1DA70727CD
   */
  requestId?: string;
  /**
   * @remarks
   * The status of SCIM synchronization. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  SCIMSynchronizationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMSynchronizationStatus: 'SCIMSynchronizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMSynchronizationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

