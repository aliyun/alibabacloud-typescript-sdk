// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceCenterServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The initialization status of the feature. Valid values:
   * 
   * *   Pending: The feature is being initialized.
   * *   Finished: The feature is initialized.
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
   * 81671397-1425-51F1-A144-4799E01BEBFF
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   Disabled: The feature is disabled.
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

