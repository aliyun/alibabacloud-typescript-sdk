// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MartketInstance ID.
   * 
   * @example
   * 786***45
   */
  marketInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2306175xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   **Created**
   * *   **Deploying**
   * *   **DeployedFailed**
   * *   **Deployed**
   * *   **Upgrading**
   * *   **Deleting**
   * *   **Deleted**
   * *   **DeletedFailed**
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      marketInstanceId: 'MarketInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

