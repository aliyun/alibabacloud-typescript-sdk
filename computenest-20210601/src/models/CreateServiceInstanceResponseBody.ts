// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud Marketplace instance.
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
   * The request ID.
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
   * - **Created**: The service instance is created.
   * 
   * - **Deploying**: The service instance is being deployed.
   * 
   * - **DeployedFailed**: The service instance failed to be deployed.
   * 
   * - **Deployed**: The service instance is deployed.
   * 
   * - **Upgrading**: The service instance is being upgraded.
   * 
   * - **Deleting**: The service instance is being deleted.
   * 
   * - **Deleted**: The service instance is deleted.
   * 
   * - **DeletedFailed**: The service instance failed to be deleted.
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

