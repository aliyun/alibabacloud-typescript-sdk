// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceCenterServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The initialization status of the service. Valid values:
   * 
   * *   Pending: The service is being initialized.
   * *   Finished: The service is initialized.
   * 
   * @example
   * Pending
   */
  initialStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD5F848D-CCDC-5464-93E1-4BA50A4826DD
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Enabled: The service is activated.
   * *   Disabled: The service is deactivated.
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

