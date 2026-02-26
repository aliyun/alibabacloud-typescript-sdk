// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceCenterServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The initialization status. Valid values:
   * 
   * - Pending
   * 
   * - Finished
   * 
   * @example
   * Pending
   */
  initialStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD5F848D-CCDC-5464-93E1-4BA50A4826DD
   */
  requestId?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - Enabled
   * 
   * - Disabled
   * 
   * @example
   * Enabled
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      initialStatus: 'InitialStatus',
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialStatus: 'string',
      requestId: 'string',
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

